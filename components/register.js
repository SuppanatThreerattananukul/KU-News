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
                            source={require('../asset/image/logo.png')}
                        />

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                            <Text>Detail</Text>
                            <Text>Detail</Text>
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
                                keyboardType={'email-address'}
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

                        <View style={styles.content}>
                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/security.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                                    <Text>Detail</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/security.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                                    <Text>Detail</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/security.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                                    <Text>Detail</Text>
                                </View>

                            </View>
                            <View style={{ width: "95%" }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.onPress}
                                >
                                    <Text>สมัครบัญชีใหม่</Text>
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
});

export default Register;