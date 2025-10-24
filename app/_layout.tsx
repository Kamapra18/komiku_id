import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Komiku ",
        headerStyle: { backgroundColor: "#149cac" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
}
