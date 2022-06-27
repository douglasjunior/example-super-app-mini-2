import {useAppContext, useSubscribe} from 'example-super-app-context';
import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    margin: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
  },
});

const TextBox: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  return <Text style={styles.textBox}>{children}</Text>;
};

const Screen2 = () => {
  const navigation = useNavigation();
  const {login} = useAppContext();
  const [count, setCount] = useState(0);

  useSubscribe('INCREMENT_MESSAGE', value => {
    if (typeof value !== 'number') {
      return;
    }
    setCount(previous => (previous += value));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextBox>{JSON.stringify(login, null, 2)}</TextBox>
        <TextBox>Contador: {count}</TextBox>
      </ScrollView>
    </View>
  );
};

export default Screen2;
