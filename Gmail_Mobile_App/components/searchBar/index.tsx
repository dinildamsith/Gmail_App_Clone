import { View,TouchableOpacity, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ShowAccounts from '../accountsShowWindow';



export default function SearchBar(){

    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState('');

    return(
        <>
        <ShowAccounts style={modalVisible}/>
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

          <TouchableOpacity onPress={()=>{setModalVisible('flex')}}>
             <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}style={{ width: 35, height: 35, borderRadius: 17.5 }}/>
           </TouchableOpacity>

          
        </View>
        
        </>
    );
}