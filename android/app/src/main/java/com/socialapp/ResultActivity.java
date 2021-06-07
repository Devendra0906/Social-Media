package com.socialapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

public class ResultActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);

        SharedPreferences prefs = getSharedPreferences("prenigmaAppGroups",
                Context.MODE_PRIVATE);
        String result = prefs.getString("APP_TOKEN", "");

        Intent intent = new Intent();
        intent.putExtra("token", result);
        setResult(RESULT_OK, intent);
        this.finish();
    }
}
