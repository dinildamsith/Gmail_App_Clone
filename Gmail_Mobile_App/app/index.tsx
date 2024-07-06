import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello, Tailwind CSS!</Text>
    </View>
  );
}

const styless = StyleSheet.create({
  mainView:{
    marginTop:70
  }
})