import { List } from '@ant-design/react-native';
import React from 'react';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-svg';
import { AddContentCodeButton } from 'src/features/home/add-content-code-button';
import ContentCode from 'src/types/content-code';

interface Props {
  contentCodes: ContentCode[];
  onAddContentCodeClicked: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 18,
  },
  list: {
    marginBottom: 20,
  },
});

export const ContentCodesList: FC<Props> = ({
  contentCodes,
  onAddContentCodeClicked,
}) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List style={styles.list}>
        {contentCodes.map(c => (
          <List.Item
            key={c.id}
            extra={
              c.accessCount === 0 ? `No access` : `${c.accessCount} accesses`
            }>
            {c.name}
            <List.Item.Brief>{c.contentAddress}</List.Item.Brief>
          </List.Item>
        ))}
      </List>
    </ScrollView>
    <AddContentCodeButton onClick={onAddContentCodeClicked} />
  </View>
);
