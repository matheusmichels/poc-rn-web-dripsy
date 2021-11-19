import { StyleSheet } from 'react-native';

import { Text, View, styled } from 'dripsy';

export const Container = styled(View)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = styled(Text)({
  color: ['green', 'blue', 'red'],
  fontWeight: ['lighter', 'normal', 'bold'],
});

export const styles = StyleSheet.create({
  animatedText: {
    marginVertical: 10,
  },
});
