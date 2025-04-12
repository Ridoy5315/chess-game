import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChessBoardPhoto from "./ChessBoardPhoto";

const HistoryDetails = ({ game }) => {
  if (!game) return null;

  return (
    <>
      <Text style={styles.title}>Game Details</Text>
      <View style={styles.gridContainer}>
        {/* Left Column - Chess Board */}
        <View style={styles.boardColumn}>
          <ChessBoardPhoto  fen={game.fen} />
        </View>

        {/* Right Column - Game Details */}
        <View style={styles.detailsColumn}>
          

          <View style={styles.detailRow}>
            <Text style={styles.label}>Players:</Text>
            <Text style={styles.value}>
              {game.players.white} vs {game.players.black}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Result:</Text>
            <Text
              style={[
                styles.value,
                game.result === "Success" ? styles.success : styles.failure,
              ]}
            >
              {game.result}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>
              {new Date(game.date).toLocaleDateString()}
            </Text>
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
            <Text style={styles.value}>{game.tags.join(", ")}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 15,
    margin: 10,
  },
  boardColumn: {
    width: 150, // Reduced container width
    marginRight: 15,
    alignItems: 'center', // Center the board
  },
  detailsColumn: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: '#5f9ea0',
    textAlign: 'center'
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
