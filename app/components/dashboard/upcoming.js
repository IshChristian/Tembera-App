import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';

const bookings = [
  { id: 1, title: 'Cozy Apartment', date: 'May 15-18', guests: 2 },
  { id: 2, title: 'Beach House', date: 'June 1-5', guests: 4 },
  { id: 3, title: 'Mountain Cabin', date: 'June 10-12', guests: 3 },
  { id: 4, title: 'City Loft', date: 'June 20-22', guests: 2 },
];

const UpcomingBookings = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Title style={styles.sectionTitle}>Upcoming Bookings</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bookings.map((booking) => (
          <Card key={booking.id} style={styles.card}>
            <Card.Content>
              <Title style={styles.bookingTitle}>{booking.title}</Title>
              <Paragraph style={styles.bookingDate}>{booking.date}</Paragraph>
              <Paragraph style={styles.bookingGuests}>{booking.guests} guests</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#f7f7f7',
  },
  bookingTitle: {
    fontSize: 16,
  },
  bookingDate: {
    marginTop: 4,
  },
  bookingGuests: {
    marginTop: 4,
  },
});

export default UpcomingBookings;

