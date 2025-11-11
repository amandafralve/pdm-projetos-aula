// app/(tabs)/home.tsx  (ajuste o caminho conforme seu projeto)
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';

export default function Home() {
    return (
        <LinearGradient
        colors={['#0f2027', '#a8dbebff', '#4487a3ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
        >
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo(a)!</Text>
            <Text style={styles.subtitle}>Use as abas no rodapé para navegar</Text>

            {/* Botão  */}
            <View style={styles.buttonWrapper}>
                <Link href="/Profile" asChild>
                    <Pressable style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>IR PARA PERFIL</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#000000ff', textAlign: 'center' },
    subtitle: { fontSize: 16, color: 'rgba(0, 0, 0, 1)', textAlign: 'center' },

    buttonWrapper: { width: '85%', marginTop: 20 },
    primaryButton: {
        width: '100%',
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#2a95b6ff',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    primaryButtonText: { color: '#ffffffff', fontSize: 16, fontWeight: '600' },
});
