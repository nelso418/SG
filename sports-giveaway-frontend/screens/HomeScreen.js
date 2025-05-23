import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://your-api-url.com/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('GiveawayDetail', { game: item })}>
      <View style={{ padding: 16, borderBottomWidth: 1 }}>
        <Text>{item.homeTeam} vs {item.awayTeam}</Text>
        <Text>{item.date}</Text>
        {item.giveaway && <Text>🎁 {item.giveaway.description}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={games}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}