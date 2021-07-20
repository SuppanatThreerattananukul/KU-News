import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    ImageBackground,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ScrollView,
    SafeAreaView,
    Animated,
    ActivityIndicator
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Font from 'expo-font'
import firebase from '../database/firebaseDb';

const { width, height } = Dimensions.get('window');
class Register extends Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection("new_users");
        firebase.database.enableLogging(true);
    }
    state = {
        name: '',
        mobile: '',
        idLine: '',
        isLoading: false,
        fadeAnim: new Animated.Value(0),
    }
    componentDidMount() {
        // setTimeout(() => {
        //   this.props.navigation.navigate('Register')
        // }, 1000)
        this.fadeIn();
        this._loadingFont();
    }

    storeUser= () => {
        if(this.state.name == ''){
            alert('กรุณากรอกชื่อ-นามสกุล')
        }else {
            // this.setState({
            //     isLoading: true
            // })
            this.dbRef.add({
                idLine: this.state.idLine,
                mobile: this.state.mobile,
                name: this.state.name,
            }).then((res) => {
                console.log(res)
                this.setState({
                    name: '',
                    mobile: '',
                    idLine: '',
                    isLoading: false
                })
                alert('ลงทะเบียนเรียบร้อยแล้ว')
            }).catch((err) => {
                console.log('Error found: ', err)
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    async _loadingFont () {
        await Font.loadAsync({
          PromptLight: require('../asset/fonts/Prompt-Light.ttf'),
          PromptRegular: require('../asset/fonts/Prompt-Regular.ttf'),
          PromptBold: require('../asset/fonts/Prompt-Bold.ttf')
        })
      }

    onPress = () => {
        alert("test")
    }

    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: 1000
        }).start();
      };

    render() {
        if(this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E"/>
                </View>       
            )
        }
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
                            hidden={false}/>
                        <Animated.View style={[{opacity: this.state.fadeAnim}]}>
                            <Image style={{ alignSelf: 'center', width: 120, height: 120, marginTop: 30 }}
                                source={require('../asset/image/logo_KuNews2.png')}
                            />
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold',color: '#696969', fontFamily:"PromptBold"}}>สมัครสมาชิก</Text>
                                <Text style={{ fontSize: 16, color: '#696969', fontFamily:"PromptRegular" }}>กรอกเบอร์มือถือ เพื่อสมัครสมาชิก KU CASINO</Text>
                            </View>
                        </Animated.View>
                        <Animated.View style={[{opacity: this.state.fadeAnim}]}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder='ชื่อ-นามสกุล'
                                    value={this.state.name}
                                    onChangeText={name => this.setState({ name })}
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    keyboardType={'email-address'}
                                />

                                <TextInput
                                    placeholder='เบอร์โทรศัพท์'
                                    value={this.state.mobile}
                                    onChangeText={mobile => this.setState({ mobile })}
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    keyboardType={'number-pad'}
                                />

                                <TextInput
                                    placeholder='Id line'
                                    value={this.state.idLine}
                                    onChangeText={idLine => this.setState({ idLine })}
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    keyboardType={'email-address'}
                                />
                            </View>
                        </Animated.View>
                        <View style={styles.bottom}>
                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold', color: '#808080', fontFamily:"PromptBold"}}>ความลับ</Text>
                                    <Text style={{ color: '#808080', fontFamily:"PromptRegular"}}>ข้อมูลลูกค้าทั้งหมดจะถูกเก็บเป็นความลับ100%</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold',color: '#808080', fontFamily:"PromptBold"}}>ความปลอดภัย</Text>
                                    <Text style={{ color: '#808080', fontFamily:"PromptRegular"}}>แหล่งการเข้าใช้งานของลูกค้าจะถูกปิดเป็นความลับ</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold',color: '#808080', fontFamily:"PromptBold"}}>ความเร็ว</Text>
                                    <Text style={{ color: '#808080', fontFamily:"PromptRegular"}}>เข้าสู่ระบบง่ายและรวดเร็ว</Text>
                                </View>

                            </View>
                            <View style={{ width: "95%" }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.storeUser}
                                >
                                    <View style={{ flex: 0.1 }}></View>
                                    <Text style={{ fontSize: 18,fontWeight: 'bold', color: '#ffffff'}}>ถัดไป</Text>
                                    <View style={{ flex: 0.1 }}>
                                        <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                                    </View>
                                </TouchableOpacity>
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
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#3498DB",
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EAEDED",
        paddingLeft: 10,
        color: 'black',
        height: height / 15,
        marginHorizontal: 10,
        marginBottom: 10,
        fontFamily:"PromptRegular"
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        marginStart: 20
    }
});

export default Register;