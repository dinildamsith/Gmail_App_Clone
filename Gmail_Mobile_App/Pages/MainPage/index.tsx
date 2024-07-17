import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MassageBox from '@/components/massageBox';
import { Dimensions } from 'react-native';
import SearchBar from '@/components/searchBar';
import ComposeButton from '@/components/composeBtn';



export default function MainPage({ navigation }) {

  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  
  

  
  return (

    <>

    <SafeAreaView style={{ flex: 1 }}>
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}

          <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
       

          <ComposeButton />
            {/* Top Area */}
            <SearchBar/>

 


            {/* -----BottamArea----- */}
            <View style={{marginTop:10,marginLeft:17}}>
              <Text style={{color:'#767777',fontWeight:600}}>inbox</Text>
              <ScrollView>
              <MassageBox profilePic='https://plasticfantasticdeals.com/wp-content/uploads/2023/04/PikPng.com_aliexpress-logo-png_3508940-150x150.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
              <MassageBox profilePic='https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=307' from='Facebook' date='1.00AM' subject='Your memory on Facebook' massage='Hi Dinil, You have a post from 2023 to look back on today.'/>
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

