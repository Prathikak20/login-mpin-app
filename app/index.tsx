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

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [mpin, setMpin] = useState("");

  const handleLogin = () => {
    if (!phone || !mpin) {
      alert("Please enter mobile number and MPIN");
      return;
    }

    // Dummy validation
    if (mpin.length < 4) {
      alert("MPIN must be at least 4 digits");
      return;
    }

    // Navigate to home or dashboard
    router.push("/"); 
  };

  return (
    <LinearGradient
      colors={["#3B82F6", "#7C3AED"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Login to your account
        </Text>

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#888" />
          <TextInput
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* MPIN */}
        <Text style={styles.label}>MPIN</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput
            placeholder="Enter MPIN"
            keyboardType="number-pad"
            secureTextEntry
            maxLength={6}
            style={styles.input}
            value={mpin}
            onChangeText={setMpin}
          />
        </View>

        {/* Forgot MPIN */}
        <TouchableOpacity
          onPress={() => router.push("/forgot-mpin")}
        >
          <Text style={styles.forgot}>Forgot MPIN?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
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
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  forgot: {
    textAlign: "right",
    color: "#3B82F6",
    marginBottom: 20,
    fontSize: 13,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});