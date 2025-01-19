import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

const Footer = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableRipple onPress={() => {}}>
        <Text style={[styles.link, { color: theme.colors.primary }]}>Terms</Text>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <Text style={[styles.link, { color: theme.colors.primary }]}>Privacy Policy</Text>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <Text style={[styles.link, { color: theme.colors.primary }]}>Support</Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  link: {
    marginHorizontal: 16,
    fontSize: 14,
  },
});

export default Footer;

