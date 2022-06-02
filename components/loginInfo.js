import { NavigationContainer } from '@react-navigation/native';
import firebaseApp from './firebaseConfig';
import { StyleSheet, Image, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'
import React, {useEffect, useState} from 'react';

const db = firebaseApp.firestore();
const URL = 'https://firebasestorage.googleapis.com/v0/b/somativanetfli.appspot.com/o/image%2F';
const Media = '?alt=media';

export default function loginInfo(){
    
  console.log('----------------------- user',global.config.userId)

    const [nome, setNome] = useState(global.config.userId);
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');

    

  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Informações do Usuario
      </Text>
      <Text>{nome}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  titleText:{
    color:'#f20a4f',
    fontSize:25, 
    fontWeight:'bold',
    fontFamily:'calibri'
  }

})