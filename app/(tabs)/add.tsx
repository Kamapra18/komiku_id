import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useKomikStore } from "../../store/useKomikStore";

export default function AddKomik() {
  const { addKomik } = useKomikStore();
  const router = useRouter();

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [volume, setVolume] = useState("");

  const handleAdd = () => {
    if (!judul.trim() || !volume.trim()) {
      Alert.alert("Peringatan", "Judul dan Volume wajib diisi.");
      return;
    }
    addKomik({ judul, deskripsi, volume });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Komik</Text>

      <Text>Judul:</Text>
      <TextInput value={judul} onChangeText={setJudul} style={styles.input} />

      <Text>Deskripsi:</Text>
      <TextInput
        value={deskripsi}
        onChangeText={setDeskripsi}
        style={styles.input}
      />

      <Text>Volume:</Text>
      <TextInput
        value={volume}
        onChangeText={setVolume}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Simpan" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
  },
});
