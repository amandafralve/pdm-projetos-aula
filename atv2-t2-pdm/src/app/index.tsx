import { useState, useEffect } from 'react';
import { Text, View, FlatList, Button, Image, StyleSheet, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

const API_URL = "https://fakestoreapi.com/products"

export default function App() {
    // ------------- Fetch
    // Estado local - lista vazia para iniciar
    const [data, setData] = useState([]);
    // Para buscar dados da API ao montar o componente
    useEffect(() => {
        fetch(API_URL)
        // Transforma a resposta em JSON
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }, [])

    const renderItem = ({item}) => (
        <View style={styles.card}>
            {/* Container para imagem e rating */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#f5b301" />
                    <Text style={styles.ratingText}>
                    {item.rating.rate} ({item.rating.count})
                    </Text>
                </View>
            </View>
            
            {/* Imprime o título e a descrição de cada item */}
                <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontWeight: "bold"}} >
                    {item.title}
                </Text>
            <Text numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Ionicons
                    name={
                    item.category === "men's clothing" ? "shirt-outline"
                    : item.category === "women's clothing" ? "woman-outline"
                    : item.category === "jewelery" ? "diamond-outline"
                    : "laptop-outline"
                    }
                    size={16}
                    color="#333"
                />
                <Text> {item.category}</Text>
            </View>
            

            <View >
                <Text>Por</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>

            <Button title="Adicionar Item" color="#1d1d1d" onPress={() => Alert.alert("Produto adicionado no carrinho!")} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Loja de Departamento</Text>
            </View>
            
            <FlatList style={styles.container}
            // Dados da lista
            data={data}
            // Renderiza cada item da lista usando a função render
            renderItem={renderItem}
            // Para identifica cada elemento (Chave única)
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 100,
        paddingTop: 20,
        backgroundColor: "#b6c4f0",
        marginBottom: 38
    },  
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 60,
        textAlign: 'center',
        backgroundColor: "#fff",
        paddingVertical: 14,
        borderRadius: 12

    },
    card: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        padding: 18,
        marginBottom: 36,
        backgroundColor: "#fff",
        gap: 12
    },
    imageContainer: {
        position: "relative", // importante para conter o rating
        alignItems: "center",
        marginBottom: 16
    },
    image: {
        width: 100,
        height: 100,    
        resizeMode: "contain",
    },    
    price: {
        fontWeight: "bold",
        fontSize: 18
    },
    itemTitle: {
        flexDirection: "row",     
        justifyContent: "space-between", 
        alignItems: "center",    
        marginVertical: 5
    },
    ratingContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.05)", // leve contraste
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 12,
        fontWeight: "500",
    },
    itemTitleText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    itemDesc: {
        color: "#555",
    },

})