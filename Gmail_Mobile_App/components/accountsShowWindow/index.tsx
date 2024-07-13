import { View, Platform,Text } from 'react-native';
import React from 'react';
import { Dimensions,Image,Button ,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function ShowAccounts(props) {

  const { width, height } = Dimensions.get('window');
  const viewWidth = width * 0.9; // 70% of screen width
  const viewHeight = height * 0.7; // 50% of screen height
  const viewTop = height * 0.08; // 10% from the top
  const viewLeft = (width - viewWidth) / 2; // Center horizontally

  return (
    <>
    <View style={{position: 'absolute',borderRadius:22,top: viewTop,left: viewLeft,width: viewWidth,height: viewHeight,zIndex: 999999999,backgroundColor: 'white',display: props.style,}}>
      <Icon name="close" size={20} color="#000" style={{marginLeft:22,marginTop:17}}/>

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
      </View>
    </View>

    </>
  );
}
