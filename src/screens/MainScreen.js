import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/common/Header';
import SearchBar from '../components/common/SearchBar';
import IconButton from '../components/common/IconButton';
import Card from '../components/common/Card';

const MainScreen = ({ onLoginPress }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header에 onLoginPress 전달 */}
      <Header onLoginPress={onLoginPress} />
      <SearchBar />
      <View style={styles.bannerContainer}></View>
      <View style={styles.iconRow}>
        <IconButton icon="map-marker" text="장소 등록" />
        <IconButton icon="coffee" text="장소 대관" />
        <IconButton icon="birthday-cake" text="이벤트 등록" />
      </View>
      <View style={styles.iconRow}>
        <IconButton icon="fire" text="인기 카페 이벤트" />
        <IconButton icon="heart" text="광고 등록" />
      </View>
      <Card title="인기 생일카페" />
      <Card title="대관 가능한 장소" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#e0f7fa'
  },
  bannerContainer: {
    width: '100%',
    height: 315,
    backgroundColor: '#ffffff',
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
});

export default MainScreen;