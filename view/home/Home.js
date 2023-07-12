import { FlatList, SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getApiSK } from "../../event/Connect";

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [endData, setEndData] = useState(10);
  const [data, setData] = useState(
    [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      },
      {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
      },
      {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
      },
      {
        albumId: 1,
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
      },]
  );

  useEffect(() => {
    read();
  },[])


  const read = async () => {
    let dummyData = [];
    const result = await getApiSK(
      { params: {
        // param1: 'value1',
        // param2: 'value2',
          _start: 0,
          _limit: endData
      }}
    );
    const transResult = result.data;
    // const transResult = JSON.stringify(result.data);
    // const transResultArray = JSON.parse(transResult);
    setData(transResult);
  }

  const onEndReached = () => {
    console.log('ffff');
    const lp = endData + 10;

    setEndData(lp);
    read();
  }

  const Items = ({ title, url }) => {
    return <Pressable style={{flex:1}}
                      onPress={() => navigation.navigate('Detail', {title, url})}
    >
      <View style={{flex: 1, borderWidth:1}}>
        <Text>{title}</Text>
        <Image source={{ uri: url }} style={{ width: '100%', height: 100 }} />
      </View>
    </Pressable>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={data}
        style={{flex: 1}}
        onEndReached={onEndReached}
        renderItem={({ item }) => {
          return (
            <Items title={item.title} url={item.url} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
