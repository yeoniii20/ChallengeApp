import { View } from "react-native";
import Top from "../components/Top";
import Bottom from "../components/Bottom";
import FriendsList from "../constant/friendsList";

const FriendsPage = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#FFFBF6",
        }}
      >
        <Top />
        <FriendsList />
        <View style={{ position: "absolute", bottom: 70, left: 0, right: 0 }}>
          <Bottom />
        </View>
      </View>
    </>
  );
};

export default FriendsPage;
