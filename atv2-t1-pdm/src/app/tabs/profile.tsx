import AsyncStorage from '@react-native-async-storage/async-storage';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/Card';
import EditProfileModal from '../../components/ProfileModal';

export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Index: undefined;
};

type Nav = BottomTabNavigationProp<RootTabParamList, 'Profile'>;

export default function Profile() {
    const [profile, setProfile] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<Nav>();

    async function loadProfile() {
        try {
        const data = await AsyncStorage.getItem('@profile');
        if (data) setProfile(JSON.parse(data));
        } catch (e) {
        console.error('Erro ao carregar perfil:', e);
        }
    }

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <LinearGradient
        colors={['#0f2027', '#a8dbebff', '#4487a3ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
        >
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Perfil Salvo</Text>

            {profile ? (
            <View style={styles.cardContainer}>
                <Card
                title={`${profile.nome} ${profile.sobrenome}`}
                body={
                    `Idade: ${profile.idade}\n` +
                    `Instituição: ${profile.instituicao}\n` +
                    `Curso: ${profile.curso}`
                }
                href="#"
                />
            </View>
            ) : (
            <Text style={styles.text}>Nenhum perfil salvo ainda</Text>
            )}

            <View style={styles.buttonWrapper}>
            <Pressable style={styles.primaryButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.primaryButtonText}>EDITAR PERFIL</Text>
            </Pressable>
            </View>

            <Modal visible={modalVisible} animationType="slide">
            <EditProfileModal
                onClose={() => {
                setModalVisible(false);
                loadProfile();
                }}
            />
            </Modal>
        </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
    },
    cardContainer: {
        width: '90%',
        gap: 12,
        backgroundColor: '#a6db96aa',
        borderRadius: 8,
    },
    buttonWrapper: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    primaryButton: {
        backgroundColor: '#4487a3ff',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
