import React from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Header from '../components/header';
import QuickStats from '../components/dashboard/StatsCard';
import UpcomingBookings from '../components/dashboard/upcoming';
import NavigationSidebar from '../components/navigation';
import Footer from '../components/footer';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5A5F', // Airbnb's coral color
    accent: '#00A699', // Airbnb's teal color
  },
};

export default function App() {
  const { width } = useWindowDimensions();
  const isWeb = width > 768; // Assuming tablet/desktop for width > 768px

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {isWeb && <NavigationSidebar />}
          <ScrollView style={styles.mainContent}>
            <QuickStats />
            <UpcomingBookings />
          </ScrollView>
        </View>
        <Footer />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
});

