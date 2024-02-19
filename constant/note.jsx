import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch/toggleSwitch";
import CustomToggleSwitch from "../components/ToggleSwitch/customToggleSwitch";
import ModalComponent from "../components/Modal/modalComponent";

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
        <Text style={styles.headerText}>지출 내역 추가</Text>
        <ToggleSwitch />
        <CustomToggleSwitch />
        <Button title="모달 열기" onPress={handleOpenModal} />

        <ModalComponent
          isVisible={modalVisible}
          message="'@' 과정을 시작할까요?\n시작한 과정은 늦추거나 멈출 수 없어요."
          onClose={handleCloseModal}
          leftBtnText={"취소"}
          rightBtnText={"삭제하기"}
        />
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
