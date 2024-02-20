import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import ToggleSwitch from "../components/ToggleSwitch/toggleSwitch";
import CustomToggleSwitch from "../components/ToggleSwitch/customToggleSwitch";
import MsgModal from "../components/Modal/msgModal";
import OptionModal from "../components/Modal/optionModal";
import PerpationCard from "../components/other/perpationCard";
import PlusBtn from "../components/other/plusBtn";
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {/* <View style={{ flexDirection: "row", gap: 10 }}>
            <View>
              <Text style={{ padding: 10, marginTop: 10 }}>toggle switch1</Text>
              <ToggleSwitch isEnable={true} />
            </View>
            <View>
              <Text style={{ padding: 10, marginTop: 10 }}>toggle switch2</Text>
              <CustomToggleSwitch isEnable={false} />
            </View>
          </View> */}

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
          <Text style={{ padding: 10, marginTop: 10 }}>
            prepare card disabled
          </Text>
          <PerpationCard
            isDisabled={true}
            isModify={false}
            routineName={"머리 감고 화장하기"}
            count={3}
            startTime={"10:20 AM"}
            totalTime={"00시간 20분"}
          />
          <Text style={{ paddingTop: 15, padding: 10 }}>prepare card</Text>
          <PerpationCard
            isDisabled={false}
            isModify={false}
            routineName={"요리해서 밥 먹기"}
            count={2}
            startTime={"10:20 AM"}
            totalTime={"00시간 10분"}
          />
          <Text style={{ padding: 10, marginTop: 10 }}>
            modify prepare card
          </Text>
          <PerpationCard
            isDisabled={false}
            isModify={true}
            routineName={"옷 고르기"}
            count={3}
            startTime={"11:20 AM"}
            totalTime={"00시간 05분"}
          />
          {/* <Text style={{ padding: 10, marginTop: 10 }}>plus btn</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <PlusBtn color={"#FEAC54"} width={40} height={40} />
            <PlusBtn color={"#9BED94"} width={63} height={63} />
          </View> */}
          <Text style={{ padding: 10, marginTop: 10 }}>todo card</Text>
          <TodoCard title={"세수하기"} time={10} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFFBF6",
    minHeight: "100%",
  },
  contentContainer: {
    padding: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F1F1F",
    textAlign: "center",
  },
});

export default Note;
