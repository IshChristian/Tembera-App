import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { Calendar, DollarSign } from 'react-native-feather';

const QuickStats = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.iconContainer}>
            <Calendar color={theme.colors.primary} size={24} />
          </View>
          <Title style={styles.title}>Total Bookings</Title>
          <Paragraph style={styles.value}>28</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.iconContainer}>
            <DollarSign color={theme.colors.primary} size={24} />
          </View>
          <Title style={styles.title}>Earnings This Month</Title>
          <Paragraph style={styles.value}>$3,450</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#f7f7f7',
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default QuickStats;

