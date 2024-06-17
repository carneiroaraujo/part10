import { View, Text } from "react-native";

export default function RepositoryItem({item}) {
  console.log("ij");
  return (
    <View>
      <Text></Text>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount} </Text>
      {/* <Text>Nome: {item.fullName}</Text> */}
    </View>
  )
}