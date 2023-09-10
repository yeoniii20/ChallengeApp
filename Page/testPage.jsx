import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const TestPage = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#FFFBF6",
        }}
      >
        {/* <Top /> */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 25,
              marginBottom: 40,
              paddingLeft: 28,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1F1F1F",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              친구 목록
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F" }}>
              대결중인 친구
            </Text>
            <View
              style={{
                width: "100%",
                height: 2,
                background: "grey",
              }}
            />
            <View style={{ display: "flex" }}>
              <Image source={require("../assets/friendIcon.svg")} />
              <Text style={{ fontSize: 16, fontWeight: 500, color: "#1F1F1F" }}>
                친구1
              </Text>
              <Image source={require("../assets/messageIcon.svg")} />
              <Image source={require("../assets/winnerIcon.svg")} />
            </View>
          </View>
        </View>
        {/* <Bottom /> */}
      </View>
    </ScrollView>
  );
};

export default TestPage;
