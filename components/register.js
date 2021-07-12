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
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
class Register extends Component {
    state = {
        Username: '',
        Password: ''
    }
    componentDidMount() {
        // setTimeout(() => {
        //   this.props.navigation.navigate('Register')
        // }, 1000)
    }

    onPress = () => {
        alert("test")
    }

    render() {
        return (

            <ImageBackground source={require('../asset/image/bg2.png')} resizeMode="cover" style={styles.image}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ paddingBottom: 20, flexGrow: 1, justifyContent: 'space-between', }}>
                    <View style={styles.container}>
                        <StatusBar hidden={true} />
                        <Image style={{ alignSelf: 'center', width: 120, height: 120, marginTop: 80 }}
                            source={require('../asset/image/logo_KuNews2.png')}
                        />

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>สมัครสมาชิก</Text>
                            <Text>กรอกเบอร์มือถือ เพื่อสมัครสมาชิก KU CASINO</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                placeholder='ชื่อ-นามสกุล'
                                value={this.state.Title}
                                onChangeText={Title => this.setState({ Title })}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                keyboardType={'email-address'}
                            />

                            <TextInput
                                placeholder='เบอร์โทรศัพท์'
                                value={this.state.Title}
                                onChangeText={Title => this.setState({ Title })}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                keyboardType={'number-pad'}
                            />

                            <TextInput
                                placeholder='Id line'
                                value={this.state.Title}
                                onChangeText={Title => this.setState({ Title })}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                keyboardType={'email-address'}
                            />
                        </View>

                        <View style={styles.bottom}>
                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>ความลับ</Text>
                                    <Text>ข้อมูลลูกค้าทั้งหมดจะถูกเก็บเป็นความลับ100%</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>ความปลอดภัย</Text>
                                    <Text>แหล่งการเข้าใช้งานของลูกค้าจะถูกปิดเป็นความลับ</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>ความเร็ว</Text>
                                    <Text>เข้าสู่ระบบง่ายและรวดเร็ว</Text>
                                </View>

                            </View>
                            <View style={{ width: "95%" }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.onPress}
                                >
                                    <View style={styles.row}>
                                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>ถัดไป</Text>
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
        marginTop: 30,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EAEDED",
        paddingLeft: 10,
        color: 'white',
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