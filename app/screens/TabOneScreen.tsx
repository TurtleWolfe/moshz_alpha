import * as React from 'react';
import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import WelcomeScreen from '../components/WelcomeScreen'
import AppCard from '../components/AppCard'
import ListingDetailsScreen from '../components/ListingDetailsScreen'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ListingDetailsScreen />
      {/* <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require('../assets/Supplementary/jacket.jpg')}
      /> */}
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%",
    backgroundColor: 'pink'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
