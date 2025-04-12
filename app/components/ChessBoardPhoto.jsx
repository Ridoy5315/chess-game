import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

const ChessBoardPhoto = ({ fen }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Generate URL from FEN (using Chess.com's API)
    const url = `https://www.chess.com/dynboard?fen=${encodeURIComponent(fen)}&size=2`;
    setImageUrl(url);
  }, [fen]);

  if (!imageUrl) {
    return <ActivityIndicator />;
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.boardImage}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  boardImage: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default ChessBoardPhoto;