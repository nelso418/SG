import React from 'react';
import { View, Text, Image } from 'react-native';

export default function GiveawayDetail({ route }) {
  const { game } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>{game.homeTeam} vs {game.awayTeam}</Text>
      <Text>Date: {game.date}</Text>
      {game.giveaway && (
        <>
          <Text>Description: {game.giveaway.description}</Text>
          {game.giveaway.imageUrl && (
            <Image source={{ uri: game.giveaway.imageUrl }} style={{ width: 200, height: 200 }} />
          )}
        </>
      )}
    </View>
  );
}