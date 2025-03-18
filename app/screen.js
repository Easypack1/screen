import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.easyText}>Easy</Text>
          <Text style={styles.packText}>Pack</Text>
        </Text>

        <TextInput style={styles.searchBox} placeholder="나의 항공사 규정 확인하러 가기" />

        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Image source={require('../assets/images/camera.png')} style={styles.icon1} />
            <Text style={styles.menuText}>물품촬영</Text>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/images/community.png')} style={styles.icon2} />
            <Text style={styles.menuText}>커뮤니티</Text>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/images/info.png')} style={styles.icon3} />
            <Text style={styles.menuText}>수하물 정보</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>여행지 사진</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>여행지 날씨</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  easyText: {
    color: 'skyblue',
    fontSize: 30,
    fontWeight: 'bold'
  },
  packText: {
    color: 'black',
    fontSize: 30,
   fontWeight: 'bold'
  },
  searchBox: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 30,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  menuItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon1: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  icon2: {
    width: 50,
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
  },
  icon3: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default HomeScreen;