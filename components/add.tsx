import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Genre, TypeKomik, useKomikStore } from "../store/useKomikStore";

interface AddKomikModalProps {
  visible: boolean;
  onClose: () => void;
  editData?: any | null;
}

export default function AddKomikModal({
  visible,
  onClose,
  editData,
}: AddKomikModalProps) {
  const { addKomik, updateKomik } = useKomikStore();

  const [judul, setJudul] = useState(editData?.judul || "");
  const [deskripsi, setDeskripsi] = useState(editData?.deskripsi || "");
  const [volume, setVolume] = useState(editData?.volume || "");
  const [penulis, setPenulis] = useState(editData?.penulis || "");
  const [genre, setGenre] = useState<Genre>(editData?.genre || Genre.Sejarah);
  const [typeKomik, setTypeKomik] = useState<TypeKomik>(
    editData?.type_komik || TypeKomik.GraphicNovel
  );

  useEffect(() => {
    if (editData) {
      setJudul(editData.judul);
      setDeskripsi(editData.deskripsi);
      setVolume(editData.volume);
      setPenulis(editData.penulis);
      setGenre(editData.genre);
      setTypeKomik(editData.type_komik);
    } else {
      setJudul("");
      setDeskripsi("");
      setVolume("");
      setPenulis("");
      setGenre(Genre.Sejarah);
      setTypeKomik(TypeKomik.GraphicNovel);
    }
  }, [editData]);

  const handleSave = () => {
    if (!judul.trim() || !volume.trim()) {
      Alert.alert("Peringatan", "Judul dan Volume wajib diisi.");
      return;
    }

    if (editData) {
      updateKomik(editData.id, {
        judul,
        deskripsi,
        volume,
        penulis,
        genre,
        type_komik: typeKomik,
      });
    } else {
      addKomik({
        judul,
        deskripsi,
        volume,
        penulis,
        genre,
        type_komik: typeKomik,
      });
    }

    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Tambah Komik</Text>

          <Text>Judul:</Text>
          <TextInput
            value={judul}
            onChangeText={setJudul}
            style={styles.input}
          />

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

          <Text>Penulis:</Text>
          <TextInput
            value={penulis}
            onChangeText={setPenulis}
            style={styles.input}
          />

          <Text>Genre:</Text>
          <Picker
            selectedValue={genre}
            onValueChange={(val) => setGenre(val)}
            style={styles.picker}>
            {Object.values(Genre).map((g) => (
              <Picker.Item key={g} label={g} value={g} />
            ))}
          </Picker>

          <Text>Tipe Komik:</Text>
          <Picker
            selectedValue={typeKomik}
            onValueChange={(val) => setTypeKomik(val)}
            style={styles.picker}>
            {Object.values(TypeKomik).map((t) => (
              <Picker.Item key={t} label={t} value={t} />
            ))}
          </Picker>

          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.btn, styles.cancel]}
              onPress={onClose}>
              <Text style={styles.btnText}>Batal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, styles.save]}
              onPress={handleSave}>
              <Text style={styles.btnText}>
                {editData ? "Perbarui" : "Simpan"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 10,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cancel: {
    backgroundColor: "#aaa",
    marginRight: 8,
  },
  save: {
    backgroundColor: "#007AFF",
  },
  btnText: { color: "white", fontWeight: "bold" },
});
