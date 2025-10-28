import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useKomikStore } from "../../../store/useKomikStore";

export default function DetailKomik() {
  const { id } = useLocalSearchParams();
  const { komiks, theme } = useKomikStore();

  const komik = komiks.find((k) => k.id === id);

  // Tema dinamis
  const currentTheme =
    theme === "dark"
      ? {
          header: "#1e1e1e",
          text: "#f1f1f1",
          subtext: "#bbb",
          background: "#121212",
          card: "#1e1e1e",
          accent: "#4dd0e1",
        }
      : {
          header: "#149cac",
          text: "#149cac",
          subtext: "#555",
          background: "#f9f9f9",
          card: "#fff",
          accent: "#149cac",
        };

  if (!komik) {
    return (
      <View
        style={[styles.center, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.notFound, { color: currentTheme.text }]}>
          Komik tidak ditemukan.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: currentTheme.background },
      ]}>
      <View
        style={[
          styles.infoCard,
          {
            borderColor: currentTheme.accent,
          },
        ]}>
        <Text style={[styles.title, { color: currentTheme.text }]}>
          {komik.judul}
        </Text>

        {komik.url_image && komik.url_image.trim() !== "" ? (
          <Image
            source={{ uri: komik.url_image }}
            style={styles.image}
            resizeMode="cover"
            onError={(e) =>
              console.log("Gagal memuat gambar:", e.nativeEvent.error)
            }
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: currentTheme.subtext }}>
              Gambar tidak tersedia
            </Text>
          </View>
        )}

        <Text style={[styles.value, { color: currentTheme.subtext }]}>
          Deskripsi: {komik.deskripsi}
        </Text>
        <Text style={[styles.value, { color: currentTheme.subtext }]}>
          Volume: {komik.volume || "-"}
        </Text>
        <Text style={[styles.value, { color: currentTheme.subtext }]}>
          Penulis: {komik.penulis || "-"}
        </Text>
        <Text style={[styles.value, { color: currentTheme.subtext }]}>
          Genre: {komik.genre || "-"}
        </Text>
        <Text style={[styles.value, { color: currentTheme.subtext }]}>
          Tipe Komik: {komik.type_komik}
        </Text>

        <Text style={[styles.label, { color: currentTheme.text }]}>
          Status:
        </Text>
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
    flexGrow: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFound: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  infoCard: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    marginBottom: 4,
  },
  image: {
    width: "100%",
    height: 600,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#eee",
  },
  imagePlaceholder: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
