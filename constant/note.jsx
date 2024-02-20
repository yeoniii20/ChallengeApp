import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch/toggleSwitch";
import CustomToggleSwitch from "../components/ToggleSwitch/customToggleSwitch";
import MsgModal from "../components/Modal/msgModal";
import OptionModal from "../components/Modal/optionModal";
import TodoCard from "../components/other/todoCard";

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
        <Text style={{ padding: 10, marginTop: 10 }}>toggle switch1</Text>
        <ToggleSwitch isEnable={true} />
        <Text style={{ padding: 10, marginTop: 10 }}>toggle switch2</Text>
        <CustomToggleSwitch isEnable={false} />
        <Button title="modal" onPress={handleOpenModal} />
        <MsgModal
          isVisible={modalVisible}
          message1="'@' 과정을 삭제할까요?"
          message2="삭제한 과정은 복구할 수 없어요"
          onClose={handleCloseModal}
          leftBtnText={"취소"}
          rightBtnText={"삭제하기"}
        />
        <Text style={{ padding: 10, marginTop: 10 }}>option modal</Text>
        <OptionModal />
        <Text style={{ padding: 10, marginTop: 10 }}>todo list card</Text>
        <TodoCard
          isDisabled={true}
          routineName={"머리 감고 화장하기"}
          count={3}
          startTime={"10:20 AM"}
          totalTime={"00시간 20분"}
        />
        <Text style={{ paddingTop: 15, padding: 10 }}>
          todo list card disabled
        </Text>
        <TodoCard
          isDisabled={false}
          routineName={"요리해서 밥 먹기"}
          count={2}
          startTime={"10:20 AM"}
          totalTime={"00시간 10분"}
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
