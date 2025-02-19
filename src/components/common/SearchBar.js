import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder="어떤 이벤트 카페를 찾으시나요?" />
    <Ionicons name="search" size={24} color="gray" />
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  input: { flex: 1, borderBottomWidth: 1, borderColor: 'gray', padding: 5 },
});

export default SearchBar;
