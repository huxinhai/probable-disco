module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    // 'react-native-dotenv',  // 添加 dotenv 插件
    [
      'module-resolver',
      {
        root: ['./src'], // 设置根目录为 src 文件夹
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src'
        }
      }
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env', // 生成的模块名称，默认是 'process.env'
        path: '.env', // 环境变量文件路径，默认是 '.env'
        blacklist: null, // 黑名单，默认是 null
        whitelist: null, // 白名单，默认是 null
        safe: false, // 是否启用安全模式，默认是 false
        allowUndefined: true // 是否允许未定义的环境变量，默认是 false
      }
    ],
    ['react-native-reanimated/plugin']
  ]
}
