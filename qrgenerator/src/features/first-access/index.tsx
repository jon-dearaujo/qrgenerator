import { ScreenContainer } from 'src/components/screen-container';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as StylesConstants from 'src/constants/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from 'src/types/routes';

interface Props {
  navigation: StackNavigationProp<StackProps, 'HomeFirstAccess'>;
}

export const FirstAccessHome: React.FC<Props> = ({ navigation }) => (
  <ScreenContainer>
    <Text style={styles.heading}>qr generator</Text>
    <View style={styles.content}>
      <Text style={styles.contentText}>Create instantaneous access codes.</Text>
      <Text style={styles.contentText}>Share them so that people can use.</Text>
      <Text style={styles.contentText}>Get access statistics.</Text>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.startNowButton}>
        <Text style={styles.startNowButtonText}>start now</Text>
      </TouchableHighlight>
    </View>
  </ScreenContainer>
);
const styles = StyleSheet.create({
  heading: {
    marginTop: 26,
    marginLeft: 26,
    marginBottom: 42,
    ...StylesConstants.headingText,
  },
  content: {
    paddingTop: 65,
    paddingHorizontal: 26,
    width: '100%',
    backgroundColor: `${StylesConstants.primaryColor}1A`,
    flexGrow: 1,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },
  contentText: {
    color: `${StylesConstants.primaryTextColor}BF`,
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
  },
  startNowButton: {
    backgroundColor: StylesConstants.primaryColor,
    height: 52,
    width: 303,
    marginTop: 106,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 2,
    alignSelf: 'center',
  },
  startNowButtonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    padding: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
