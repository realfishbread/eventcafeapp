// 로그인 폼
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // 카카오톡 아이콘
import FontAwesome from "react-native-vector-icons/FontAwesome"; // 구글 아이콘

const LoginForm = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert("로그인 요청");
  };

  const handleKakaoLogin = () => {
    Alert.alert("카카오로 로그인 요청");
  };

  const handleGoogleLogin = () => {
    Alert.alert("구글로 로그인 요청");
  };

  return (
    <View style={styles.container}>
      {/* 로고 섹션 */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")} // 로고 이미지 경로
          style={styles.logo}
        />
      </View>

      {/* 제목 */}
      <Text style={styles.title}>로그인</Text>

      {/* 입력 폼 */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="이메일"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          계정이 없으신가요?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            회원가입
          </Text>
        </Text>
      </View>

      {/* SNS 로그인 */}
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>SNS로 로그인하기</Text>
      </View>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
          <Icon name="chat" size={24} style={styles.icon} color="#3C1E1E" />
          <Text style={styles.kakaoButtonText}>카카오로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <FontAwesome name="google" size={24} style={styles.icon} color="#757575" />
          <Text style={styles.googleButtonText}>구글로 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    backgroundColor: "#cfeffd", // 배경색 적용
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    maxWidth: 320,
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupText: {
    textAlign: "center",
    color: "#555",
    marginBottom: 16,
  },
  signupLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  dividerContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  dividerText: {
    fontSize: 14,
    color: "#888",
  },
  socialButtons: {
    width: "100%",
    maxWidth: 320,
  },
  kakaoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE500",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: "center",
  },
  kakaoButtonText: {
    color: "#3C1E1E",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#757575",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default LoginForm;