import type { navigationProps } from '@/global'
import { scale, sw } from '@/utils/scale'
import { Badge, Blank, Button, Flex } from '@fruits-chain/react-native-xiaoshu'
import type React from 'react'
import { useEffect, useState } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from '@react-native-vector-icons/ant-design'
import { observer } from 'mobx-react'
import type { RootStackParamList } from '@/types/type'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TRY_AI } from '@/key'



const Home: React.FC<navigationProps> = ({ navigation }) => {

  const [isTry, setIsTry] = useState<boolean>(!1)



  AsyncStorage.getItem(TRY_AI).then((r) => setIsTry(!r))

  const navigatePush = (uri: keyof RootStackParamList, params?: any) => {

  }

  const gridList = [
    {
      title: 'AI面试辅助',
      tip: '全自动实时给出面试答案',
      require: require('@/assets/image/kf.webp'),
      onPress: () => {
        navigatePush('FrequentQuestions')
      }
    },
    {
      title: 'AI笔试辅助',
      tip: '远程截图，笔试答案秒出',
      require: require('@/assets/image/bjb.webp'),
      onPress: () => {
        navigatePush('Announcements')
      }
    },

      {
        title: '岗位包录取',
        tip: '一个月无offer全额退款',
        require: require('@/assets/image/gj.webp'),
        onPress: () => {
          navigatePush('WebView', {
            src: 'ApplyJob?spm=tech.0.0.0&type=voice&ghost=0&t=1?spm=ready.0.0.0'
          })
        }
      },
     {
        title: '超值求职套餐',
        tip: '超值套餐，早日上岸',
        require: require('@/assets/image/qb.webp'),
        onPress: () => {
          navigatePush('pay', { tab: 1 })
        }
      }
  ]

  const featureLit = [
    {
      title: '简历模式',
      tip: '上传简历，AI更懂你',
      require: require('@/assets/image/wjj.webp'),
      onPress: () => {
        navigatePush('WebView', { src: 'ResumeModel?spm=pay.0.0.0' })
      }
    },
    {
      title: '自定义问答库',
      tip: '提前预设问答',
      require: require('@/assets/image/dad.webp'),
      onPress: () => {
        navigatePush('WebView', { src: 'setup?spm=tech.0.0.0&type=pq' })
      }
    },
    {
      title: '面经广场',
      tip: '海量面试真题，面试不慌',
      require: require('@/assets/image/gc.webp'),
      onPress: () => {
        navigatePush('WebView', { src: 'experience?spm=meetingtask.0.0.0' })
      }
    },
    {
      title: '公告日志',
      tip: '查看最新面试狗公告',
      require: require('@/assets/image/rl.webp'),
      onPress: () => {
        navigatePush('WebView', { src: 'news?spm=experience.0.0.0' })
      }
    }
  ]

  useEffect(() => {

  }, [])

  return (
    <ScrollView>
      <ImageBackground
        source={require('@/assets/image/home_backage.webp')}
        style={styles.backgroundImage}
      >
        {!isIos ? (
          <View style={styles.badgeContainer}>
            <Badge count={'限时优惠'}>
              <Button
                textStyle={{
                  fontSize: sw`27`,
                  fontWeight: 'bold'
                }}
                style={styles.button}
              >
                gopay
              </Button>
            </Badge>
            <Button
              textStyle={{
                fontSize: sw`27`,
                fontWeight: 'bold'
              }}
              style={[styles.button, { backgroundColor: '#F3A200' }]}
            >
              syjc
            </Button>
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={{
            margin: 'auto',
            alignItems: 'center'
          }}
          onPress={() => {
            navigatePush('FrequentQuestions')
          }}
        >
          <FastImage
            source={
              isTry
                ? require('@/assets/image/111.gif')
                : require('@/assets/image/222.gif')
            }
            style={styles.gifBut}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>

      {/* <Button onPress={() => updateVersion()} >更新</Button>
      <Blank>
        <Progress percentage={progress} />
      </Blank> */}

      <Blank left={15} right={15}>
        <Flex style={styles.grid} justify={'between'} wrap={'wrap'}>
          {gridList.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.gridItem}
              onPress={item.onPress}
            >
              <View style={styles.gridItemBg}>
                <View style={styles.gridItemBgLeft} />
                <View style={styles.gridItemBgRight} />
              </View>
              <View>
                <View
                  style={{
                    marginLeft: sw`13.82`,
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: sw`38.8`,
                    marginTop: sw`27`
                  }}
                >
                  <Text
                    style={{
                      fontSize: sw`17`,
                      fontWeight: 'bold',
                      lineHeight: sw`38.8`
                    }}
                  >
                    {item.title}
                  </Text>
                  <Icon name={'caret-right'} color={'#D8D8D8'} size={sw`12`} />
                </View>
                <Text
                  style={{
                    marginLeft: sw`15`,
                    fontSize: sw`10`,
                    lineHeight: sw`30.8`,
                    color: '#ACACAC',
                    fontWeight: 500
                  }}
                >
                  {item.tip}
                </Text>
              </View>
              <Image style={styles.gridItemImg} source={item.require} />
            </TouchableOpacity>
          ))}
        </Flex>
        <Text
          style={{
            fontSize: sw`15`,
            fontWeight: 'bold',
            lineHeight: sw`30.8`,
            marginTop: sw`80`,
            marginBottom: sw`17`
          }}
        >
          热门功能
        </Text>
        <Flex justify={'between'} wrap={'wrap'}>
          {featureLit.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={{
                width: sw`213`,
                height: sw`64`,
                alignItems: 'center',
                marginTop: index > 2 ? sw`20` : 0
              }}
              onPress={item.onPress}
            >
              <Image
                source={item.require}
                style={{
                  width: sw`66`,
                  height: sw`64`,
                  position: 'absolute',
                  zIndex: 1,
                  left: 0
                }}
              />

              <View
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: sw`55`,
                  borderRadius: sw`45`,
                  paddingLeft: sw`63`
                }}
              >
                <Text
                  style={{
                    fontSize: sw`15`,
                    fontWeight: 'bold',
                    lineHeight: sw`30.8`
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: sw`11`,
                    color: '#ACACAC',
                    fontWeight: 'bold'
                  }}
                >
                  {item.tip}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </Flex>

      </Blank>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: sw`329`,
    position: 'relative'
  },
  badgeContainer: {
    // alignContent: 'center',
    paddingTop: 0,
    marginTop: sw`94`,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: sw`25`,
    paddingRight: sw`25`

    // marginRight: sw`30`
  },
  button: {
    width: sw`168.56`,
    height: sw`55.21`,
    backgroundColor: '#000',
    borderRadius: sw`10`
  },
  gifBut: {
    width: sw`312`,
    height: sw`68`
  },
  grid: {
    marginTop: sw`81`
  },
  gridItem: {
    position: 'relative',
    height: sw`100`,
    flexDirection: 'row',
    width: scale(154.28 + 58.72)
  },
  gridItemBg: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 0
  },
  gridItemBgLeft: {
    width: sw`154.28`,
    height: sw`78.16`,
    backgroundColor: '#fff',
    borderTopLeftRadius: sw`20`,
    borderTopRightRadius: sw`40`,
    borderBottomLeftRadius: sw`20`
  },
  gridItemBgRight: {
    backgroundColor: '#fff',
    borderTopLeftRadius: sw`20`,
    borderTopRightRadius: sw`20`,
    borderBottomRightRadius: sw`20`,
    width: sw`58.72`,
    height: sw`58.62`
  },
  gridItemImg: {
    width: sw`96`,
    height: sw`96`,
    position: 'absolute',
    right: sw`5`
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default observer(Home)
