import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [weight, setWeight] = useState("");

  const percentages = Array.from({ length: 15 }, (_, i) => 100 - i * 5);

  const calculateWeightInLbs = (percentage: number) => {
    const weightValue = parseFloat(weight);
    if (isNaN(weightValue) || weightValue <= 0) return "0.00";
    
    // Directly calculate weight in pounds (since input is already in lbs)
    return (weightValue * (percentage / 100)).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Percentage Calculator (LBS)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight in LBS"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <FlatList
        data={percentages}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Text style={styles.result}>
            {item}%: {calculateWeightInLbs(item)} lbs
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
