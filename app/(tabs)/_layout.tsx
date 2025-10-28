import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useKomikStore } from "../../store/useKomikStore";

export default function TabsLayout() {
  const { theme } = useKomikStore();

  const currentTheme =
    theme === "dark"
      ? {
          background: "#1e1e1e",
          active: "#4dd0e1",
          inactive: "#888",
          border: "#1f1f1f",
        }
      : {
          background: "#fff",
          active: "#149cac",
          inactive: "#999",
          border: "#eee",
        };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentTheme.active,
        tabBarInactiveTintColor: currentTheme.inactive,
        tabBarStyle: {
          backgroundColor: currentTheme.background,
          borderTopColor: currentTheme.border,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="detail/[id]"
        options={{
          title: "Detail",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
