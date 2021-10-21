import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SecureStore from 'react-native-sensitive-info';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppContext from './src/components/AppContext';
import {
  Home,
  Login,
  Register,
  Documents,
  Splash,
  Timeline,
  Vaccines,
  Relatives,
  Doctors,
  Appointments,
  Medicines,
} from './src/pages';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignout, setIsSignout] = useState(false);
  const [userToken, setUserToken] = useState('');

  const userData = {
    isLoading: isLoading,
    setIsLoading,
    isSignout: isSignout,
    setIsSignout,
    userToken: userToken,
    setUserToken,
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItem('userToken', {});
      } catch (e) {
        console.log('failed to fetch token from secure storage');
      }
      if (userToken) {
        // After restoring token, we may need to validate it in production apps
        setUserToken(userToken);
      }

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  const theme = {
    ...DefaultTheme,
    roundness: 5,
    font: 'medium',
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      primary: '#3f3f3f',
      accent: '#999',
    },
  };

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <AppContext.Provider value={userData}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {userToken !== '' ? (
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                  title: 'Minha Saúde',
                }}
              />
              <Drawer.Screen name="Documents" component={Documents} />
              <Drawer.Screen name="Vaccines" component={Vaccines} />
              <Drawer.Screen name="Relatives" component={Relatives} />
              <Drawer.Screen name="Doctors" component={Doctors} />
              <Drawer.Screen name="Medicines" component={Medicines} />
              <Drawer.Screen
                name="Appointments"
                component={Appointments}
                options={{
                  title: 'Agenda',
                }}
              />
              <Drawer.Screen name="Timeline" component={Timeline} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator>
              {isLoading ? (
                <Stack.Screen name="Splash" component={Splash} /> // We haven't finished checking for the token yet
              ) : (
                <Stack.Group>
                  <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                      // When logging out, a pop animation feels intuitive
                      animationTypeForReplace: isSignout ? 'pop' : 'push',
                    }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                      title: 'Register',
                    }}
                  />
                </Stack.Group>
              )}
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
export default App;
