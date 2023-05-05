import { StatusBar } from 'expo-status-bar';
import { Animated, RefreshControl, RefreshControlBase, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import Svg , { Circle , SvgUri , Path , SvgXml,Line} from 'react-native-svg';
import LOGO from "./assets/inflated.svg"
import { NativeBaseProvider } from 'native-base';
import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';

export default function App() {
  console.log(LOGO)


  var flateSize = useRef(new Animated.Value(400)).current

  const shrinkBalloon = ()=>{
    console.log("hello how ")
    Animated.timing(flateSize , {
      toValue:100,
      duration:3000,
      useNativeDriver:false
    }).start()
  };


  return (
    // <NativeBaseProvider>
      <View style={styles.container}>
        <Text selectable style={styles.headingTitle} >Baloon Animation</Text> 
        <StatusBar style="dark" />
        <RefreshControl refreshing  onRefresh={()=>console.log("refresh...  ")} />
          <Text>This is the  view element</Text>
        <Animated.ScrollView style = {{...styles.view , width : flateSize , height : flateSize}} scrollEnabled >
          <LOGO width={400} height={400} />
      
        </Animated.ScrollView >
        <TouchableOpacity onPress={()=>shrinkBalloon()}>
          <View style={styles.flatButton}>
          <Text style={{fontSize:30 , marginHorizontal:30 , marginVertical:10}}>Hello</Text>
          </View>
        </TouchableOpacity>
      </View>
    // </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20,
  },

  headingTitle: {
    fontSize: 30,
    fontFamily : 'sans-serif',
    fontWeight: "bold",

  },

  view: {
    maxHeight: 500,
    flex: 1,
    gap : 20,
  },
  flatButton: {
    backgroundColor:"#0a95ff",
    borderRadius:50
  }
});
