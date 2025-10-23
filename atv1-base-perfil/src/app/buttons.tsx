import { router } from "expo-router";
import { Button, TouchableOpacity, View, Text, Pressable } from "react-native";

export default function Buttons () {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center", padding: 32, gap: 16}}>
            <Button title="Button" onPress={() => router.back()} />

            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: "#1d1d1d", padding:16, alignItems: "center"}}>
                <Text style={{color: "#dfdfdf"}}>TouchableOpacity</Text>
            </TouchableOpacity>

            <Pressable style={{backgroundColor: "#2ED0FF", padding:16, alignItems: "center", borderRadius: 8}}
            onPress={() => console.log("Clicou no botão")}
            onLongPress={() => console.warn("Segurou no botão")}
            onPressOut={()=> console.error("Largou do botão")} 
            delayLongPress={5000}>
                <Text style={{color: "#1d1d1d"}}>Pressable</Text>
            </Pressable>

            <TouchableOpacity style={{ alignItems: "center"}}  onPress={() => router.back()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}