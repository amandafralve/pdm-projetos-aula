import React, { useCallback } from "react";
import { StyleSheet, Text, Button, View, Image, FlatList, Alert} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { LOCAL_DATA } from "../data/pizza";

export default function App() {
    const addToCart = (item) => {
        Alert.alert(`${item.name} adicionada ao carrinho!`);
    }

    const chooseSize = (item) => {
    Alert.alert(
        "Escolha o tamanho",
        item.name,
        [
            { text: `Pequena • ${item.valueP}`, onPress: () => addToCart(item, "Pequena") },
            { text: `Grande • ${item.valueG}`,  onPress: () => addToCart(item, "Grande")  },
            { text: "Cancelar", style: "cancel" },
        ],
        { cancelable: true }
        );
    }; 

    const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>
        © {new Date().getFullYear()} Verdespaço Restaurante
        </Text>
    </View>
    );

    const renderItem = useCallback(({ item }) => (
        <View style={styles.card}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
            />
            <Text style={styles.itemDescription}>{item.description}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={styles.itemPrice}>
                        {`Pequena: ${item.valueP}   •   Grande: ${item.valueG}`}
                    </Text>
                </View>
                <Button title="Adicionar" onPress={() => chooseSize(item)} />
            </View>
            
        </View>
    ), []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>VERDESPAÇO RESTAURANTE</Text>
            <View style={styles.locationRow}>
                <FontAwesome6 name="location-dot" size={18} color="#10b981" style={styles.locationIcon} />
                <Text style={styles.subtitle}>
                Rua Quinze de Novembro, 636 — Centro, Pariquera-Açu, SP — 11930-000, Brasil
                </Text>
            </View>
            <Image
                source={{ uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/d7/16/4e/verdespaco-restaurante.jpg?w=900&h=500&s=1" }}
                style={styles.headerImage}
            />
            <Text style={styles.title}>CARDÁPIO</Text>
            <FlatList
                data={LOCAL_DATA}
                renderItem={renderItem}
                ListFooterComponent={<Footer />} 
                keyExtractor={(item) => item.id}
            /> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 64 },
    title: { alignSelf: "center", fontWeight: "bold", fontSize: 18, marginBottom: 12, color: "#9B1A1A" },
    headerImage: { width: "100%", height: 180, marginBottom: 16 },
    listContent: { paddingBottom: 32 },
    card: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        padding: 12,
        backgroundColor: "#fff",
    },
    locationRow: { flexDirection: "row", justifyContent: "center", paddingHorizontal: 20, marginBottom: 12 },
    locationIcon: { marginRight: 6 },
    subtitle: {
        flexShrink: 1,
        fontSize: 14,
        textAlign: "center",
        color: "#374151",
    },
    itemTitle: { fontWeight: "600", fontSize: 16, marginBottom: 8 },
    itemImage: { width: "100%", height: 150, borderRadius: 8 },
    separator: { height: 12 },
    itemPrice: { fontWeight: "600", marginBottom: 10, color: "#111827" },
    button: {
        backgroundColor: "#10b981",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    itemDescription: { marginTop: 8, marginBottom: 8, color: "#6b7280" },
    itemValue: { fontWeight: "bold", marginBottom: 3, fontSize: 22 },
    footer: {
        marginTop: 20,
        paddingVertical: 30,   
        alignItems: "center",
    },
        footerText: {
        color: "#6b7280",
        fontSize: 12,
    },
})