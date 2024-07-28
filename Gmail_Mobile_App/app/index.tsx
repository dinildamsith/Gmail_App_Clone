import * as React from 'react';
import { StyleSheet , Image,Text,View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '@/Pages/MainPage';
import ImportantPage from '@/Pages/ImportantPage'
import MeetPage from '@/Pages/meetPage';
import StarredPage from '@/Pages/starredPage';
import SnoozedPage from '@/Pages/snoozedPage';
import SentPage from '@/Pages/sentPage';
import MailReadView from '@/components/mailReadView';



export default function App() {

const Drawer = createDrawerNavigator();
  return (

    

      <Drawer.Navigator initialRouteName="MainPage"  screenOptions={{ headerShown: false}}>
          <Drawer.Screen name="Gmail" component={MainPage} options={{title: 'Gmail',headerTitleStyle: styles.headerTitleStyle,drawerLabelStyle: styles.drawerLabelStyle,drawerItemStyle: styles.disabledItem }} />
          <Drawer.Screen name="Inboxes" component={MainPage} options={{title: 'All Inboxes',drawerIcon: () => (<Icon name="inbox" size={20} color="#000" />)}}/>
          <Drawer.Screen name="Inbox" component={MainPage} options={{title: 'Inbox',drawerIcon: () => (<Icon name="inbox" size={20} color="#000" />)}}/>
          <Drawer.Screen name="Important"component={ImportantPage} options={{title: 'Important', drawerIcon: () => (<Image
          source={{ uri: "https://img.icons8.com/windows/32/bookmark-ribbon--v1.png" }}
          style={{ width: 24, height: 24,marginLeft:-3, transform: [{ rotate: '270deg' }] }}/>  ),}}/>
          <Drawer.Screen name="All lables" component={MeetPage} options={{drawerItemStyle: styles.disabledItem}}/>
          <Drawer.Screen name="Starred" component={StarredPage} options={{title: 'Starred',drawerIcon: () => (<Image
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/star--v1.png" }}
          style={{ width: 24, height: 24,marginLeft:-3 }}/>  ),}}/>
          <Drawer.Screen name="Snoozed" component={SnoozedPage} options={{title: 'Snoozed',drawerIcon: () => (<Image
          source={{ uri: "https://img.icons8.com/material-outlined/24/clock--v1.png" }}
          style={{ width: 24, height: 24,marginLeft:-3 }}/>  ),}}/>
          <Drawer.Screen name="Important2"component={ImportantPage} options={{title: 'Important', drawerIcon: () => (<Image
          source={{ uri: "https://img.icons8.com/windows/32/bookmark-ribbon--v1.png" }}
          style={{ width: 24, height: 24,marginLeft:-3, transform: [{ rotate: '270deg' }] }}/>  ),}}/>
          <Drawer.Screen name="Sent" component={SentPage} options={{title: 'Sent',drawerIcon: () => (<Image
          source={{ uri: "https://img.icons8.com/material-outlined/24/000000/sent.png" }}
          style={{ width: 24, height: 24,marginLeft:-3 }}/>  ),}}/>
        


          <Drawer.Screen name="MeetPage" component={MeetPage} options={{ drawerLabel: () => null }}/>
          <Drawer.Screen name="MailReadView" component={MailReadView} options={{ drawerLabel: () => null }}/>
       </Drawer.Navigator>


  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'blue',
  },
  drawerLabelStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
  disabledItem: {
    pointerEvents: 'none', // Disables touch events
  },
})


























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