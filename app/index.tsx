import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import useGlobalStyles from './styles/UseGlobalStyles';
import React from 'react';

export default function HomeScreen() {
  const globalStyles = useGlobalStyles()

  return (
    <View style={globalStyles.container}>
      <Text >Requited</Text>
      <StatusBar style="auto" />
    </View>
  );
}