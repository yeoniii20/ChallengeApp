import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const OptionModal = () => {
  return (
    <View>
      <View
        style={{
          width: 128,
          borderWidth: 2,
          borderColor: "#4B4B4B",
          borderStyle: "solid",
          borderRadius: 4,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            padding: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderBottomWidth: 2,
            borderBottomColor: "#4B4B4B",
            borderBottomStyle: "solid",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/copyIcon.png")}
            style={styles.icon}
          />
          <Text
            style={{
              color: "#1B1B1B",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            복사하기
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            padding: 8,
            paddingLeft: 16,
            paddingRight: 16,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/deleteIcon.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#EB0016", fontSize: 15, fontWeight: 700 }}>
            삭제하기
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default OptionModal;
