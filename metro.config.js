const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { withNativeWind } = require("nativewind/metro")

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver
const {
  wrapWithReanimatedMetroConfig
} = require('react-native-reanimated/metro-config')

const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native'
    )
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg']
  },
  resetCache: !0
}

const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config)
const nativeWindConfig = withNativeWind(mergedConfig, {
  input: './global.css' // 指定您的 CSS 文件路径
})

module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig)
