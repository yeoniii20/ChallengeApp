import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PlusBtn = ({ color, width, height }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderRadius: 50,
          backgroundColor: color,
          width: width,
          height: height,
          borderWidth: 2,
          borderColor: "#4B4B4B",
          borderStyle: "solid",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {}}
        activeOpacity={0.6}
      >
        <Image
          source={require("../../assets/plusIcon.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
export default PlusBtn;
