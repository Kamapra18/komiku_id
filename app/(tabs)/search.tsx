import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useKomikStore } from "../../store/useKomikStore";

export default function SearchScreen() {
  const { komiks, theme } = useKomikStore();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const currentTheme =
    theme === "dark"
      ? {
          background: "#121212",
          card: "#1e1e1e",
          text: "#f1f1f1",
          title: "#4dd0e1",
          border: "#333",
        }
      : {
          background: "#f9f9f9",
          card: "#fff",
          text: "#333",
          title: "#149cac",
          border: "#ddd",
        };

  const filtered = komiks.filter((item) =>
    item.judul.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color={currentTheme.title} />
        <TextInput
          placeholder="Cari komik..."
          placeholderTextColor="#888"
          style={[styles.input, { color: currentTheme.text }]}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: currentTheme.text }]}>
            {query ? "Tidak ditemukan komik." : "Ketik untuk mencari komik."}
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: currentTheme.card,
                borderColor: currentTheme.border,
              },
            ]}
            onPress={() => router.push(`/detail/${item.id}`)}>
            <Image
              source={{
                uri: item.url_image || "https://via.placeholder.com/60",
              }}
              style={styles.thumb}
            />
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: currentTheme.title }]}>
                {item.judul}
              </Text>
              <Text style={[styles.info, { color: currentTheme.text }]}>
                Tipe: {item.type_komik}
              </Text>
              <Text style={[styles.status, { color: currentTheme.text }]}>
                Status:{" "}
                <Text
                  style={{
                    color: item.status === "Tersedia" ? "green" : "orange",
                  }}>
                  {item.status}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  info: { fontSize: 14 },
  status: { fontSize: 13, marginTop: 2 },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});
