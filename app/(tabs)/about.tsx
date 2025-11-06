import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useKomikStore } from "../../store/useKomikStore";

export default function AboutScreen() {
  const { theme } = useKomikStore();
  const isDark = theme === "dark";

  const themeStyle = {
    backgroundColor: isDark ? "#121212" : "#f5f5f5",
    textColor: isDark ? "#f1f1f1" : "#222",
    cardBg: isDark ? "#1f1f1f" : "#fff",
    borderColor: isDark ? "#333" : "#ccc",
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: themeStyle.backgroundColor },
      ]}>
      <View style={[styles.card, { backgroundColor: themeStyle.cardBg }]}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.profileImage}
        />
        <Text style={[styles.name, { color: themeStyle.textColor }]}>
          Kamapra
        </Text>
        <Text style={[styles.role, { color: themeStyle.textColor }]}>
          I Kadek Mario Prayoga
        </Text>
        <Text style={[styles.role, { color: themeStyle.textColor }]}>
          Developer Aplikasi Komiku ID
        </Text>

        <Text style={[styles.desc, { color: themeStyle.textColor }]}>
          Halo! 👋 Saya Kamapra, pengembang aplikasi Komiku ID. Aplikasi ini
          dibuat untuk membantu kamu mengelola koleksi komik favorit dengan
          mudah. Proyek ini dibuat menggunakan React Native (Expo) dan Zustand
          untuk state management.
        </Text>

        <View style={styles.infoBox}>
          <Text style={[styles.infoTitle, { color: themeStyle.textColor }]}>
            💡 Teknologi yang digunakan:
          </Text>
          <Text style={[styles.infoText, { color: themeStyle.textColor }]}>
            • React Native (Expo)
          </Text>
          <Text style={[styles.infoText, { color: themeStyle.textColor }]}>
            • Zustand
          </Text>
          <Text style={[styles.infoText, { color: themeStyle.textColor }]}>
            • AsyncStorage
          </Text>
        </View>

        <Text style={[styles.infoTitle, { color: themeStyle.textColor }]}>
          📬 Hubungi Saya:
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:kamapra10@gmail.com")}>
          <Text style={[styles.link, { color: "#007AFF" }]}>
            kamapra10@gmail.com
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/kamapra18")}>
          <Text style={[styles.link, { color: "#007AFF" }]}>
            github.com/kamapra18
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://expo.dev/accounts/kamapra/projects/Komiku_id"
            )
          }>
          <Text style={[styles.link, { color: "#007AFF" }]}>Expo Project</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.footer, { color: themeStyle.textColor }]}>
        © {new Date().getFullYear()} Komiku ID. Semua Hak Dilindungi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    marginBottom: 10,
  },
  desc: {
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  infoBox: {
    width: "100%",
    marginBottom: 20,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 10,
  },
  link: {
    fontSize: 14,
    marginBottom: 5,
  },
  footer: {
    marginTop: 25,
    fontSize: 12,
  },
});
