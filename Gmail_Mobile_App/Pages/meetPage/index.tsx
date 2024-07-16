import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MassageBox from '@/components/massageBox';
import SearchBar from '@/components/searchBar';
import AnotherAcc from '@/components/anotherAcc';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainPage({ navigation }) {

  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  // const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  const { width, height } = Dimensions.get('window');
  const viewWidth = width * 0.93; // 70% of screen width
  const viewHeight = height * 0.83; // 50% of screen height
  const viewTop = height * 0.08; // 10% from the top
  const viewLeft = (width - viewWidth) / 2; // Center horizontally
  const [modalVisible, setModalVisible] = React.useState('none');
  const [transparent, setTransparent] = React.useState('none');

  const handlePress = () => {
    setModalVisible('flex');
    setTransparent('flex');
  };

  const handlePress2 = () => {
    setModalVisible('none');
    setTransparent('none');
  };
  

  
  return (

    <>

    <SafeAreaView style={{ flex: 1 }}>
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}

          <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
       

            {/* Top Area */}
            {/* ------------------------- */}


            <View style={{position: 'absolute',borderRadius:22,top: viewTop,left: viewLeft,width: viewWidth,height: viewHeight,zIndex:999999,backgroundColor: 'white',display:modalVisible}}>
    <TouchableOpacity onPress={handlePress2}>
      <Icon name="close" size={20} color="#000" style={{marginLeft:22,marginTop:17}}/>
    </TouchableOpacity>
      <View style={{ justifyContent: 'center',alignItems: 'center', }}>
      <Image
        source={require('../../assets/images/google.png')}
        style={{
          width: 115,
          height: 35,
          position: 'absolute',
          alignSelf: 'center',
          top: '8%',
          marginTop: -32.5, // half of the image height to perfectly center it vertically
        }}
      />
        <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}style={{ width: 48, height: 48, borderRadius: 17.5,marginTop:32,alignSelf:'flex-start',left:20 }}/>
        <View style={{backgroundColor: 'white',
        position:'absolute',
                      borderRadius: 110, // Half of the height/width to make it a circle
                      height: 30,
                      width: 30,
                      justifyContent: 'center', // Center children vertically
                      alignItems: 'center', // Center children horizontally
                      left:45,
                      top:52,
                      
         }}>
             <Icon name="camera" size={15} color="#000" />
       </View>
       <View style={{position:'absolute',left:85,top:38,width:viewWidth,height:viewHeight}}>
         <Text>Dinil Damsith</Text>
         <Text>dinildamsith52@gmail.com</Text>
         <Text style={{position:'absolute',right:110,top:22}}>40</Text>
         <Pressable style={{backgroundColor:'white',width:220,height:40,borderRadius:10,marginTop:20,borderWidth:1,borderColor:'black'}}>
           <Text style={{marginTop:8,alignSelf:'center'}}>Manage Your Google Account</Text>
        </Pressable>
        <Image source={{ uri: "https://img.icons8.com/color/48/google-cloud.png" }}style={{position:'absolute', width: 25, height: 25,top:123,left:-55 }}/>
        <Text style={{position:'absolute',top:123}}>Storage used: 63% of 15GB</Text>

       </View>
       <View style={{position:'absolute',left:0,top:140}}>
        <ScrollView style={{position:'relative',marginTop:52,height:269,width:viewWidth}}>
        <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
          <AnotherAcc/>
        </ScrollView>



        <Image source={{ uri: "https://img.icons8.com/sf-regular/48/add-user-male.png" }}style={{ width: 28, height: 28, borderRadius: 17.5,marginTop:28,alignSelf:'flex-start',left:30 }}/>
         <Text style={{marginLeft:86,marginTop:-25}}>Add another Account</Text>

         <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/user-settings.png" }}style={{ width: 25, height: 25, borderRadius: 17.5,marginTop:18,alignSelf:'flex-start',left:34 }}/>
         <Text style={{marginLeft:86,marginTop:-23}}>Manage accounts on this device</Text>
   

         <Text style={{alignSelf:'center',marginTop:17}}>Pirvacy Policy      .      Terms of Service</Text>


       </View>
      </View>
    </View>
     
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 0, marginHorizontal: 20, marginTop: 0, marginBottom: 10, paddingVertical: 8, paddingHorizontal: 12 }}>
      
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ flex: 1 }}>
        <Icon name="bars" size={20} color="#000" style={{ marginRight: 10 }} />
      </TouchableOpacity>

      <Text style={{ position: 'absolute', left: '45%', fontSize: 25, color: "#000", fontWeight: 'bold' }}>
        Meet
      </Text>

      <TouchableOpacity onPress={handlePress} style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }} style={{ width: 35, height: 35, borderRadius: 17.5 }} />
      </TouchableOpacity>
      
    </View>
        
        <View style={{backgroundColor: 'black',
width: '100%',
      height: '100%',
      position:'absolute',
      zIndex:99,
      opacity: 0.61,
      top:-30,
      display:transparent
      
     }}>
      
    </View>


 


            {/* -----BottamArea----- */}
       <View style={{position: 'absolute' ,marginTop: 10, marginLeft: 30, flexDirection: 'row', width: '100%', justifyContent: 'center', top:72 ,right:'0%' }}>
      
      <View style={{flexDirection:'row'}}>
      <Pressable style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 25, elevation: 3, backgroundColor: '#0b57cf', width: 200 , marginRight: 2 }}>
                 <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: 'white' }}>New meeting</Text>
             </Pressable>
      
             <Pressable style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 25, backgroundColor: 'white', width: 200, marginLeft: 2, borderColor: 'black', borderWidth: 1.5 }}>
                <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: '#0b57cf' }}>Join with a code</Text>
             </Pressable>
      
      </View>

        
                  
           <Image source={require('../../assets/images/meet1.png')}
            style={{
             position: 'absolute',
             alignSelf: 'center',
             top: '350%',}}/>

            <Text style={{position:'absolute',alignSelf:'center',top:'710%',fontSize:26,fontWeight:'400'}}>Get a link you can share</Text>
            <Text style={{position:'absolute',left:'12%',right:'12%',top:'820%',fontSize:16,fontWeight:'420',  textAlign: 'center',color: '#555554' }}>Tap <Text style={{fontWeight:'bold'}}>New meeting</Text> to get a link you.can send to people you want to meet with</Text>

        

            {/* <Image source={require('../../assets/images/meet2.png')}
            style={{
             position: 'absolute',
             alignSelf: 'center',
             top: '350%',}}/>

            <Text style={{position:'absolute',alignSelf:'center',top:'710%',fontSize:26,fontWeight:'400'}}>Your meeting is safe</Text>
            <Text style={{position:'absolute',left:'12%',right:'12%',top:'820%',fontSize:16,fontWeight:'420',  textAlign: 'center',color: '#555554' }}>No one can join a meeting unless invited or admitted by the host</Text>
 */}

      
          
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

