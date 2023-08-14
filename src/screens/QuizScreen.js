import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function QuizScreen({ navigation }) {
    var [currentQuestion, setCurrentQuestion] = useState(0);
    var [score, setScore] = useState(0);

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            correctAnswer: "Au"
        },
        {
            question: "Which famous scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
            correctAnswer: "Blue Whale"
        },
        {
            question: "Which gas do plants use for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Lungs", "Skin"],
            correctAnswer: "Skin"
        },
        {
            question: "Which famous playwright wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1912", "1907", "1923", "1931"],
            correctAnswer: "1912"
        },
        {
            question: "Which element is essential for creating fire?",
            options: ["Water", "Air", "Earth", "Fire"],
            correctAnswer: "Fire"
        }
    ];
  
    const restartQuiz = () => {
        navigation.navigate('Quiz');
        return () => {
            setCurrentQuestion(0);
            setScore(0);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setCurrentQuestion(0);
                setScore(0); 
            }
        }, [])
      );

    const handleAnswer = (answer) => {
        const isCorrect = answer === questions[currentQuestion].correctAnswer;

        if (isCorrect) {
            score += 1;
            setScore(score);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigation.navigate('Results', { score, restartQuiz });
            // navigation.navigate('Flag', { restartQuiz });
        }
    }
  
    

    return (
      <View style={styles.container}>
        <Text style={styles.index}>{currentQuestion + 1}</Text>
        <Text style={styles.question}>{questions[currentQuestion].question}</Text>
        {
          questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))
        }
        <Text style={styles.score}>Score: {score}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    index: {
        fontSize: 30,
        color: "#fff"
    },
    question: {
        marginBottom: 20,
        color: '#fff',
    },
    optionButton: {
        width: '70%',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#119fcf',
        borderRadius: 5,
    },
    optionText: {
        textAlign: 'center',
        color: "#fff"
    },
    score: {
        marginTop: 10,
        color: '#fff',
    }
});