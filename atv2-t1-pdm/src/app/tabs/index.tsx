import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import { Card } from "../../components/Card";


export default function Index() {
    const [showGithub, setShowGithub] = useState(false);
    const [showLinkedin, setShowLinkedin] = useState(false);
    const [showBehance, setShowBehance] = useState(false);
    const [showOrganization, setShowOrganization] = useState(false);

    return (
        <>
        <LinearGradient
            colors={["#0f2027", "#a8dbebff", "#4487a3ff"]} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16, marginTop: 50 }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: "https://avatars.githubusercontent.com/u/160404693?v=4" }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                    </View>
                    
                    <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>Hello! {"\n"}  I'm Amanda Vithória.</Text>

                    <Card title="Programação e Design" body="Veja meus links!" href={"/buttons"}></Card>

                    <Button title=" Github" color={"#1d1d1d"} onPress={ () => setShowGithub(true) } />
                    <Button title="Linkedin" color={"#1a6177ff"} onPress={ () => setShowLinkedin(true) } />
                    <Button title=" Behance" color={"#004FFF"} onPress={ () => setShowBehance(true) } />        
                    

                    <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Projetos e Grupos</Text>
                    <TouchableOpacity
                        style={{
                        backgroundColor: "#ffffffff",
                        padding: 12,
                        borderRadius: 50,
                        borderColor: "#000000",
                        borderWidth: 1,
                        }}
                        onPress={() => setShowOrganization(true)}
                    >
                        <Text style={{ color: "black", textAlign: "center" }}>
                        Vitalliz Organization
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                        backgroundColor: "#ffffffff",
                        padding: 12,
                        borderRadius: 50,
                        borderColor: "#000000",
                        borderWidth: 1,
                        }}
                        onPress={() => setShowOrganization(true)}
                    >
                        <Text style={{ color: "black", textAlign: "center" }}>
                        Galeria de Filmes - MUBI
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>

        </LinearGradient>

            {/* Modal botão github */}
            <Modal visible={showGithub} animationType="slide" transparent={false}>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {/* Header do modal */}
                <View
                    style={{
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    gap: 12,
                    }}
                >
                    <Pressable onPress={() => setShowGithub(false)} style={{ padding: 8 }}>
                    <Text style={{ fontWeight: "700" }}>← Fechar</Text>
                    </Pressable>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>GitHub</Text>
                </View>

                {/* WebView ocupa todo o restante */}
                <WebView
                    source={{ uri: "https://github.com/amandafralve" }}
                    style={{ flex: 1 }}
                    startInLoadingState
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    allowsBackForwardNavigationGestures
                />
                </View>
            </Modal>
            
            {/* Modal botão linkedin */}
            <Modal visible={showLinkedin} animationType="slide" transparent={false}>
                <View style={{ flex: 1, backgroundColor: "#2a95b6ff" }}>
                {/* Header do modal */}
                <View
                    style={{
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    gap: 12,
                    }}
                >
                    <Pressable onPress={() => setShowLinkedin(false)} style={{ padding: 8 }}>
                    <Text style={{ fontWeight: "700" }}>← Fechar</Text>
                    </Pressable>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>Linkedin</Text>
                </View>

                {/* WebView ocupa todo o restante */}
                <WebView
                    source={{ uri: "https://www.linkedin.com/in/amanda-fralve/" }}
                    style={{ flex: 1 }}
                    startInLoadingState
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    allowsBackForwardNavigationGestures
                />
                </View>
            </Modal>

            {/* Modal botão Behance */}
            <Modal visible={showBehance} animationType="slide" transparent={false}>
                <View style={{ flex: 1, backgroundColor: "#004FFF" }}>
                {/* Header do modal */}
                <View
                    style={{
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    gap: 12,
                    }}
                >
                    <Pressable onPress={() => setShowBehance(false)} style={{ padding: 8 }}>
                    <Text style={{ fontWeight: "700" }}>← Fechar</Text>
                    </Pressable>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>Behance</Text>
                </View>

                {/* WebView ocupa todo o restante */}
                <WebView
                    source={{ uri: "https://www.behance.net/amandafralve/" }}
                    style={{ flex: 1 }}
                    startInLoadingState
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    allowsBackForwardNavigationGestures
                />
                </View>
            </Modal>

            {/* Modal botão Projetos */}
            <Modal visible={showOrganization} animationType="slide" transparent={false}>
                <View style={{ flex: 1, backgroundColor: "#2a95b6ff" }}>
                {/* Header do modal */}
                <View
                    style={{
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    gap: 12,
                    }}
                >
                    <Pressable onPress={() => setShowOrganization(false)} style={{ padding: 8 }}>
                    <Text style={{ fontWeight: "700" }}>← Fechar</Text>
                    </Pressable>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>Organização Vitalliz - GitHub</Text>
                </View>

                {/* WebView ocupa todo o restante */}
                <WebView
                    source={{ uri: "https://github.com/Vitalliz" }}
                    style={{ flex: 1 }}
                    startInLoadingState
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    allowsBackForwardNavigationGestures
                />
                </View>
            </Modal>
        </>
    )
}