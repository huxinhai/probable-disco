import { useEffect, useState } from 'react'

export const CountdownTimer = (timer = 60) => {
  const [seconds, setSeconds] = useState(timer)
  const [isActive, setIsActive] = useState(!1)
  const [status, setStatus] = useState<boolean>(!1)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = void 0

    // 只有当倒计时启动时才开始减少时间
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    } else if (seconds === 0) {
      clearInterval(timer)
      setStatus(!1)
    }

    return () => clearInterval(timer)
  }, [isActive, seconds])

  const startTimer = () => {
    setIsActive(!0)
    setStatus(!0)
  }
  const stopTimer = () => {
    setIsActive(!1)
    setStatus(!1)
  }

  const resetTimer = () => {
    setSeconds(timer)
    setIsActive(!1)
    setStatus(!1)
  }
  const restartTimer = () => {
    setSeconds(timer)
    setIsActive(!0)
    setStatus(!0)
  }

  return { resetTimer, startTimer, stopTimer, seconds, status, restartTimer }
}
