import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultsScreen({ route }) {

    const { score, restartQuiz } = route.params;

    if(score == 69420) {
        return navigator.navigate('Flag', { restartQuiz });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>Quiz Completed!</Text>
            <Text style={styles.scoreText}>Your Score: {score}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={restartQuiz}
            >
                <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111111",
        alignItems: 'center',
        justifyContent: 'center',
      },
      resultText: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 20,
      },
      scoreText: {
        color: "#fff",
        fontSize: 18,
        paddingBottom: 10,
      },
      button: {
        width: '70%',
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#119fcf",
        borderRadius: 5,
      },
      buttonText: {
        textAlign: 'center',
        color: "#fff",
      },
});