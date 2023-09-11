import React from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Bottom = () => {
  return (
    <ImageBackground
      source={require("../assets/bottom.png")} // 배경 이미지로 사용할 이미지의 경로
      style={styles.container}
    >
      <TouchableOpacity style={styles.menuItem}>
        <Image
          source={require("../assets/community.png")}
          style={styles.icon}
        />
        <Text style={styles.menuText}>커뮤니티</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require("../assets/message.png")} style={styles.icon} />
        <Text style={styles.menuText}>대화</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image
          source={require("../assets/bottomIcon.png")}
          style={{ width: 64, height: 64, top: -50 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToHome}>
        <Image source={require("../assets/friends.png")} style={styles.icon} />
        <Text style={styles.menuText}>친구</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require("../assets/profile.png")} style={styles.icon} />
        <Text style={styles.menuText}>마이페이지</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFBF6",
    height: 110,
    width: "100%", // 화면 너비에 맞게 확장
  },

  menuItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#1F1F1F",
    textAlign: "center",
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default Bottom;
