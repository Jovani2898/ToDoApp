import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export interface ITask {
  id: string;
  text: string;
}

export const Task = (props: ITask) => {
  const {text, id} = props;
  return (
    <View style={styles.item} key={id}>
      <View style={styles.itemLeft}>
        <View style={styles.pressable}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
