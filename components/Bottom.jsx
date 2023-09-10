import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Bottom = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bottomIcon.png")}
        style={styles.bottomIcon}
      />
      <View style={styles.iconsContainer}>
        <View style={styles.iconColumn}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../assets/community.svg")}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.iconText}>커뮤니티</Text>
        </View>
        <View style={styles.iconColumn}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../assets/Mssg.svg")}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.iconText}>대화</Text>
        </View>
        <View style={styles.iconColumn}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../assets/friend.svg")}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.iconText}>친구</Text>
        </View>
        <View style={styles.iconColumn}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../assets/profile.svg")}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.iconText}>마이페이지</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  bottomIcon: {
    marginBottom: 10,
    width: 64,
    height: 64,
    alignSelf: "center",
  },
  iconsContainer: {
    position: "absolute",
    top: 30,
    left: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconColumn: {
    flexDirection: "column",
  },
  iconWrapper: {
    marginBottom: 10,
    width: 24,
    height: 24,
    alignSelf: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  iconText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#1F1F1F",
    textAlign: "center",
  },
});

export default Bottom;
