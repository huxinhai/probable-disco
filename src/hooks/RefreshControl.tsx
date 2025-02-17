import { useCallback, useState } from 'react'

export const useRefresh = () => {
  const [refreshing, setRefreshing] = useState(!1)
  const onRefresh = useCallback(async (cb: () => Promise<any>) => {
    setRefreshing(!0)
    cb?.().finally(() => setRefreshing(!1))
    // setRefreshing(!1)
  }, [])

  return { refreshing, onRefresh, setRefreshing }
}
