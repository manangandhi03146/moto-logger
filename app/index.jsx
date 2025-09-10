import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Home() {
  const [running, setRunning] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 26, fontWeight: "600", color: "white" }}>Moto Logger</Text>
      <Text style={{ color: "white", fontSize:20 }}>Points: {points}</Text>
      <Pressable
        onPress={() => setRunning(true)}
        style={{ backgroundColor: running ? "#ccc" : "#2a6", padding: 14, borderRadius: 12 }}
        disabled={running}
      >
        <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>Start</Text>
      </Pressable>
      <Pressable
        onPress={() => setRunning(false)}
        style={{ backgroundColor: !running ? "#ccc" : "#b22", padding: 14, borderRadius: 12 }}
        disabled={!running}
      >
        <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>Stop</Text>
      </Pressable>
      <Text style={{ color: "#666" }}>
      </Text>
    </View>
  );
}
