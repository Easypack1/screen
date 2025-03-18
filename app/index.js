import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { textSpanContainsPosition } from 'typescript';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.easyText}>Easy</Text>
          <Text style={styles.packText}>Pack</Text>
        </Text>

        <TextInput style={styles.searchBox}  />

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
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>나의 항공사 규정 확인하러 가기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>여행지 사진</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText3}>여행지 날씨</Text>
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
    marginBottom: 15,
  },
  easyText: {
    color: 'skyblue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  packText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchBox: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
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
  button1: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    height: 50,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: '#c8d7eb',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    width: '80%',
    height: 280,
    marginBottom: 10,
  },
  button3: {
    backgroundColor: '#c8d7eb',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    width: '80%',
    height: 100,
    marginBottom: 10,
  },
  buttonText1: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  buttonText3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
};

export default HomeScreen;
