import { Text, View } from "react-native";
import Profile from "./user";

const user = {
  name: "amandafralve",
  imageUrl: 'https://avatars.githubusercontent.com/u/160404693?v=4',
  imageSize: 90,
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile></Profile>
      <Text>Amanda.</Text>
    </View>
  );
}
