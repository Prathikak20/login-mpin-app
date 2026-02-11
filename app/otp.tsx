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
import { Ionicons } from "@expo/vector-icons";

export default function OTP() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    // Dummy verification
    if (otp.length === 4) {
      router.push("/setup-mpin"); // ✅ Moves to next page
    } else {
      alert("Enter 4-digit OTP");
    }
  };

  return (
    <LinearGradient
      colors={["#3B82F6", "#7C3AED"]}
      style={styles.container}
    >
      {/* Top Section */}
      <View style={styles.topSection}>
        <Ionicons name="shield-checkmark-outline" size={50} color="#fff" />
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          We've sent a 4-digit code to
        </Text>
        <Text style={styles.phone}>+91 9876543210</Text>
      </View>

      {/* White Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enter Verification Code</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter 4-digit OTP"
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
        />

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Demo OTP Card */}
        <View style={styles.demoCard}>
          <Text style={styles.demoText}>Demo OTP: 1234</Text>
        </View>

        {/* Links */}
        <TouchableOpacity>
          <Text style={styles.link}>Didn’t receive the code?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/login" as any)}>
          <Text style={styles.backLink}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topSection: {
    marginTop: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  subtitle: {
    color: "#E5E7EB",
    marginTop: 5,
  },
  phone: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 3,
  },
  card: {
    width: "85%", // ✅ Reduced width
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 5,
  },
  verifyBtn: {
    width: "100%",
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  verifyText: {
    color: "#fff",
    fontWeight: "600",
  },
  demoCard: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  demoText: {
    color: "#374151",
  },
  link: {
    color: "#3B82F6",
    marginTop: 5,
  },
  backLink: {
    color: "#6B7280",
    marginTop: 8,
  },
});