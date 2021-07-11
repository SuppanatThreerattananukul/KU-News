import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native'

class Main extends Component {
  state = {
    Username: '',
    Password: ''
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('Main')
    // }, 1000)
  }

  onPress = () => {
    this.props.navigation.navigate('register')
  }

  render() {
    return (

      <ImageBackground source={require('../asset/image/bg2.png')} resizeMode="cover" style={styles.image}>
         <ScrollView 
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 20, flexGrow: 1, justifyContent: 'space-between', }}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.content}>
            <View style={styles.row}>
              <View style={{ justifyContent: 'center' }}>
                <Image style={{ alignSelf: 'flex-start', width: 120, height: 120 }}
                  source={require('../asset/image/logo.png')} />
              </View>
              <View style={{ justifyContent: 'center', marginStart: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                <Text>Detail</Text>
              </View>
            </View>

          </View>
          <View style={{  alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                <Text>Detail</Text>
          
            </View>
          <View style={styles.content}>
            <View style={{ width: "95%" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
              >
                <Text>สมัครบัญชีใหม่</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={ ()=>{ Linking.openURL('https://th.ku1888.net/')}}
              >
                <Text>ลงชื่อเข้าใช้</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonMoreInformation}
                onPress={ ()=>{ Linking.openURL('https://th.ku1888.net/Home/HelpCenter')}}
              >
                <Text>สอบถามเพิ่มเติม</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  margin_top_20: {
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginStart: 20
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonMoreInformation: {
    alignItems: "center",
    backgroundColor: "#F4D03F",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Main;