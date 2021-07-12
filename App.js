import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import splashScreen from './components/splashScreen';
import news from './components/news';
import main from './components/main';
import register from './components/register';

const App = createStackNavigator(
  {
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

  { initialRouteName: 'news' }
);

//Not show warning
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

export default createAppContainer( createSwitchNavigator(
  {
    AuthLoading: splashScreen,
    App: App,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
