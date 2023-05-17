import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './BlogListCard.style';

const BlogListCard = ({list, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.banner} source={{uri: list.banner}} />
        <Text style={styles.title}>{list.title}</Text>
        <Text style={styles.summary}>{list.summary}</Text>
        <Text style={styles.duration}>
          {Math.abs(list.totalReadingTime)} minute
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlogListCard;
