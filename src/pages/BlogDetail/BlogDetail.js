import React, {useContext} from 'react';
import {View, useWindowDimensions, ScrollView} from 'react-native';
import ContentContext from '../../context';
import RenderHtml from 'react-native-render-html';
import styles from './BlogDetail.style';
import colors from '../../styles/color';

const BlogDetail = () => {
  const {content, setContent} = useContext(ContentContext);
  const source = {
    html: `
  ${content}`,
  };
  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />
      </View>
    </ScrollView>
  );
};

export default BlogDetail;
const tagsStyles = {
  p: {
    color: colors.white,
  },
  a: {},
  strong: {
    color: colors.white,
  },
  h1: {
    color: colors.orange,
  },
  ol: {
    color: colors.light_orange,
  },
  span: {
    color: colors.white,
  },
};
