import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { useKomikStore } from "../store/useKomikStore";

export default function RootLayout() {
  const { theme, toggleTheme } = useKomikStore();

  // 🎨 Tentukan warna sesuai tema
  const currentTheme =
    theme === "dark"
      ? {
          header: "#1e1e1e",
          text: "#f1f1f1",
          background: "#121212",
          icon: "#4dd0e1",
        }
      : {
          header: "#149cac",
          text: "#fff",
          background: "#f9f9f9",
          icon: "#fff",
        };

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.background }}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "light-content"}
        backgroundColor={currentTheme.header}
      />

      <Stack
        screenOptions={{
          headerTitle: "Komiku",
          headerStyle: { backgroundColor: currentTheme.header },
          headerTintColor: currentTheme.text,
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: currentTheme.background },
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 12 }}>
              <Ionicons
                name={theme === "dark" ? "moon" : "sunny"}
                size={24}
                color={currentTheme.icon}
              />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      </Stack>
    </View>
  );
}
