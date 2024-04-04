import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Note from "./constant/note";
import HomeScreen from "./screen/HomeScreen/homeScreen";
import SettingScreen from "./screen/SettingScreen/settingScreen";
import ProcessScreen from "./screen/ProcessScreen/processScreen";

const Stack = createNativeStackNavigator();
// Stack object를 반환함. { Screen, Navigator }로 구성됨.

function App() {
  // 폰트 적용
  const customFonts = {
    // Pretendard
    Pretendard_Thin: require("./assets/fonts/Pretendard-Thin.otf"),
    Pretendard_ExtraLight: require("./assets/fonts/Pretendard-ExtraLight.otf"),
    Pretendard_Light: require("./assets/fonts/Pretendard-Light.otf"),
    Pretendard_Regular: require("./assets/fonts/Pretendard-Regular.otf"),
    Pretendard_Medium: require("./assets/fonts/Pretendard-Medium.otf"),
    Pretendard_SemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"),
    Pretendard_Bold: require("./assets/fonts/Pretendard-Bold.otf"),
    Pretendard_ExtraBold: require("./assets/fonts/Pretendard-ExtraBold.otf"),
    Pretendard_Black: require("./assets/fonts/Pretendard-Black.otf"),
  };
  async function loadFonts() {
    await Font.loadAsync(customFonts);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    // NavigationContainer로 감싸야 함.
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Note"
      >
        {/* <Stack.Screen name="Note" component={Note} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Process" component={ProcessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
