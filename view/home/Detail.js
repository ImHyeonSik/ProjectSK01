import { View, Text, Image } from "react-native";

const Detail = ({route}) => {
  const {title, url} = route.params;

  return <View style={{flex: 1, borderWidth:1}}>
    <Text>{title}</Text>
    <Image source={{ uri: url }} style={{ width: '100%', height: 100 }} />
  </View>
}
export default Detail;
