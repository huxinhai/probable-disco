
import Icon from '@react-native-vector-icons/ant-design'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Announcements from './Announcements.tsx'
import FrequentQuestions from './FrequentQuestions.tsx'
import Home from './Home.tsx'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f39555',
        tabBarInactiveTintColor: 'gray',
        animation:'fade'
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'hone',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={'FrequentQuestions'}
        component={FrequentQuestions}
        options={{
          tabBarLabel: 'ms',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'solution'} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={'Announcements'}
        component={Announcements}
        options={{
          tabBarLabel: 'bs',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'signature'} color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
