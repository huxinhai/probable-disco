#import "AppDelegate.h"

#import "RNBootSplash.h" // ⬅️ add the header import
#import <React/RCTBundleURLProvider.h>
#import "OtaHotUpdate.h"
// #import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"interviewDog";
  // self.dependencyProvider = [RCTAppDependencyProvider new];
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
   return [OtaHotUpdate getBundle];
  // return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];  // 测试
#endif
}

- (void)customizeRootView:(RCTRootView *)rootView {
  [super customizeRootView:rootView];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // ⬅️ initialize the splash screen
}

// 需要执行这个：npx react-native generate-bootsplash ./assets/bootsplash.png

@end
