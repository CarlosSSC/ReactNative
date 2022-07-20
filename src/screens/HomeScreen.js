import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={{ flex: 3, backgroundColor: 'rgb(248, 113, 113)', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.whiteText}>Metal Heroes</Text>
        <Image style={styles.photo} source={require('../../assets/manwithguitar.png')}/>
        <Text style={styles.whiteSmallText}>The best way to learn how to play an instrument!</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Button
          color={'rgb(34, 211, 238)'}
          title='Create an Account' onPress={() => navigation.navigate('CreateAccount')}/>
        </View>

        <View style={styles.space}/> 

        <View >
          <Button 
          color={'gray'}
          title  ='or Login' onPress={() => console.log('2nd button tapped')}
          />
        </View>


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  whiteText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 45,
  },
  whiteSmallText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35
  },
  photo: {
    width: 300,
    height: 260,
  },
  button:{
    borderRadius: 16,
    borderColor: 'rgb(34, 211, 238)',
    padding: 5,
    backgroundColor : 'rgb(34, 211, 238)'
  },
  space: {
    width: 20,
    height: 20,
  },

});

export default HomeScreen