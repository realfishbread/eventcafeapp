// 회원가입 폼
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignUpForm = ({ onClose, onLogin }) => {
  return (
    <View>
      <Text style={styles.title}>회원가입</Text>
      <TextInput placeholder="이메일" style={styles.input} />
      <TextInput placeholder="인증번호" style={styles.input} />
      <TextInput placeholder="비밀번호" style={styles.input} secureTextEntry />
      <TextInput
        placeholder="비밀번호 확인"
        style={styles.input}
        secureTextEntry
      />
      <TextInput placeholder="유저명" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogin}>
        <Text style={styles.link}>로그인으로 돌아가기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>✖</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF6F91",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
  link: { color: "#00A0E9", marginTop: 10, textAlign: "center" },
  closeButton: { position: "absolute", top: -10, right: -10 },
});

export default SignUpForm;
