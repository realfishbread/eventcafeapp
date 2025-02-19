// 로고, 로그인 헤더
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import logo from '../../../assets/logo.png';

const Header = ({ onLoginPress }) => (
  <View style={styles.container}>
    {/* 로고 이미지를 표시 */}
    <Image source={logo} style={styles.logo} />
    {/* 로그인 버튼 */}
    <TouchableOpacity onPress={onLoginPress}>
      <Text style={styles.loginText}>로그인</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 5,
  },
  logo: { 
    width: 110,
    height: 40,
    resizeMode: 'contain',
  },
  loginText: { 
    fontSize: 17,
    color: '#007bff',
    padding: 10,
  },
});

export default Header;