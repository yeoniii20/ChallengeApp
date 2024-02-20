import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomToggleSwitch from "../ToggleSwitch/customToggleSwitch";

const TodoCard = ({ title, time }) => {
  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#4B4B4B",
          borderStyle: "solid",
          padding: 16,
          backgroundColor: "#fff",
          borderRadius: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image
              source={require("../../assets/todoIcon.png")}
              style={styles.icon}
            />
            <Text
              style={{
                color: "#1B1B1B",
                fontSize: 16,
                fontWeight: 600,
                alignSelf: "center",
              }}
            >
              {title}
            </Text>
          </View>
          <Text
            style={{
              color: "#1B1B1B",
              fontSize: 16,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            {time} 분
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

export default TodoCard;
