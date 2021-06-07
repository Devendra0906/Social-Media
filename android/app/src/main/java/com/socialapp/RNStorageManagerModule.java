package com.socialapp;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.SparseArray;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;


public class RNStorageManagerModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    final SparseArray<Promise> mPromises;

    public RNStorageManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);

        mPromises = new SparseArray<>();
    }

    @Override
    public void initialize() {
        super.initialize();

        getReactApplicationContext().addActivityEventListener(this);
    }

    @ReactMethod
    public void setObject(String value, String key, Promise promise) {
        SharedPreferences prefs = this.getReactApplicationContext().getSharedPreferences("prenigmaAppGroups",
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putString(key, value);
        editor.apply();
        promise.resolve(new WritableNativeMap());
    }

    @ReactMethod
    public void getObjectForKey(String key, Promise promise) {
        try {
        Intent intent = new Intent("com.predapp.travelbot.TOKEN");
        getCurrentActivity().startActivityForResult(intent, 1);
        Activity activity = getReactApplicationContext().getCurrentActivity();
            if (activity != null) {
                activity.startActivityForResult(intent, 1);
                mPromises.put(1, promise);
            } else {
                promise.reject("401", "Activity not found");
            }
        }catch (Exception e){
            promise.reject("401", "Intent not found");
        }
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        Promise promise = mPromises.get(requestCode);
        if (promise != null) {
            WritableMap result = new WritableNativeMap();
            result.putInt("resultCode", resultCode);
            result.putMap("data", Arguments.makeNativeMap(data.getExtras()));
            promise.resolve(result);
        }
    }

    @Override
    public String getName() {
        return "StorageManager";
    }

    @Override
    public void onNewIntent(Intent intent) {
        /* Do nothing */
    }
}