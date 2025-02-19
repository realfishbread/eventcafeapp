import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IconButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.container}>
    <FontAwesome name={icon} size={24} color="#fcb2ae" />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', margin: 10 },
  text: { marginTop: 5, fontSize: 14 },
});

export default IconButton;
