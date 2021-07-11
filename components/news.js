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
                            source={require('../asset/image/logo.png')}
                        />

                        <View style={styles.content}>
                            <Text style={{ fontWeight: 'bold' }}>Kubet new</Text>
                            <Text>Detail</Text>
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
                                    <Text>Press Here</Text>
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
});

export default News;