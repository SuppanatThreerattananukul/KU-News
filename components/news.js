import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    ImageBackground,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class News extends Component {
    state = {
        Username: '',
        Password: ''
    }
    componentDidMount() {
        // setTimeout(() => {
        //   this.props.navigation.navigate('news')
        // }, 1000)
    }

    onPress = () => {
        this.props.navigation.navigate('main')
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

                        <View style={styles.content}>
                            <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                            <Text>V.0.0.1</Text>
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
                                    <MaterialCommunityIcons name="blank" color={'#ffffff'} size={21} />
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff', marginStart: '10%' }}>ถัดไป</Text>
                                    <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={21} />
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#3498DB",
        padding: 10,
        borderRadius: 5,
        marginTop: 30,

    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        marginStart: 20
    }
});

export default News;