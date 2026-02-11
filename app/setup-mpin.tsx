import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function SetupMPIN() {
  const router = useRouter();
  const [mpin, setMpin] = useState("");

  const handleComplete = () => {
    if (mpin.length !== 4) {
      alert("Please enter 4-digit MPIN");
      return;
    }

    // Move to confirm page
    router.push({
      pathname: "/confirm-mpin",
      params: { mpin },
    });
  };

  return (
    <LinearGradient
      colors={["#3B82F6", "#7C3AED"]}
      style={styles.container}
    >
      {/* Top Section */}
      <Text style={styles.heading}>Setup MPIN</Text>
      <Text style={styles.subheading}>
        Create a secure 4-digit MPIN for quick access
      </Text>

      {/* White Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Set Your MPIN</Text>
        <Text style={styles.cardSub}>
          Enter your MPIN below
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={4}
          secureTextEntry
          value={mpin}
          onChangeText={setMpin}
          placeholder="••••"
          placeholderTextColor="#aaa"
        />

        {/* Complete Button */}
        <TouchableOpacity
          style={styles.completeBtn}
          onPress={handleComplete}
        >
          <Text style={styles.completeText}>
            Complete Setup
          </Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Security Card */}
        <View style={styles.securityCard}>
          <Text style={styles.securityTitle}>
            Security Tips:
          </Text>
          <Text>• Avoid simple numbers like 1234</Text>
          <Text>• Don’t share your MPIN</Text>
          <Text>• Use something unique</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 90,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subheading: {
    color: "white",
    marginBottom: 25,
  },
  card: {
    width: width * 0.75,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSub: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  completeBtn: {
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  completeText: {
    color: "white",
    fontWeight: "bold",
  },
  backBtn: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontWeight: "bold",
  },
  securityCard: {
    backgroundColor: "#FFF3CD",
    padding: 12,
    borderRadius: 10,
  },
  securityTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});