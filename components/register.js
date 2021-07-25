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
    ActivityIndicator,
    Alert,
    Linking,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../database/firebaseDb';
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window');
class Register extends Component {
    constructor() {
        super();
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
    }

    storeUser = () => {

        // console.log("test ", firestore().collection('new_users').doc('mobile').get())
        if (this.state.name == '' || this.state.idLine == '' || this.state.mobile == '') {
            Alert.alert(
                "ผิดพลาด",
                "กรุณากรอกข้อมูลให้ครบถ้วน",
                [
                    { text: "ยืนยัน" }
                ]);
        } else if ((this.state.mobile.match(/\d/g) || []).length != 10) {
            Alert.alert(
                "ผิดพลาด",
                "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง",
                [
                    { text: "ยืนยัน" }
                ]);
        } else {
            firestore()
                .collection('new_users')
                .where('mobile', '==', this.state.mobile)
                .get()
                .then(querySnapshot => {
                    // console.log('Total users: ', querySnapshot.size);
                    if (querySnapshot.size >= 1) {
                        Alert.alert(
                            "ผิดพลาด",
                            "เบอร์โทรศัพท์นี้ถูกใช้งานแล้ว \nกรุณาใช้เบอร์โทรศัพท์อื่น",
                            [
                                { text: "ยืนยัน" }
                            ]);
                    }
                    else {
                        this.setState({
                            isLoading: true
                        })
                        firestore().collection("new_users").add({
                            idLine: this.state.idLine,
                            mobile: this.state.mobile,
                            name: this.state.name,
                        }).then((res) => {
                            this.setState({
                                name: '',
                                mobile: '',
                                idLine: '',
                                isLoading: false
                            })
                            Alert.alert(
                                "สำเร็จ",
                                "ลงทะเบียนเรียบร้อยแล้ว",
                                [
                                    {
                                        text: "ยืนยัน",
                                        // onPress: () => this.props.navigation.navigate('main'),
                                        onPress: () => Linking.openURL('https://th.ku1888.net/'),
                                    }
                                ]);
                        }).catch((err) => {
                            console.log('Error found: ', err)
                            this.setState({
                                isLoading: false
                            })
                        })
                    }
                });
        }
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

    renderLoading = () => {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
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
                            <Animated.View style={[{ opacity: this.state.fadeAnim }]}>
                                <Image style={{ alignSelf: 'center', width: 120, height: 120, marginTop: 30 }}
                                    source={require('../asset/image/logo_KuNews2.png')}
                                />
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#696969' }}>สมัครสมาชิก</Text>
                                    <Text style={{ fontSize: 16, color: '#696969' }}>กรอกข้อมูล เพื่อสมัครสมาชิก KU CASINO</Text>
                                </View>
                            </Animated.View>
                            <Animated.View style={[{ opacity: this.state.fadeAnim }]}>
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
                                        maxLength={10}
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
                                        <Text style={{ fontWeight: 'bold', color: '#808080' }}>ความลับ</Text>
                                        <Text style={{ color: '#808080' }}>ข้อมูลลูกค้าทั้งหมดจะถูกเก็บเป็นความลับ 100%</Text>
                                    </View>

                                </View>

                                <View style={styles.row}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                            source={require('../asset/image/rtyrtuy.png')}
                                        />
                                    </View>
                                    <View style={{ marginStart: 5 }}>
                                        <Text style={{ fontWeight: 'bold', color: '#808080' }}>ความปลอดภัย</Text>
                                        <Text style={{ color: '#808080' }}>แหล่งการเข้าใช้งานของลูกค้าจะถูกปิดเป็นความลับ</Text>
                                    </View>

                                </View>

                                <View style={styles.row}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                            source={require('../asset/image/rtyrtuy.png')}
                                        />
                                    </View>
                                    <View style={{ marginStart: 5 }}>
                                        <Text style={{ fontWeight: 'bold', color: '#808080' }}>ความเร็ว</Text>
                                        <Text style={{ color: '#808080' }}>เข้าสู่ระบบง่ายและรวดเร็ว</Text>
                                    </View>

                                </View>
                                <View style={{ width: "95%", marginTop: 30, }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={this.storeUser}
                                    >
                                        <View style={{ flex: 0.1 }}></View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>บันทึก</Text>
                                        <View style={{ flex: 0.1 }}>
                                            <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonBack}
                                        onPress={this.goBack}
                                    >
                                        <View style={{ flex: 0.1 }}></View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>ย้อนกลับ</Text>
                                        <View style={{ flex: 0.1 }}>
                                            <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={14 * 1.5} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {this.renderLoading()}
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
        justifyContent: 'center',
        opacity: 0.5,
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
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        marginStart: 20
    }
});

export default Register;