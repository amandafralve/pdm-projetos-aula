import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfileModal({ onClose }: { onClose: () => void }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [curso, setCurso] = useState('');

    async function saveProfile() {
        const profile = { nome, sobrenome, idade, instituicao, curso };
        await AsyncStorage.setItem('@profile', JSON.stringify(profile));
        onClose();
    }

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Editar Perfil</Text>

        <TextInput
            placeholder="Nome"
            placeholderTextColor="#000000ff"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
        />
        <TextInput
            placeholder="Sobrenome"
            placeholderTextColor="#000000ff"
            value={sobrenome}
            onChangeText={setSobrenome}
            style={styles.input}
        />
        <TextInput
            placeholder="Idade"
            placeholderTextColor="#000000ff"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
            style={styles.input}
        />
        <TextInput
            placeholder="Instituição"
            placeholderTextColor="#000000ff"
            value={instituicao}
            onChangeText={setInstituicao}
            style={styles.input}
        />
        <TextInput
            placeholder="Curso"
            placeholderTextColor="#000000ff"
            value={curso}
            onChangeText={setCurso}
            style={styles.input}
        />

        {/* Botão Salvar (verde) */}
        <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, styles.buttonSave]} onPress={saveProfile}>
            <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
        </View>

        {/* Botão Cancelar (vermelho) */}
        <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, styles.buttonCancel]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#a8dbebff', // azul sólido de fundo
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#000000ff', // borda clara pra destacar no fundo azul
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        color: '#0b1b2b',
    },
    buttonWrapper: {
        width: '90%',
        marginTop: 6,
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonSave: {
        backgroundColor: '#5ab65fff', 
    },
    buttonCancel: {
        backgroundColor: '#da5a5aff', 
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
