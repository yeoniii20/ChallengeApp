import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";

export default function Home() {
  // 프로필 데이터 예시
  const profiles = [
    {
      id: 1,
      name: "대학생, 27",
      bio: "그리다 사랑담다",
      imageUrl: "https://via.placeholder.com/150",
      tags: ["#서울 동대문구", "#175-180"],
    },
    {
      id: 2,
      name: "대학생, 25",
      bio: "연세대 인/영문학",
      imageUrl: "https://via.placeholder.com/150",
      tags: ["#서울 마포구", "#170-175"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {profiles.map((profile) => (
        <View key={profile.id} style={styles.card}>
          <Avatar
            size="large"
            rounded
            source={{ uri: profile.imageUrl }}
            containerStyle={styles.profileImage}
          />
          <View style={styles.textArea}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.bio}>{profile.bio}</Text>
            <View style={styles.tags}>
              {profile.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0", // 무채색 배경
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  profileImage: {
    marginRight: 10,
  },
  textArea: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#555",
  },
  tags: {
    flexDirection: "row",
    marginTop: 4,
  },
  tag: {
    marginRight: 5,
    color: "#555",
  },
});
