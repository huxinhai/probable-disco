import type { StackNavigationProp } from '@react-navigation/stack'
import type { RootStackParamList } from '@/types/type'
import type { RouteProp } from '@react-navigation/native'

export type ScreenNavigationProps = StackNavigationProp<RootStackParamList>
export type ProfileScreenRouteProp<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>

export interface navigationProps<T extends keyof RootStackParamList = any> {
  navigation: ScreenNavigationProps
  route: ProfileScreenRouteProp<T>
}
