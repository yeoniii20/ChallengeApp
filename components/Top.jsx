import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Top = () => {
  const [progress, setProgress] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.text}>D - {progress}%</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress}%`,
              },
            ]}
          />
        </View>
        <Image source={require("../assets/setting3.svg")} style={styles.icon} />
        <Image
          source={require("../assets/notification.svg")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#1F1F1F",
    backgroundColor: "#FFF",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 52,
    paddingBottom: 12,
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  progressBar: {
    position: "relative",
    width: 175,
    height: 24,
    borderRadius: 29,
    borderWidth: 1.5,
    borderColor: "#1F1F1F",
    overflow: "hidden",
  },
  progressFill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#FFA851",
    borderRadius: 29,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default Top;
