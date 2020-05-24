import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { font, c, unit } from 'stylesheets';
import { isIphoneX } from 'utils/base';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={[c.pink, font.baseR22]}>{ `${isIphoneX()}` }</Text>
          <Text style={[c.pink, font.baseM30]}>{ `${unit(30)}` }</Text>
          <Text style={[c.pink, font.baseB34]}>{ `${isIphoneX()}` }</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
