import * as React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Constants, Icon } from 'expo';
import { useScreens } from 'react-native-screens';

useScreens();
class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Icon.AntDesign name="star" />
        <Text
          style={styles.paragraph}
          onPress={() => this.props.navigation.push('App')}
        >
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url. Change code in the editor and watch it change on
          your phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. get a shareable url. Change code
          in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url. Change code in the editor and watch it change on your
          phone! Save to get a shareable url. Change code in the editor and
          watch it change on your phone! Save to get a shareable url. Change
          code in the editor and watch it change on your phone! Save to get a
          shareable url.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

import { createAppContainer, createStackNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      App,
    },
    {
      headerMode: 'float',
      defaultNavigationOptions: ({ navigation }) => ({
        //   headerBackTitle: 'Back',
        //   headerRight: <Button title="Back" onPress={() => navigation.navigate('Home')} />,
        title: 'React Native Web',
        //   headerTintColor: '#fff',
        headerBackground: (
          <View style={{ flex: 1, backgroundColor: '#FF0066' }} />
        ),
      }),
    },
  ),
);
