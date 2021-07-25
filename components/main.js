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
  SafeAreaView,
  Animated,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Main extends Component {
  state = {
    Username: '',
    Password: '',
    fadeAnim: new Animated.Value(0)
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('Main')
    // }, 1000)
    this.fadeIn();
  }


  onPress = () => {
    this.props.navigation.navigate('register')
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../asset/image/bg2.png')} resizeMode="cover" style={styles.image}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 20, flexGrow: 1, justifyContent: 'space-between', }}>
            <View style={styles.container}>
              <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle='dark-content'
                showHideTransition='fade'
                hidden={false} />
              <Animated.View style={[styles.content, { opacity: this.state.fadeAnim }]}>
                <View style={styles.row}>
                  <View style={{ justifyContent: 'center' }}>
                    <Image style={{ alignSelf: 'flex-start', width: 150, height: 150 }}
                      source={require('../asset/image/logo_KuNews2.png')} />
                  </View>
                  <View style={{ justifyContent: 'center', marginStart: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#696969' }}>Kubet News</Text>
                    <Text style={{ fontSize: 20, color: '#696969' }}>V.1.0.0</Text>
                  </View>
                </View>

              </Animated.View>

              <View style={styles.bottom}>
                <Animated.View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, opacity: this.state.fadeAnim }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#696969' }}>เข้าสู่ระบบ KUBET</Text>
                  <Text style={{ fontSize: 16, color: '#696969' }}>กรุณาเลือกสมัคร/เข้าสู่ระบบ</Text>
                  <Text style={{ fontSize: 16, color: '#696969' }}>เพื่อเริ่มการใช้งาน</Text>
                </Animated.View>
                <View style={{ width: "95%" }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                  >
                    <View style={{ flex: 0.1 }}></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>สมัครสมาชิก</Text>
                    <View style={{ flex: 0.1 }}>
                      <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => { Linking.openURL('https://th.ku1888.net/') }}
                  >
                    <View style={{ flex: 0.1 }}></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>เข้าสู่ระบบ</Text>
                    <View style={{ flex: 0.1 }}>
                      <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonMoreInformation}
                    onPress={() => { Linking.openURL('https://th.ku1888.net/Home/HelpCenter') }}
                  >
                    <View style={{ flex: 0.1 }}></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>บริการลูกค้า 24ชม.</Text>
                    <View style={{ flex: 0.1 }}>
                      <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                    </View>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                                        style={styles.buttonBack}
                                        onPress={this.goBack}
                                    >
                                        <View style={{ flex: 0.1 }}></View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>ย้อนกลับ</Text>
                                        <View style={{ flex: 0.1 }}>
                                            <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                                        </View>
                                    </TouchableOpacity> */}
                </View>

              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
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
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonMoreInformation: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#F4D03F",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonBack: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#B2BABB",
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