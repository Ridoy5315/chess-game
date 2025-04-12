import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import HistoryDetails from './HistoryDetails';
import historyData from '@/app/constants/historyData.json';

const CalendarScreen = () => {
  const [selectedGame, setSelectedGame] = useState(null);

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
          const game = historyData.find(g => g.date === day.dateString);
          setSelectedGame(game || null);
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
      
      {selectedGame && <HistoryDetails game={selectedGame} />}
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