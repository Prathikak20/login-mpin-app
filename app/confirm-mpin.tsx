import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SetupMPIN() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#5B21B6", "#3B82F6"]}
      style={styles.container}
    >
      {/* Top Title Section */}
      <View style={styles.header}>
        <Text style={styles.lockIcon}>🔒</Text>
        <Text style={styles.title}>Setup MPIN</Text>
        <Text style={styles.subtitle}>
          Create a secure 4-digit MPIN for quick access
        </Text>
      </View>

      {/* White Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Confirm Your MPIN</Text>
        <Text style={styles.cardSubtitle}>
          Enter your MPIN again to confirm
        </Text>

        {/* PIN Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter 4-digit PIN"
          keyboardType="numeric"
          maxLength={4}
          value={pin}
          onChangeText={setPin}
          secureTextEntry
        />

        {/* Complete Setup Button */}
        <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.greenButtonText}>Complete Setup</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Security Tips Card */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>Security Tips:</Text>
          <Text style={styles.tipText}>• Avoid simple numbers</Text>
          <Text style={styles.tipText}>• Don’t share your PIN</Text>
          <Text style={styles.tipText}>• Use something only you know</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  lockIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
  },

  card: {
    backgroundColor: "white",
    width: "85%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  cardSubtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    height: 50,
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },

  greenButton: {
    backgroundColor: "#16A34A",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  greenButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#F3F4F6",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  backButtonText: {
    color: "black",
    fontWeight: "500",
  },

  tipsCard: {
    backgroundColor: "#FFF7ED",
    borderRadius: 10,
    padding: 15,
    width: "90%",
    alignSelf: "center",
  },

  tipsTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  tipText: {
    fontSize: 13,
    marginBottom: 3,
  },
});