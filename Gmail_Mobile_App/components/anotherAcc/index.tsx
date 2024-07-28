import { Dimensions,Image,Text,View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AnotherAcc(){
    const { width, height } = Dimensions.get('window');
    const viewWidth = width * 0.9; // 70% of screen width
    const viewHeight = height * 0.7; // 50% of screen height
    return(
        <>
        <View style={{marginBottom:-10,zIndex:99999999999999}}>
        <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}style={{ width: 43, height: 43, borderRadius: 17.5,marginTop:32,alignSelf:'flex-start',left:20 }}/>
       <View style={{position:'absolute',left:85,top:35,width:viewWidth,height:viewHeight}}>
         <Text>Dinil Damsith</Text>
         <Text>dinildamsith52@gmail.com</Text>
         <Text style={{position:'absolute',right:110,top:22}}>40</Text>
       </View>
        </View>

        </>
    )
}