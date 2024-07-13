import { View, Text,Dimensions,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ImportantMgBox(props:any){

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return(

        <View style={{marginTop:15}}>
            <View style={{width:windowWidth-28,height:70}}>
            <Image
                source={{ uri: props.profilePic }}
                style={{ width: 49, height: 49, borderRadius: 80.5,marginTop:10}}
              />

                <Image
                  source={{ uri: "https://cdn.icon-icons.com/icons2/2854/PNG/512/bookmark_favorite_book_icon_181573.png" }}
                  style={{ position:'absolute',left:62,top:12,width: 20, height: 20, transform: [{ rotate: '270deg' }] }}
                  />
                  <Text style={{position:'absolute',left:84,top:12,fontWeight:'bold',fontSize:15,lineHeight: 20}}>{props.from}</Text>
                  <Text style={{position:'absolute',right:9,top:12,fontWeight:'bold',fontSize:13}}>{props.date}</Text> 
                  <Text style={{position:'absolute',left:62,top:30,fontWeight:'500',fontSize:12,}}>{props.subject}</Text>
                  <Text style={{position:'absolute',left:62,top:47,fontWeight:'300',color:'#686869',fontSize:12,width:200}} numberOfLines={1} ellipsizeMode="tail" >{props.massage}</Text>
        
                  <Image
                source={{ uri: "https://img.icons8.com/forma-bold/24/star.png" }}
                style={{ width: 20, height: 20, borderRadius: 17.5,marginTop:10,tintColor:'#7e7f7f',position:'absolute',right:9,top:32}}
              />
                  
            </View>
        </View>

    )
}