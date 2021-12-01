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
  Splash,
  Timeline,
  Documents,
  Vaccines,
  Relatives,
  Doctors,
  Appointments,
  Medicines,
  AddDocuments,
  AddVaccines,
  Profile,
  AddRelatives,
  AddDoctors,
  AddAppointments,
  AddMedicines,
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

  const DrawerComponent = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Appointments"
          component={Appointments}
          options={{
            title: 'Agenda',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Documents"
          component={Documents}
          options={{
            title: 'Documentos',
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="Timeline"
          component={Timeline}
          options={{
            title: 'Linha do Tempo',
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="Doctors"
          component={Doctors}
          options={{
            title: 'Médicos',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Menu Principal',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Meu Perfil',
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="Relatives"
          component={Relatives}
          options={{
            title: 'Parentes',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Medicines"
          component={Medicines}
          options={{
            title: 'Remédios',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Vaccines"
          component={Vaccines}
          options={{
            title: 'Vacinas',
            headerTitleAlign: 'center',
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Login}
          options={{
            title: 'Sair',
          }}
        />
      </Drawer.Navigator>
    );
  };

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <AppContext.Provider value={userData}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {userToken !== '' ? (
              <Stack.Group>
                <Stack.Screen
                  name="Drawer"
                  component={DrawerComponent}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="AddDocuments"
                  component={AddDocuments}
                  options={{
                    title: 'Cadastro de Documento',
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="AddVaccines"
                  component={AddVaccines}
                  options={{
                    title: 'Cadastro de Vacina',
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="AddRelatives"
                  component={AddRelatives}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="AddDoctors"
                  component={AddDoctors}
                  options={{
                    title: 'Cadastro de Médico',
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="AddMedicines"
                  component={AddMedicines}
                  options={{
                    title: 'Cadastro de Remédio',
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="AddAppointments"
                  component={AddAppointments}
                  options={{
                    title: 'Cadastro de Compromisso',
                    headerTitleAlign: 'center',
                  }}
                />
              </Stack.Group>
            ) : isLoading ? (
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                  headerShown: false,
                }}
              />
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                    animationTypeForReplace: isSignout ? 'pop' : 'push',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
export default App;
