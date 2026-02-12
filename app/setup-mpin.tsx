import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function SetMPIN() {
  const router = useRouter();
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");

  const handleSave = () => {
    if (!mpin || !confirmMpin) {
      alert("Please fill both fields");
      return;
    }

    if (mpin !== confirmMpin) {
      alert("MPIN does not match");
      return;
    }

    alert("MPIN Saved Successfully");
    router.replace("/");
  };

  return (
    <LinearGradient
      colors={["#3B82F6", "#7C3AED"]}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Centered Title Section */}
        <Text style={styles.title}>Set MPIN</Text>
        <Text style={styles.subtitle}>Secure your account</Text>
        <Text style={styles.note}>MPIN must be 4 or 6 digits</Text>

        {/* Enter MPIN */}
        <TextInput
          style={styles.input}
          placeholder="Enter MPIN"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          keyboardType="number-pad"
          maxLength={6}
          value={mpin}
          onChangeText={setMpin}
        />

        {/* Confirm MPIN */}
        <TextInput
          style={styles.input}
          placeholder="Confirm MPIN"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          keyboardType="number-pad"
          maxLength={6}
          value={confirmMpin}
          onChangeText={setConfirmMpin}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>SAVE MPIN</Text>
        </TouchableOpacity>

        {/* Back */}
        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 5,
  },

  note: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 13,
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#F9FAFB",
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  backText: {
    textAlign: "center",
    marginTop: 15,
    color: "#374151",
  },
});