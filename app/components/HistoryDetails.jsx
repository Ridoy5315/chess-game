import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryDetails = ({ game }) => {
  if (!game) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Details</Text>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Players:</Text>
        <Text style={styles.value}>{game.players.white} vs {game.players.black}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Result:</Text>
        <Text style={[
          styles.value, 
          game.result === 'Success' ? styles.success : styles.failure
        ]}>
          {game.result}
        </Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{new Date(game.date).toLocaleDateString()}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Opening:</Text>
        <Text style={styles.value}>{game.opening}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Mode:</Text>
        <Text style={styles.value}>{game.mode}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Tags:</Text>
        <Text style={styles.value}>{game.tags.join(', ')}</Text>
      </View>
      
      {/* Add ChessBoard component here when ready */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#5f9ea0',
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    width: 80,
    color: '#555',
  },
  value: {
    flex: 1,
  },
  success: {
    color: 'green',
  },
  failure: {
    color: 'red',
  },
});

export default HistoryDetails;