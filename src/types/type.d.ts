export type RootStackParamList = {
  Main: undefined
  WebView: {
    src: string
    title?: string
  }
  Login: undefined
  SetUp: undefined
  Privacy: undefined
  Home: undefined
  Announcements: undefined
  FrequentQuestions: undefined
  Phone: undefined
  LoginCode: {
    phone: string | number
  },
  LoginPhone: undefined,
  personalInformationSource:undefined
  personalInformationPersonage:{
    id:string
  },
  pay:undefined
}

export interface ApiResponse<T> {
  status: boolean // 请求是否成功
  message: string // 返回的消息
  data: T
}

export type AddKeyToType<T, K extends string, V> = T & { [P in K]: T[V] }
