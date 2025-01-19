import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar, Button, useTheme } from 'react-native-paper';
import { Bell, PlusCircle } from 'react-native-feather';

const Header = () => {
  const theme = useTheme();

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.welcomeContainer}>
        <Appbar.Content title="Welcome, Host!" titleStyle={styles.welcomeText} />
      </View>
      <View style={styles.actionsContainer}>
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.addButton}
          icon={() => <PlusCircle color={theme.colors.background} size={20} />}
        >
          Add Listing
        </Button>
        <Appbar.Action icon={() => <Bell color={theme.colors.text} size={24} />} onPress={() => {}} />
        <Avatar.Image size={40} source={{ uri: 'https://placekitten.com/200/200' }} />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    elevation: 0,
    justifyContent: 'space-between',
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    marginRight: 16,
    backgroundColor: '#FF5A5F', // Airbnb's coral color
  },
});

export default Header;

