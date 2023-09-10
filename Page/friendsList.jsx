import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Top from "../components/Top";
import Bottom from "../components/Bottom";

const FriendsList = () => {
  return (
    <View style={styles.container}>
      <Top />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>친구 목록</Text>
        </View>
        <View style={styles.friendListContainer}>
          <Text style={styles.friendListTitle}>대결중인 친구</Text>
          <View style={styles.separator} />
          <View style={styles.friendItem}>
            <Image source={require("../assets/friendIcon.svg")} />
            <Text style={styles.friendName}>친구1</Text>
            <Image source={require("../assets/messageIcon.svg")} />
            <Image source={require("../assets/winnerIcon.svg")} />
          </View>
          {/* Add more friend items as needed */}
        </View>
      </View>
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFBF6",
  },
  contentContainer: {
    flex: 1,
    marginTop: 25,
    marginBottom: 40,
    paddingLeft: 28,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  friendListContainer: {
    flex: 1,
  },
  friendListTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "grey",
    marginBottom: 16,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F1F1F",
    marginLeft: 8,
  },
});

export default FriendsList;
