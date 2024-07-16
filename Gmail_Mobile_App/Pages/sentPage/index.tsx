import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import SearchBar from '@/components/searchBar';
import ComposeButton from '@/components/composeBtn';



export default function SentPage({ navigation }) {

  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  
  

  
  return (

    <>

    <SafeAreaView style={{ flex: 1 }}>
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}

          <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
       

            <ComposeButton/>
            {/* Top Area */}
            <SearchBar/>

 


            {/* -----BottamArea----- */}
            <View style={{marginTop:10,marginLeft:17}}>
              
              <ScrollView>
              <Image
                  source={require('../../assets/images/sent.jpeg')}
                  style={{
                    position:'relative',
                    width:250,
                    height:200,
                    marginTop:122,
                    alignSelf:'center',
                   
                 }}/>
                 <Text style={{alignSelf:'center',fontSize:30,marginTop:22,textAlign:'center'}}>Nothing in Sent</Text>
              </ScrollView>
            </View>


            {/* Footer */}
            <View style={{ position: 'absolute', bottom: 0, width: windowWidth, height: 85, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20,backgroundColor:'#fffefe' }}>
            <TouchableOpacity style={null} onPress={() => navigation.navigate('Inboxes')}>
              <Image
                source={{ uri: "https://img.icons8.com/material-rounded/24/mail.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5 ,position:'absolute', left:-132,bottom:0}}
              />
           </TouchableOpacity>
           <TouchableOpacity style={null} onPress={() => navigation.navigate('MeetPage')}>
           <Image 
                source={{ uri: "https://img.icons8.com/color/48/000000/google-meet--v1.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5,position:'absolute', right:-132,bottom:0}}
              />
           </TouchableOpacity>

  
            </View>
          </View>

        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>

    </>
  );
}

