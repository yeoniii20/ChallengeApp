import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jane Doe, 29</Text>
        <Text style={styles.bio}>Loves hiking and outdoor activities.</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="heart" type="font-awesome" color="#ff2d55" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" type="font-awesome" color="#333" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#FFDEE9", // Light coral background
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
});
