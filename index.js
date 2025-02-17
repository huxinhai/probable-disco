/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
// import {Request} from '@/http/request'
import {Request as GiggleRequest} from 'musical-giggle'
import {API_URL} from '@env'
import {getToken} from '@/http/token'



GiggleRequest.init(API_URL, getToken)
// Request.init()

AppRegistry.registerComponent(appName, () => App)
