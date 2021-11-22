import { StyleSheet } from 'react-native';

import { Text, View, styled } from 'dripsy';

export const Container = styled(View)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = styled(Text)({
  color: 'textPrimary',
  fontWeight: ['light', 'normal', 'bold'],
  fontSize: [16, 20, 24],
});

export const styles = StyleSheet.create({
  animatedText: {
    marginVertical: 10,
  },
});
