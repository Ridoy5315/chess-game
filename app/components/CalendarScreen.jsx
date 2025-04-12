import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import HistoryDetails from './HistoryDetails';
import historyData from '@/app/constants/historyData.json';

const CalendarScreen = () => {
  const [selectedGames, setSelectedGames] = useState([]); // Changed to array
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date

  // Prepare marked dates
  const markedDates = {};
  historyData.forEach(game => {
    markedDates[game.date] = {
      marked: true,
      dotColor: game.result === 'Success' ? 'green' : 'red',
      selected: true,
      selectedColor: '#5f9ea0',
    };
  });

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        markingType={'multi-dot'}
        onDayPress={(day) => {
          const gamesForDate = historyData.filter(g => g.date === day.dateString);
          setSelectedGames(gamesForDate);
          setSelectedDate(day.dateString);
        }}
        theme={{
          calendarBackground: '#ffffff',
          selectedDayBackgroundColor: '#5f9ea0',
          todayTextColor: '#5f9ea0',
          dayTextColor: '#2d4150',
          monthTextColor: '#5f9ea0',
          textMonthFontWeight: 'bold',
        }}
      />
      
      {selectedGames.length > 0 && (
        <HistoryDetails 
          games={selectedGames} 
          date={selectedDate} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default CalendarScreen;