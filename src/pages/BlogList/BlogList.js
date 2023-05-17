import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import BlogListCard from '../../components/BlogListCard';
import styles from './BlogList.style';
import ContentContext from '../../context';
import colors from '../../styles/color';

const BlogList = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {content, setContent} = useContext(ContentContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        'https://www.lenasoftware.com/api/v1/en/maestro/1?page=' +
          page +
          '&count=10',
      );
      setData(data);
      setLoading(false);
      setPageCount(Math.ceil(data.totalCount / 10));
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}
        size="large"
        color={colors.orange}
      />
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleBlogSelect = () => {
    navigation.navigate('BlogDetailScreen', {});
  };

  const renderBlog = ({item}) => (
    <BlogListCard
      list={item}
      onSelect={() => handleBlogSelect(setContent(item.content))}
    />
  );

  function nextPage() {
    if (page < pageCount) {
      setPage(page + 1);
    }
  }

  function backPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.result}
        renderItem={renderBlog}
        keyExtractor={data.postId}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        ListFooterComponent={
          <View>
            <View>
              <Text style={styles.page}>Page- {page}</Text>
            </View>
            <View style={styles.button_container}>
              <TouchableOpacity style={styles.button} onPress={backPage}>
                <Text style={styles.button_title}>Geri</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={nextPage}>
                <Text style={styles.button_title}>İleri</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default BlogList;
