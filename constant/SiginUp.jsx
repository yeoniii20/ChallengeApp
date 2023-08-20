import { View, Text, TextInput, Button, Alert } from "react-native";

const SiginUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{
          width: "335px",
          height: "48px",
          borderRadius: "8px",
          border: "1.5px solid",
          background: " #FFF",
        }}
        title="시작하기"
      ></Button>
    </View>
  );
};

export default SiginUp;
