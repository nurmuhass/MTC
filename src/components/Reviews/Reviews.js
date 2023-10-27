import React from 'react';
import {View, StyleSheet} from 'react-native';
import Review from './Review';

const Reviews = ({reviews = []}) => {
  return (
    <View style={styles.container}>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default Reviews;
