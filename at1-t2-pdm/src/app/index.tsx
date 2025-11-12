import React from "react";
import { StyleSheet, Text, Button, View, Image, FlatList} from "react-native";
import { LOCAL_DATA } from "../data/pizza";

export default function App() {
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.nome}</Text>
        </View>
    )

    return (
        <View>
            <FlatList
                data={LOCAL_DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            /> 
        </View>
    )
}