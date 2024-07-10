import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '@/Pages/MainPage';
import Tt from '@/Pages/tt/tt';



export default function App() {

const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator initialRouteName="MainPage" screenOptions={{ headerShown: false,}}>
            <Drawer.Screen name="MainPage" component={MainPage} />
            <Drawer.Screen name="Tt" component={Tt} />
       </Drawer.Navigator>
  );
}



























// import React from 'react';
// import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MassageBox from '@/components/massageBox';
// import { Dimensions } from 'react-native';


// export default function MainPage() {

//   const [text, onChangeText] = React.useState("");
//   const windowHeight = Dimensions.get('window').height;
//   const windowWidth = Dimensions.get('window').width;

  
//   return (

//     <SafeAreaView style={{ flex: 1 }}>
      
//       <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
//         {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
//           <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
       

//             {/* Top Area */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#e8edf7", borderRadius: 50, marginHorizontal: 20, marginTop: 30, marginBottom: 10, paddingVertical: 8, paddingHorizontal: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.35, shadowRadius: 15, elevation: 5 }}>
        
//               <Icon name="bars" size={20} color="#000" style={{ marginRight: 10 }} />
  
//               <TextInput
//                 style={{ flex: 1, marginLeft: 5, fontSize: 16, color: "#000" }}
//                 onChangeText={onChangeText}
//                 value={text}
//                 placeholder="Search in mail"
//                 placeholderTextColor="#8e8e93"
//               />
//               <Image
//                 source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}
//                 style={{ width: 35, height: 35, borderRadius: 17.5 }}
//               />
//             </View>


//             {/* -----BottamArea----- */}
//             <View style={{marginTop:20,marginLeft:17}}>
//               <Text style={{color:'#767777',fontWeight:600}}>inbox</Text>
//               <ScrollView>
//               <MassageBox profilePic='https://plasticfantasticdeals.com/wp-content/uploads/2023/04/PikPng.com_aliexpress-logo-png_3508940-150x150.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://freepnglogo.com/images/all_img/1697562496facebook-logo-png.png' from='Facebook' date='1.00AM' subject='Your memory on Facebook' massage='Hi Dinil, You have a post from 2023 to look back on today.'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='AliExpress' date='8.59PM' subject='Your free shipping deal' massage='Up to 50 off %'/>
//               </ScrollView>
//             </View>


//             {/* Footer */}
//             <View style={{ position: 'absolute', bottom: 9, width: windowWidth, height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20,backgroundColor:'#fffefe' }}>
//               <Image
//                 source={{ uri: "https://img.icons8.com/material-rounded/24/mail.png" }}
//                 style={{ width: 35, height: 35, borderRadius: 17.5 ,position:'absolute', left:120}}
//               />
//               <Image
//                 source={{ uri: "https://img.icons8.com/color/48/000000/google-meet--v1.png" }}
//                 style={{ width: 35, height: 35, borderRadius: 17.5,position:'absolute', right:120}}
//               />
//             </View>

//           </View>
         
//         {/* </ScrollView> */}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }