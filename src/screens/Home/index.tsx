import React, { useState } from 'react';

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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante com esse nome'
      );
    }
    console.log('Adicionando participante');
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        { text: 'Não', style: 'cancel' },
      ]
    );
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
          onChangeText={setParticipantName}
          value={participantName}
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
