import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import base64 from 'react-native-base64'

export default function FlagScreen({ route }) {

    const {restartQuiz } = route.params;

    return (
        <View style={styles.container}>
      <Text style={styles.flagText}>
        The flag is: {base64.decode("U0NURntBUEtfaXNfc29fc2ltcGxlX3RvX3JldmVyc2VfNjk0MjB9")}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={restartQuiz}
      >
        <Text style={styles.buttonText}>Restart Quiz!</Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flagText: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      width: '70%',
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#119fcf',
      borderRadius: 5,
    },
    buttonText: {
      textAlign: 'center',
      color: '#fff',
    },
  });