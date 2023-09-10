import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder }) => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderColor: isInputFocused ? "#FFA851" : "#C1C1C1",
          },
        ]}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    width: 320,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 11,
    borderWidth: 1.5,
    borderRadius: 8,
    alignSelf: "center",
    outlineWidth: 0, // 포커스 시 기본 아웃라인 제거
    color: "black",
  },
});

export default Input;
