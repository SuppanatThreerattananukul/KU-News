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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    source={require('../asset/image/logo_KuNews2.png')} />
                </View>
                <View style={{ justifyContent: 'center', marginStart: 20 }}>
                  <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                  <Text>V.0.0.1</Text>
                </View>
              </View>

            </View>

            <View style={styles.bottom}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>เข้าสู่ระบบKUBET</Text>
                <Text>กรุณาเลือกสมัคร/เข้าสู่ระบบ</Text>
                <Text>เพื่อเริ่มต้นการใช้งาน</Text>

              </View>
              <View style={{ width: "95%" }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onPress}
                >
                  <View style={styles.row}>
                  <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>สมัครสมาชิก</Text>
                    <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => { Linking.openURL('https://th.ku1888.net/') }}
                >
                  <View style={styles.row}>
                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>เข้าสู่ระบบ</Text>
                      <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonMoreInformation}
                  onPress={() => { Linking.openURL('https://th.ku1888.net/Home/HelpCenter') }}
                >
                  <View style={styles.row}>
                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>บริการลูกค้า24ชม.</Text>
                      <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                  </View>
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
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    marginStart: 20
  }
});

export default Main;