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
  const { addKomik, updateKomik, theme } = useKomikStore();

  // 🧱 State input
  const [judul, setJudul] = useState(editData?.judul || "");
  const [deskripsi, setDeskripsi] = useState(editData?.deskripsi || "");
  const [volume, setVolume] = useState(editData?.volume || "");
  const [penulis, setPenulis] = useState(editData?.penulis || "");
  const [genre, setGenre] = useState<Genre>(editData?.genre || Genre.Sejarah);
  const [typeKomik, setTypeKomik] = useState<TypeKomik>(
    editData?.type_komik || TypeKomik.GraphicNovel
  );
  const [urlImage, setUrlImage] = useState(editData?.url_image || "");

  useEffect(() => {
    if (editData) {
      setJudul(editData.judul);
      setDeskripsi(editData.deskripsi);
      setVolume(editData.volume);
      setPenulis(editData.penulis);
      setGenre(editData.genre);
      setTypeKomik(editData.type_komik);
      setUrlImage(editData.url_image || "");
    } else {
      setJudul("");
      setDeskripsi("");
      setVolume("");
      setPenulis("");
      setGenre(Genre.Sejarah);
      setTypeKomik(TypeKomik.GraphicNovel);
      setUrlImage("");
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
        url_image: urlImage,
      });
    } else {
      addKomik({
        judul,
        deskripsi,
        volume,
        penulis,
        genre,
        type_komik: typeKomik,
        url_image: urlImage,
      } as any);
    }

    onClose();
  };

  const isDark = theme === "dark";
  const themeStyle = {
    backgroundColor: isDark ? "#1e1e1e" : "#fff",
    textColor: isDark ? "#f1f1f1" : "#333",
    borderColor: isDark ? "#555" : "#ccc",
    modalBg: "rgba(0,0,0,0.4)",
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={[styles.overlay, { backgroundColor: themeStyle.modalBg }]}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: themeStyle.backgroundColor },
          ]}>
          <Text style={[styles.title, { color: themeStyle.textColor }]}>
            {editData ? "Edit Komik" : "Tambah Komik"}
          </Text>

          <Text style={{ color: themeStyle.textColor }}>Judul:</Text>
          <TextInput
            value={judul}
            onChangeText={setJudul}
            style={[
              styles.input,
              {
                color: themeStyle.textColor,
                borderColor: themeStyle.borderColor,
              },
            ]}
            placeholder="Masukkan judul komik"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
          />

          <Text style={{ color: themeStyle.textColor }}>Deskripsi:</Text>
          <TextInput
            value={deskripsi}
            onChangeText={setDeskripsi}
            style={[
              styles.input,
              {
                color: themeStyle.textColor,
                borderColor: themeStyle.borderColor,
              },
            ]}
            placeholder="Masukkan deskripsi"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
          />

          <Text style={{ color: themeStyle.textColor }}>Volume:</Text>
          <TextInput
            value={volume}
            onChangeText={setVolume}
            keyboardType="numeric"
            style={[
              styles.input,
              {
                color: themeStyle.textColor,
                borderColor: themeStyle.borderColor,
              },
            ]}
            placeholder="Masukkan volume"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
          />

          <Text style={{ color: themeStyle.textColor }}>Penulis:</Text>
          <TextInput
            value={penulis}
            onChangeText={setPenulis}
            style={[
              styles.input,
              {
                color: themeStyle.textColor,
                borderColor: themeStyle.borderColor,
              },
            ]}
            placeholder="Masukkan nama penulis"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
          />

          <Text style={{ color: themeStyle.textColor }}>URL Gambar:</Text>
          <TextInput
            value={urlImage}
            onChangeText={setUrlImage}
            style={[
              styles.input,
              {
                color: themeStyle.textColor,
                borderColor: themeStyle.borderColor,
              },
            ]}
            placeholder="https://contoh.com/gambar.jpg"
            placeholderTextColor={isDark ? "#888" : "#aaa"}
          />

          <Text style={{ color: themeStyle.textColor }}>Genre:</Text>
          <Picker
            selectedValue={genre}
            onValueChange={(val) => setGenre(val)}
            style={[
              styles.picker,
              {
                color: themeStyle.textColor,
                backgroundColor: themeStyle.backgroundColor,
              },
            ]}>
            {Object.values(Genre).map((g) => (
              <Picker.Item key={g} label={g} value={g} />
            ))}
          </Picker>

          <Text style={{ color: themeStyle.textColor }}>Tipe Komik:</Text>
          <Picker
            selectedValue={typeKomik}
            onValueChange={(val) => setTypeKomik(val)}
            style={[
              styles.picker,
              {
                color: themeStyle.textColor,
                backgroundColor: themeStyle.backgroundColor,
              },
            ]}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
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
