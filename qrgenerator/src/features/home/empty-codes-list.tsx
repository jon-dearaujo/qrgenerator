import React from 'react';
import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { primaryColor, primaryTextColor } from 'src/constants/styles';
import QRCode from 'assets/icons/qrcode.svg';
import { AddContentCodeButton } from 'src/features/home/add-content-code-button';

interface Props {
  onAddContentCodeClicked: () => void;
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 65,
    paddingHorizontal: 26,
    width: '100%',
    backgroundColor: `${primaryColor}1A`,
    flex: 1,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 18,
    marginTop: 28,
  },
  text: {
    color: primaryTextColor,
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },
  qr: {
    marginTop: 16,
  },
  messageContainer: {
    alignItems: 'center',
  },
});

export const EmptyCodesList: FC<Props> = ({ onAddContentCodeClicked }) => (
  <View style={styles.content}>
    <View style={styles.messageContainer}>
      <Text style={styles.text}>You don't have any Content code.</Text>
      <Text style={styles.text}>Click in the button below to create.</Text>
      <QRCode style={styles.qr} width={124} height={124} />
    </View>
    <AddContentCodeButton onClick={onAddContentCodeClicked} />
  </View>
);
