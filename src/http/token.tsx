import AsyncStorage from '@react-native-async-storage/async-storage'
import { _MSG } from '../key.ts'
import userStore from '../stores/user.ts'

export const asyncStorageToken = async () => {
  if (await AsyncStorage.getItem(_MSG)) {
    return (JSON.parse((await AsyncStorage.getItem(_MSG)) as string) as any)?._t
  }
  return ''
}

export const getToken = async () => {
  const token = userStore.token
  console.log(token,'token');
  if (token) return token
  return await asyncStorageToken()
}


export const removeToken = () => {
  userStore.setToken('')
  userStore.setMsg({ _t: '', date: 0, username: '' })
  userStore.setCurrentUser({
    abConfig: { mjExp: 0 },
    remain: 0,
    role: '',
    src: '',
    username: '',
    packageInfo: undefined
  })
  void AsyncStorage.removeItem(_MSG)
}
