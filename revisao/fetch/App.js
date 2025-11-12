import { useState, useEffect } from 'react';
import { Text, View, FlatList, Button, Image } from 'react-native';

const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=1000"

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

  const render = ({item}) => (
    <View>
    <Image
      source={{uri: item.thumbnailUrl}}
      style={{ width: 100, height: 100 }}
    />
      {/* Imprime o título e a descrição de cada item */}
      <Text>{item.title}</Text>
      <Text>{item.url}</Text>
      <Button title="Adicionar Item" color="#1d1d1d" onPress={() => {}} />
    </View>
  );

  return (
    <FlatList
      // Dados da lista
      data={data}
      // Renderiza cada item da lista usando a função render
      renderItem={render}
      // Para identifica cada elemento (Chave única)
      keyExtractor={(item) => item.id.toString()}
    />
  );
}