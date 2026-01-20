import { feed, stories } from '@/constants/insta-data';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { BookmarkIcon, Heart, MessageCircle, Plus, Send } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Plus size={40} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push('/explore');
          }}>
          <Image source={require('@/assets/images/logo.svg')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push('/explore');
          }}>
          <Heart size={40} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>

      </View>
      <View style={styles.storiesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
          contentContainerStyle={styles.storiesContent}>
          {/* Seu Story - com ícone de adicionar */}
          <TouchableOpacity style={styles.storiesItem}>
            <View style={styles.storiesItemImageWrapper}>
              <View style={styles.storiesItemImageContainer}>
                <Image source={require('@/assets/images/storie.jpeg')} style={styles.storiesItemImage} />
              </View>
              <View style={styles.addStoryIconContainer}>
                <View style={styles.addStoryIconCircle}>
                  <Plus size={16} color="#000000" strokeWidth={3} />
                </View>
              </View>
            </View>
            <Text style={styles.storiesItemUsername} numberOfLines={1} ellipsizeMode="tail">
              Seu story
            </Text>
          </TouchableOpacity>
          {/* Outros stories */}
          {stories.map((story) => (
            <TouchableOpacity key={story.id} style={styles.storiesItem}>
              <View style={styles.storiesItemImageContainer}>
                <Image source={story.image} style={styles.storiesItemImage} />
              </View>
              <Text style={styles.storiesItemUsername} numberOfLines={1} ellipsizeMode="tail">
                {story.username}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.feedScrollView}
        contentContainerStyle={styles.feedContent}>
        {feed.map((feedItem) => (
          <View style={styles.feedItem} key={feedItem.id}>
            <View style={styles.feedItemImageContainer}>
              <Image source={feedItem.image} style={styles.feedItemImage} />
            </View>
            <View style={styles.feedItemActions}>
              <View style={styles.feedItemActionsLeft}>
                <TouchableOpacity>
                  <Heart size={20} color="#FFFFFF" strokeWidth={2} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MessageCircle size={20} color="#FFFFFF" strokeWidth={2} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Send size={20} color="#FFFFFF" strokeWidth={2} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <BookmarkIcon size={20} color="#FFFFFF" strokeWidth={2} />
              </TouchableOpacity>
            </View>
            <View style={styles.feedItemInfo}>
              <Text style={styles.feedItemUsername} numberOfLines={1}>
                {feedItem.username}
              </Text>
              <Text style={styles.feedItemTitle} numberOfLines={1}>
                {feedItem.title}
              </Text>
              <Text style={styles.feedItemDescription} numberOfLines={2}>
                {feedItem.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 56,
    zIndex: 100,
    elevation: 100,
    backgroundColor: '#000000',
  },
  storiesWrapper: {
    zIndex: 50,
    elevation: 50,
    backgroundColor: '#000000',
  },
  storiesContainer: {
    paddingVertical: 12,

  },
  storiesContent: {
    paddingHorizontal: 16,
    gap: 20,
    alignItems: 'flex-start',
  },
  storiesItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 80,
    paddingBottom: 0,
  },
  storiesItemImageWrapper: {
    position: 'relative',
    width: 80,
    height: 80,
    marginBottom: 4,
  },
  storiesItemImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  storiesItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  addStoryIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    elevation: 10,
  },
  addStoryIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  storiesItemUsername: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 4,
    width: 80,
    includeFontPadding: false,
    flexShrink: 1,
    lineHeight: 16,
  },
  feedScrollView: {
    flex: 1,
    zIndex: 1,
    elevation: 1,
  },
  feedContent: {
    paddingBottom: 20,

  },
  feedItem: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#000000',
  },
  feedItemImageContainer: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
  },
  feedItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  feedItemActionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  feedItemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  feedItemInfo: {
    padding: 12,
    gap: 4,
  },
  feedItemUsername: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  feedItemTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  feedItemDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  logo: {
    marginTop: 10,
    height: 100,
    width: 160,
    resizeMode: 'contain',
  },
});
