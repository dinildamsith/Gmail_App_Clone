import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SafeAreaView } from 'react-native-safe-area-context';
import MassageBox from '@/components/massageBox';
import { Dimensions } from 'react-native';
import SearchBar from '@/components/searchBar';


export default function MainPage() {

  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  

  
  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
          <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
       

            {/* Top Area */}
            <SearchBar/>
 


            {/* -----BottamArea----- */}
            <View style={{marginTop:20,marginLeft:17}}>
              <Text style={{color:'#767777',fontWeight:600}}>inbox</Text>
              <ScrollView>
              <MassageBox profilePic='https://plasticfantasticdeals.com/wp-content/uploads/2023/04/PikPng.com_aliexpress-logo-png_3508940-150x150.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://freepnglogo.com/images/all_img/1697562496facebook-logo-png.png' from='Facebook' date='1.00AM' subject='Your memory on Facebook' massage='Hi Dinil, You have a post from 2023 to look back on today.'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              </ScrollView>
            </View>


            {/* Footer */}
            <View style={{ position: 'absolute', bottom: 30, width: windowWidth, height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20,backgroundColor:'#fffefe' }}>
              <Image
                source={{ uri: "https://img.icons8.com/material-rounded/24/mail.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5 ,position:'absolute', left:120}}
              />
              <Image
                source={{ uri: "https://img.icons8.com/color/48/000000/google-meet--v1.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5,position:'absolute', right:120}}
              />
            </View>

          </View>
         
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

