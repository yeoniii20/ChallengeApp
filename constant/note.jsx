import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch/toggleSwitch";
import CustomToggleSwitch from "../components/ToggleSwitch/customToggleSwitch";
import ModalComponent from "../components/Modal/modalComponent";
import SmallModalComponent from "../components/Modal/smallModalComponent";

function Note({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ToggleSwitch />
        <CustomToggleSwitch />
        <Button title="modal" onPress={handleOpenModal} />
        <ModalComponent
          isVisible={modalVisible}
          message1="'@' 과정을 삭제할까요?"
          message2="삭제한 과정은 복구할 수 없어요"
          onClose={handleCloseModal}
          leftBtnText={"취소"}
          rightBtnText={"삭제하기"}
        />
        <SmallModalComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFFBF6",
    minHeight: "100%",
  },
  contentContainer: {
    marginTop: 25,
    marginBottom: 40,
    paddingLeft: 28,
    paddingRight: 27,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F1F1F",
    textAlign: "center",
  },
});

export default Note;
