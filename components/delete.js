import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, 
  SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import firebaseApp from './firebaseConfig'
//import Update from './update'


const db = firebaseApp.firestore();
export default function DeleteX({navigation}){

  function deleteItem(id){
    db.collection("Crud").doc(id).delete()
  }

  const [page, setPage] = useState([])
  
  useEffect(()=>{
    db.collection("Crud").onSnapshot((query)=>{
      const list=[]
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id})
      })
      setPage(list)
    })
  },[])

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Delete</Text>
      <FlatList
        data={page}
          renderItem={({item})=>{
            return(
              <View style={styles.pageDelete}>
                <TouchableOpacity
                  style={styles.deleteItemX}
                  onPress={()=>{deleteItem(item.id)}}
                >
                <FontAwesome 
                  name='trash'
                  size={25}
                  color='#f00'
                />
                </TouchableOpacity>
                <Text
                  style={styles.textDelete}
                  onPress={()=>{
                    navigation.navigate("Update",{
                      id: item.id,
                      description: item.description
                    })
                  }}
                >
                  {item.description}
                </Text>
              </View>
            )
          }}
      />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  pageDelete:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  deleteItemX:{
    justifyContent:'center',
    paddingLeft:15,
  },
  textDelete:{
    width:200,
    height:25,
    alignContent:'flex-start',
    backgroundColor:'#eee',
    padding:2,
    paddingHorizontal:20,
    borderRadius:5,
    color:'#444',
    marginLeft:5,
    fontSize:16,
  },
  titleText:{
    color:'#f20a4f',
    fontSize:25, 
    fontWeight:'bold',
    fontFamily:'calibri'
  }

})