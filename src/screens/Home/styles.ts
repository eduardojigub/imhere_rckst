import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#ffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16,
      marginTop: 8,
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#ffff',
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },
    buttonText: {
      color: '#ffff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      height: 56,
      width: 56,
      borderRadius: 5,
      backgroundColor: '#a370f7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '100%', 
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    }
  });
  