import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native'

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('news')
    }, 2000)
  }

  render() {
    return (

        <ImageBackground source={require('../asset/image/bg2.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Image style={{ alignSelf: 'center', width: 200, height: 200 }}
            source={require('../asset/image/logo_KuNews2.png')}
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default SplashScreen;