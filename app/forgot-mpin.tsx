import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ForgotMPIN() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSendOtp = () => {
    if (!phone) {
      alert("Please enter registered mobile number");
      return;
    }

    router.push("/otp");
  };

  return (
    <LinearGradient
      colors={["#3B82F6", "#7C3AED"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Forgot MPIN</Text>
        <Text style={styles.subtitle}>
          Enter your registered mobile number to receive OTP
        </Text>

        {/* Label */}
        <Text style={styles.label}>Registered Mobile Number</Text>

        {/* Input with Icon */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#888" />
          <TextInput
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSendOtp}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        {/* Back Link */}
        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.backLink}>Back to Login</Text>
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
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  backLink: {
    textAlign: "center",
    color: "#3B82F6",
    marginTop: 5,
  },
});