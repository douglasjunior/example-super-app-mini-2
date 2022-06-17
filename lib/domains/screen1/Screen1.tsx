import React from 'react';
import {Button, Image, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: '90%', height: 200}}
        resizeMode="contain"
        source={{
          uri: 'https://codigoonclick.com/wp-content/uploads/2021/04/react-native-cursos-mas-vendidos.png',
        }}
      />
      <Button
        title="Ir para Screen 2"
        onPress={() => {
          navigation.navigate('Mini2_Screen2');
        }}
      />
    </View>
  );
};

export default Screen1;
