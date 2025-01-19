import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import { Home, List as ListIcon, Calendar, Star, DollarSign, Settings } from 'react-native-feather';

const NavigationSidebar = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <List.Item
        title="Dashboard"
        left={() => <Home color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
      <List.Item
        title="Listings"
        left={() => <ListIcon color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
      <List.Item
        title="Bookings"
        left={() => <Calendar color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
      <List.Item
        title="Reviews"
        left={() => <Star color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
      <List.Item
        title="Earnings"
        left={() => <DollarSign color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
      <List.Item
        title="Settings"
        left={() => <Settings color={theme.colors.text} size={24} />}
        style={styles.listItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  listItem: {
    paddingVertical: 12,
  },
});

export default NavigationSidebar;

