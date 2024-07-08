import { View, Text,Dimensions,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MassageBox(){

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return(

        <View style={{marginTop:15}}>
            <View style={{width:windowWidth-28,height:70}}>
            <Image
                source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}
                style={{ width: 50, height: 50, borderRadius: 17.5,marginTop:10}}
              />
    
                  <Text style={{position:'absolute',left:62,top:12,fontWeight:'bold',fontSize:15,lineHeight: 20}}>AliExpress</Text>
                  <Text style={{position:'absolute',right:10,top:12,fontWeight:'bold',fontSize:13}}>8.59 PM</Text> 
                  <Text style={{position:'absolute',left:62,top:30,fontWeight:'500',fontSize:12}}>Your free shipping deal</Text>
                  <Text style={{position:'absolute',left:62,top:47,fontWeight:'300',color:'#686869',fontSize:12}}>Up to 50 off %</Text>
        
                  <Image
                source={{ uri: "https://img.icons8.com/forma-bold/24/star.png" }}
                style={{ width: 20, height: 20, borderRadius: 17.5,marginTop:10,tintColor:'#7e7f7f',position:'absolute',right:10,top:32}}
              />
                  
            </View>
        </View>

    )
}