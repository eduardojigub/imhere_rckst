import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'Antonio Augusto',
    'Guto',
    'Augustinho',
    'Gutaozao',
    'Ana',
    'Maria',
    'Joana',
    'Joao',
    'Jose',
    'Eduardo',
    'Roberta',
    'Roberto',
    'Roberval',
  ];

  function handleAddParticipant() {
    if (participants.includes('Antonio Augusto')) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante com esse nome'
      );
    }
    console.log('Adicionando participante');
    // Add your logic to actually add the participant here
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        { text: 'Sim', onPress: () => Alert.alert('Deletado') },
        { text: 'Não', style: 'cancel' },
      ]
    );
    console.log('Remove participante ', name);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante cadastrado</Text>
        )}
      />
    </View>
  );
}
