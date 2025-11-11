import { Text, View, FlatList} from 'react-native';

const LOCAL_DATA = [
  { 
    id: '1', title: 'Item 1', description: 'Description for Item 1',
    id: '2', title: 'Item 2', description: 'Description for Item 2',
    id: '3', title: 'Item 3', description: 'Description for Item 3',
    id: '4', title: 'Item 4', description: 'Description for Item 4',
    id: '5', title: 'Item 5', description: 'Description for Item 5',
    id: '6', title: 'Item 6', description: 'Description for Item 6',
    id: '7', title: 'Item 7', description: 'Description for Item 7',
    id: '8', title: 'Item 8', description: 'Description for Item 8',
    id: '9', title: 'Item 9', description: 'Description for Item 9' 
  }
]

export default function App() {

  const render = ({item}) => (
    <View>
      {/* Imprime o título e a descrição de cada item */}
      <Text>{item.title}: {item.description}</Text>
    </View>
  );

  return (
    <FlatList
      // Dados da lista
      data={LOCAL_DATA}
      // Renderiza cada item da lista usando a função render
      renderItem={render}
      // Para identifica cada elemento (Chave única)
      keyExtractor={(item) => item.id}
    />
  );
}

