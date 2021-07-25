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
    SafeAreaView,
    Animated,
} from 'react-native'
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class News extends Component {
    state = {
        Username: '',
        Password: '',
        fadeAnim: new Animated.Value(0)
    }
    
    componentDidMount() {
        // setTimeout(() => {
        //   this.props.navigation.navigate('news')
        // }, 1000)
        this.fadeIn();
    }

    onPress = () => {
        this.props.navigation.navigate('main')
    }

    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: 1000
        }).start();
      };

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
                            hidden={false}/>
                        <Animated.View style={{opacity: this.state.fadeAnim}}>
                        <Image style={{ alignSelf: 'center', width: 150, height: 150, marginTop: 80 }}
                            source={require('../asset/image/logo_KuNews2.png')}
                        />

                        <View style={styles.content}>
                            <Text style={{ fontSize: 20,fontWeight: 'bold',color: '#696969'}}>Kubet News</Text>
                            <Text style={{ fontSize: 16,color: '#696969'}}>V.1.0.0</Text>
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
                                    <Text style={{ fontWeight: 'bold',color: '#808080'}}>ความลับ</Text>
                                    <Text style={{ color: '#808080'}}>ข้อมูลลูกค้าทั้งหมดจะถูกเก็บเป็นความลับ 100%</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold',color: '#808080'}}>ความปลอดภัย</Text>
                                    <Text style={{ color: '#808080'}}>แหล่งการเข้าใช้งานของลูกค้าจะถูกปิดเป็นความลับ</Text>
                                </View>

                            </View>

                            <View style={styles.row}>
                                <View style={{ marginBottom: 10 }}>
                                    <Image style={{ alignSelf: 'center', width: 35, height: 40 }}
                                        source={require('../asset/image/rtyrtuy.png')}
                                    />
                                </View>
                                <View style={{ marginStart: 5 }}>
                                    <Text style={{ fontWeight: 'bold',color: '#808080'}}>ความเร็ว</Text>
                                    <Text style={{ color: '#808080'}}>เข้าสู่ระบบง่ายและรวดเร็ว</Text>
                                </View>

                            </View>
                            <View style={{ width: "95%" }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 0.1 }}></View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>ถัดไป</Text>
                                    <View style={{ flex: 0.1 }}>
                                        <MaterialCommunityIcons name="chevron-double-right" color={'#ffffff'} size={21} />
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