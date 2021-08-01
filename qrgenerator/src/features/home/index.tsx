import React from 'react';
import { FC } from 'react';
import { Text, View } from 'react-native';
import QRCode from 'assets/icons/qrcode.svg';
import { ScreenContainer } from 'src/components/screen-container';
import { StyleSheet } from 'react-native';
import * as StylesConstants from 'src/constants/styles';
import ContentCode from 'src/types/content-code';
import { ContentCodesList } from 'src/features/home/content-codes-list';
import { EmptyCodesList } from 'src/features/home/empty-codes-list';

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    marginLeft: 26,
    marginTop: 26,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingText: StylesConstants.headingText,
});

export const Home: FC = () => {
  const contentCodes: ContentCode[] = [];
  // new Array(10).fill(1).map((a, index) => ({
  //   id: (index + 1).toString(),
  //   name: `QR CODE ${index + 1}`,
  //   contentAddress: 'https:jonathansilva.dev/docs/whatever.pdf',
  //   accessCount: 2 * index,
  //   imagePath: '',
  // }));

  return (
    <ScreenContainer>
      <View style={styles.heading}>
        <Text style={styles.headingText}>my content codes</Text>
        <QRCode width={18} height={18} />
      </View>
      {contentCodes && contentCodes.length > 0 && (
        <ContentCodesList
          contentCodes={contentCodes}
          onAddContentCodeClicked={() => {}}
        />
      )}
      {contentCodes && contentCodes.length === 0 && (
        <EmptyCodesList onAddContentCodeClicked={() => {}} />
      )}
    </ScreenContainer>
  );
};
