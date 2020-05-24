import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { c } from 'stylesheets';
import { isIphoneX } from 'utils/base';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={c.pink}>{ `${isIphoneX()}` }</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
