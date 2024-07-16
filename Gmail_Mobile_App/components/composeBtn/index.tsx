import { Pressable,Text,View,Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ComposeButton(){
    return(
        <>
       <View style={{ position: 'absolute', zIndex: 999999999999999, bottom: '13%', right: '5%', ...shadowStyle }}>
      <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 15, backgroundColor: '#c3e6fe', width: 156,height:60, marginLeft: 2, ...shadowStyle }}>
        {/* Icon */}
        <Feather name="edit" size={16} color="#0b57cf" style={{ marginRight: 8 }} />
        
        {/* Text */}
        <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: '#0b57cf' }}>Compose</Text>
      </Pressable>
     </View>
        </>
    )
}

// Shadow styles
const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    android: {
      elevation: 5,
    },
  });