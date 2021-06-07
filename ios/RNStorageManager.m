//
//  RNStorageManager.m
//  chatbot
//
//  Created by Nirav Joshi on 08/07/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNStorageManager.h"

@implementation RNStorageManager

RCT_EXPORT_MODULE(StorageManager);

/**
 * run on the main queue.
 */
- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setObject:(id)object forKey:(NSString *)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSUserDefaults *userDefaults = [[NSUserDefaults alloc] initWithSuiteName:@"group.com.app.prenigma"];
  [userDefaults setObject:object forKey:key];
  [userDefaults synchronize];
  resolve(@{});
}

RCT_EXPORT_METHOD(getObjectForKey:(NSString *)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSUserDefaults *userDefaults = [[NSUserDefaults alloc] initWithSuiteName:@"group.com.app.prenigma"];
  id object = [userDefaults objectForKey:key];
  if (object) {
    resolve(object);
  } else {
    reject(@"404", @"Can not find object for key", [NSError errorWithDomain:@"key not found" code:404 userInfo:@{NSLocalizedDescriptionKey: @"Can not find object for key"}]);
  }
}

RCT_EXPORT_METHOD(removeObjectForKey:(NSString *)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSUserDefaults *userDefaults = [[NSUserDefaults alloc] initWithSuiteName:@"group.com.app.prenigma"];
  [userDefaults removeObjectForKey:key];
  [userDefaults synchronize];
  resolve(@{});
}

RCT_EXPORT_METHOD(removeAllObjects:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *appDomain = [[NSBundle mainBundle] bundleIdentifier];
  NSUserDefaults *userDefaults = [[NSUserDefaults alloc] initWithSuiteName:@"group.com.app.prenigma"];
  [userDefaults removePersistentDomainForName:appDomain];
  [userDefaults synchronize];
  resolve(@{});
}

@end
