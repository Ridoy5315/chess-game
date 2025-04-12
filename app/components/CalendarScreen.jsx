import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import HistoryDetails from './HistoryDetails';
import historyData from '@/app/constants/historyData.json';

const CalendarScreen = () => {
  const [selectedGames, setSelectedGames] = useState([]);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [currentWeek] = useState(getCurrentWeek());

  // Prepare marked dates
  const markedDates = {};
  historyData.forEach(game => {
    markedDates[game.date] = {
      marked: true,
      dotColor: game.result === 'Success' ? 'green' : 'red',
      selected: true,
      selectedColor: '#e0f0ff', 
      customStyles: {
        container: {
          backgroundColor: '#f0f8ff',
          borderRadius: 20,
        },
        text: {
          color: '#2d4150',
          fontWeight: 'bold',
        },
      },
    };
  });

  function getCurrentWeek() {
    const today = new Date();
    const currentDay = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDay);
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <View style={styles.container}>
      {/* Week View */}
      <TouchableOpacity 
        onPress={() => setIsCalendarVisible(!isCalendarVisible)}
        style={styles.weekContainer}
      >
        <View style={styles.weekRow}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} style={styles.dayHeader}>{day}</Text>
          ))}
        </View>
        <View style={styles.weekRow}>
          {currentWeek.map((date) => {
            const dateStr = formatDate(date);
            const hasHistory = markedDates[dateStr] !== undefined;
            return (
              <TouchableOpacity 
                key={dateStr}
                style={[
                  styles.dayCell,
                  hasHistory && styles.hasHistoryDay,
                  selectedGames[0]?.date === dateStr && styles.selectedDay
                ]}
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the week container's onPress
                  const games = historyData.filter(g => g.date === dateStr);
                  setSelectedGames(games);
                }}
              >
                <Text style={styles.dayText}>{date.getDate()}</Text>
                {hasHistory && (
                  <View style={[
                    styles.dot, 
                    { backgroundColor: markedDates[dateStr].dotColor }
                  ]}/>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </TouchableOpacity>

      {/* Game Details - Fixed position below week view */}
      <View style={styles.detailsContainer}>
        {selectedGames.length > 0 ? (
          <HistoryDetails games={selectedGames} />
        ) : (
          <Text style={styles.noGamesText}>Select a date to view games</Text>
        )}
      </View>

      {/* Full Calendar Overlay - Toggled by week view click */}
      {isCalendarVisible && (
        <View style={styles.calendarOverlay}>
          <Calendar
            current={new Date()}
            markedDates={markedDates}
            markingType={'multi-dot'}
            onDayPress={(day) => {
              const games = historyData.filter(g => g.date === day.dateString);
              setSelectedGames(games);
              setIsCalendarVisible(false);
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  weekContainer: {
    marginBottom: 20,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayHeader: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666',
    fontSize: 14,
  },
  dayCell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  markedDay: {
    backgroundColor: '#f0f8ff',
  },
  selectedDay: {
    backgroundColor: '#e0f0ff',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  noGamesText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginTop: 20,
  },
  hasHistoryDay: {
    backgroundColor: '#5f9ea0', 
  },
  calendarOverlay: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    zIndex: 10,
    marginLeft: 5,
    marginRight: 20,
  },
});

export default CalendarScreen;