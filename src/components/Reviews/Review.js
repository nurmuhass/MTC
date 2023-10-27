import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Rating from '../Rating/Rating';
import Divider from '../Divider';

const Review = ({review}) => {
  return (
    <>
      <Divider enabledSpacing={false} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={review.author.avatar} />
          <View style={styles.userBox}>
            <Text style={styles.user}>{review.author.username}</Text>
            <Text style={styles.date}>{review.date}</Text>
          </View>
          <Rating rating={review.rating} showLabelTop />
        </View>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: 16,
    marginRight: 8,
  },
  userBox: {
    flex: 1,
    marginRight: 8,
  },
  user: {
    color: '#070f18',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color:' #b2b2b2',
  },
  text: {
    color:' #8b8989',
  },
});

export default Review;
