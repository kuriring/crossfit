import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [weight, setWeight] = useState("");

  const percentages = Array.from({ length: 15 }, (_, i) => 100 - i * 5);

  const calculateWeight = (percentage) => {
    const weightValue = parseFloat(weight);
    if (isNaN(weightValue) || weightValue <= 0) return "0.00";
    return (weightValue * (percentage / 100)).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>체중 비율 계산기</Text>
      <TextInput
        style={styles.input}
        placeholder="체중 입력"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <FlatList
        data={percentages}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Text style={styles.result}>
            {item}%: {calculateWeight(item)} kg
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
