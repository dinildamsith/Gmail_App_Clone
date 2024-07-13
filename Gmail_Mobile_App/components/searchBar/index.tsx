import { View,TouchableOpacity, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform,Text } from 'react-native';
import { Dimensions,Button ,Pressable,ScrollView} from 'react-native';


import AnotherAcc from '../anotherAcc';





export default function SearchBar(){

    const navigation = useNavigation();
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

    return(
        <>
       
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
     
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#e8edf7", borderRadius: 50, marginHorizontal: 20, marginTop: 0, marginBottom: 10, paddingVertical: 8, paddingHorizontal: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.35, shadowRadius: 15, elevation: 5 }}>
        
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={20} color="#000" style={{ marginRight: 10 }} />
        </TouchableOpacity>

          <TextInput
            style={{ flex: 1, marginLeft: 5, fontSize: 16, color: "#000" }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search in mail"
            placeholderTextColor="#8e8e93"
          />

          <TouchableOpacity onPress={handlePress}>
             <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}style={{ width: 35, height: 35, borderRadius: 17.5 }}/>
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
        </>
    );
}