import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { primaryColor } from 'src/constants/styles';

interface Props {
  onClick: () => void;
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: primaryColor,
    color: 'white',
    height: 52,
    marginHorizontal: 16,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 2,
  },
  addButtonText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export const AddContentCodeButton: FC<Props> = ({ onClick }) => (
  <TouchableOpacity style={styles.addButton}>
    <Text style={styles.addButtonText}>create new content code</Text>
  </TouchableOpacity>
);
