import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
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

  const [judul, setJudul] = useState(editData?.judul || "");
  const [deskripsi, setDeskripsi] = useState(editData?.deskripsi || "");
  const [volume, setVolume] = useState(editData?.volume || "");
  const [penulis, setPenulis] = useState(editData?.penulis || "");
  const [urlImage, setUrlImage] = useState(editData?.url_image || "");

  // Dropdown states
  const [openGenre, setOpenGenre] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [genre, setGenre] = useState(editData?.genre || Genre.Sejarah);
  const [typeKomik, setTypeKomik] = useState(
    editData?.type_komik || TypeKomik.GraphicNovel
  );

  const genreItems = Object.values(Genre).map((g) => ({
    label: g,
    value: g,
  }));
  const typeItems = Object.values(TypeKomik).map((t) => ({
    label: t,
    value: t,
  }));

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

  // ✅ Fungsi pilih gambar dari galeri
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        "Izin diperlukan",
        "Aktifkan izin akses galeri terlebih dahulu."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setUrlImage(result.assets[0].uri); // simpan URI lokal
    }
  };

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
      transparent
      onRequestClose={onClose}>
      <View style={[styles.overlay, { backgroundColor: themeStyle.modalBg }]}>
        <ScrollView
          contentContainerStyle={[
            styles.modalContainer,
            { backgroundColor: themeStyle.backgroundColor },
          ]}>
          <Text style={[styles.title, { color: themeStyle.textColor }]}>
            {editData ? "Edit Komik" : "Tambah Komik"}
          </Text>

          {/* Input fields */}
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

          {/* Ganti input URL → tombol pilih gambar */}
          <Text style={{ color: themeStyle.textColor }}>Gambar Komik:</Text>
          <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
            <Text style={styles.imageBtnText}>Pilih Gambar</Text>
          </TouchableOpacity>

          {urlImage ? (
            <Image
              source={{ uri: urlImage }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10,
                marginTop: 10,
              }}
              resizeMode="cover"
            />
          ) : (
            <Text style={{ color: themeStyle.textColor, marginBottom: 10 }}>
              Belum ada gambar dipilih
            </Text>
          )}

          {/* Genre Dropdown */}
          <Text style={{ color: themeStyle.textColor }}>Genre:</Text>
          <DropDownPicker
            open={openGenre}
            value={genre}
            items={genreItems}
            setOpen={setOpenGenre}
            setValue={setGenre}
            setItems={() => {}}
            placeholder="Pilih genre"
            style={{
              backgroundColor: themeStyle.backgroundColor,
              borderColor: themeStyle.borderColor,
              marginBottom: 10,
            }}
            textStyle={{ color: themeStyle.textColor }}
            dropDownContainerStyle={{
              backgroundColor: themeStyle.backgroundColor,
              borderColor: themeStyle.borderColor,
            }}
          />

          {/* Type Komik Dropdown */}
          <Text style={{ color: themeStyle.textColor }}>Tipe Komik:</Text>
          <DropDownPicker
            open={openType}
            value={typeKomik}
            items={typeItems}
            setOpen={setOpenType}
            setValue={setTypeKomik}
            setItems={() => {}}
            placeholder="Pilih tipe komik"
            style={{
              backgroundColor: themeStyle.backgroundColor,
              borderColor: themeStyle.borderColor,
              marginBottom: 10,
            }}
            textStyle={{ color: themeStyle.textColor }}
            dropDownContainerStyle={{
              backgroundColor: themeStyle.backgroundColor,
              borderColor: themeStyle.borderColor,
            }}
          />

          {/* Buttons */}
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
        </ScrollView>
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
  imageBtn: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  imageBtnText: {
    color: "white",
    fontWeight: "bold",
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
