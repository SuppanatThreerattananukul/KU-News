import { createStackNavigator, createAppContainer } from 'react-navigation';
import splashScreen from './components/splashScreen';
import news from './components/news';
import main from './components/main';
import register from './components/register';

const App = createStackNavigator(
  {
    splashScreen: {
      screen: splashScreen,
      navigationOptions: {
        header: null,
      },
    },
    news: {
      screen: news,
      navigationOptions: {
        header: null,
      },
    },
    main: {
      screen: main,
      navigationOptions: {
        header: null,
      },
    },
    register: {
      screen: register,
      navigationOptions: {
        header: null,
      },
    },

  },

  { initialRouteName: 'splashScreen' }
);

//Not show warning
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

export default createAppContainer(App);
