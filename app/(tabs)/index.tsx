import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddKomikModal from "../../components/add";
import { useKomikStore } from "../../store/useKomikStore";

export default function HomeScreen() {
  const router = useRouter();
  const { komiks, toggleStatus, removeKomik } = useKomikStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedKomik, setSelectedKomik] = useState<any | null>(null);

  const handleDelete = (id: string, judul: string) => {
    Alert.alert(
      "Konfirmasi Hapus",
      `Apakah kamu yakin ingin menghapus komik "${judul}"?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => removeKomik(id),
        },
      ]
    );
  };

  const handleEdit = (komik: any) => {
    setSelectedKomik(komik);
    setModalVisible(true);
  };

  const handleAdd = () => {
    setSelectedKomik(null);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koleksi Komik</Text>

      <FlatList
        data={komiks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/detail/${item.id}`)} // 👈 navigasi ke halaman detail
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.judul}</Text>
              <Text style={styles.info}>Tipe: {item.type_komik}</Text>
              <Text style={styles.status}>
                Status:{" "}
                <Text
                  style={{
                    color: item.status === "Tersedia" ? "green" : "orange",
                  }}>
                  {item.status}
                </Text>
              </Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                {item.status === "Tersedia" ? (
                  <Ionicons name="checkmark-circle" size={28} color="#2ecc71" />
                ) : (
                  <Ionicons name="radio-button-on" size={28} color="#2563EB" />
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Ionicons name="create" size={26} color="#f39c12" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDelete(item.id, item.judul)}>
                <Ionicons name="close-circle" size={28} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada komik ditambahkan</Text>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={handleAdd}
        activeOpacity={0.7}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <AddKomikModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        editData={selectedKomik}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#149cac",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 1,
  },
  name: { fontWeight: "bold", fontSize: 16, color: "#333" },
  info: { fontSize: 14, color: "#555" },
  status: { fontSize: 14, marginTop: 4 },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#777",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#149cac",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
