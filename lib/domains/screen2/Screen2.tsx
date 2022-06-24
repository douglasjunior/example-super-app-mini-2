import {useAppContext} from 'example-super-app-mock';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';

const Screen2 = () => {
  const navigation = useNavigation();
  const {login} = useAppContext();
  return (
    <View style={{flex: 1}}>
      <Button
        title="Voltar"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>{JSON.stringify(login, null, 2)}</Text>
    </View>
  );
};

export default Screen2;
