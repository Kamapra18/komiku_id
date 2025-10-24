import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useKomikStore } from "../../../store/useKomikStore";

export default function DetailKomik() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { komiks } = useKomikStore();

  const komik = komiks.find((k) => k.id === id);

  if (!komik) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Komik tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.title}>{komik.judul}</Text>
        <Text style={styles.value}>Deskripsi: {komik.deskripsi}</Text>

        <Text style={styles.value}>Volume: {komik.volume || "-"}</Text>

        <Text style={styles.value}>Penulis: {komik.penulis || "-"}</Text>

        <Text style={styles.value}>Genre: {komik.genre || "-"}</Text>

        <Text style={styles.value}>Tipe Komik: {komik.type_komik}</Text>

        <Text style={styles.label}>Status:</Text>
        <Text
          style={[
            styles.value,
            {
              color: komik.status === "Tersedia" ? "#2ecc71" : "#f39c12",
              fontWeight: "bold",
            },
          ]}>
          {komik.status}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  notFound: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#149cac",
    marginBottom: 16,
    textAlign: "center",
  },
  infoCard: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: "#555",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#149cac",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  backText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
});
