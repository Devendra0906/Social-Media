//
//  RNStorageManager.h
//  chatbot
//
//  Created by Nirav Joshi on 08/07/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#elif __has_include("React/RCTBridgeModule.h")
#import "React/RCTBridgeModule.h"
#else
#import "RCTBridgeModule.h"
#endif

NS_ASSUME_NONNULL_BEGIN

@interface RNStorageManager : NSObject <RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
