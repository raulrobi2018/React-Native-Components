import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {casas} from '../data/listItems';
import {styles} from '../styles/sectionListStyles';

export const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header title="Section list" /> */}
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <Header title="Section List" />}
        ListFooterComponent={() => (
          <Header title={'Total de items ' + casas.length} />
        )}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionTitle}>{section.casa}</Text>
        )}
        renderSectionFooter={({section}) => (
          <Text style={styles.sectionFooter}>
            Total sección {section.data.length}
          </Text>
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
