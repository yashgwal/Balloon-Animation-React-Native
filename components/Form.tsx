import { StatusBar } from 'expo-status-bar';
import {Text , StyleSheet , View , ScrollView , ToastAndroid , BackHandler} from 'react-native'
import {useState  , useEffect} from 'react';
import { Button, FormControl, Heading, Input } from 'native-base';
import { useNavigate } from 'react-router-native'
import { space } from 'native-base/lib/typescript/theme/styled-system';

const BalloonFrom= props=>{

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [data , setData] = useState({});

    const navigate = useNavigate();

    const backHandler = BackHandler.addEventListener('hardwareBackPress',()=>{
        navigate('../');
        return true;
    })

    const chekFromApi =()=>{
        ToastAndroid.show("Fetching..." , ToastAndroid.SHORT);
        const data = {username , password}
        fetch('https://dummyjson.com/auth/login' , {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data )
        }).then(res=>{
            setData(res);
            ToastAndroid.show("Sucessfully fetched" , ToastAndroid.SHORT);
        })
    }

    return(
        <ScrollView style={styles.elementContainer} contentContainerStyle={{
            alignItems:'center',
            justifyContent:'center',}} >
                <StatusBar style="dark" />
        <View style={styles.formHolder}>
            <Heading textAlign='center'>Form</Heading>
            <FormControl>
                <FormControl.Label htmlFor='username' >Username</FormControl.Label>
                <Input id = "username" value={username} onChangeText={data=>setUsername(data)} />
            </FormControl>
            <FormControl>
                <FormControl.Label htmlFor='password' >Password</FormControl.Label>
                <Input id = "password"  value={password} onChangeText={data=>setPassword(data)}  />
            </FormControl>
            <Button style={{margin:50, borderRadius:100}} onPress={chekFromApi}>Submit</Button>

            <View>
                <Text>{JSON.stringify(data , null , 4)}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default BalloonFrom;

const styles = StyleSheet.create({
    formHolder:{
        flex:1,
        flexDirection: 'column',
        gap: 30,
        maxWidth:350,
        width:350,
        height:1000,
        paddingVertical:50
    },
    elementContainer:{
        flex:1,
        flexDirection:'column',
        gap:20,
        width: '100%',
    }
    
})