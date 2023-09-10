import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image } from "react-native"; // Image 컴포넌트를 추가해야 합니다.

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      Alert.alert("Success", "Logged in successfully");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFBF6",
      }}
    >
      <Image
        source={require("../assets/SUNNY.png")}
        style={{
          marginTop: 75,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: "#1F1F1F",
          marginTop: 48,
          textAlign: "center",
        }}
      >
        간편하게 로그인하고 {"\n"}
        써니의 서비스를 이용해보세요
      </Text>
      <Image
        source={require("../assets/kakao_login_large.png")}
        style={{
          width: 335,
          height: 50.25,
          marginTop: 48,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default Login;
