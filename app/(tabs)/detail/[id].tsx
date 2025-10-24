import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useKomikStore } from "../../../store/useKomikStore";

export default function DetailKomik() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { komiks, updateKomik } = useKomikStore();

  const komik = komiks.find((k) => k.id === id);

  const [judul, setJudul] = useState(komik?.judul || "");
  const [deskripsi, setDeskripsi] = useState(komik?.deskripsi || "");
  const [volume, setVolume] = useState(komik?.volume || "");

  if (!komik) return <Text>Komik tidak ditemukan.</Text>;

  const handleUpdate = () => {
    if (!judul.trim() || !volume.trim()) {
      Alert.alert("Peringatan", "Judul dan Volume wajib diisi.");
      return;
    }

    updateKomik(id as string, {
      judul,
      deskripsi,
      volume,
    });

    Alert.alert("Berhasil", "Data komik berhasil diperbarui.");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Komik</Text>

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

      <Button title="Simpan Perubahan" onPress={handleUpdate} />
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
