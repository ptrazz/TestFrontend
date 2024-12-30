import { Image, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff' }} // Set header background color to white
      backgroundColor="#ffffff" 
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CARTRIDGE KINGS</ThemedText>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#888" // Optional: Change placeholder text color
        />
        <TouchableOpacity style={styles.cartContainer}>
          <ThemedText style={styles.cartText}>Cart</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 50}}>
        <Image source={require('@/assets/images/color.jpg')} />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">FEATURED PRODUCTS</ThemedText>
      </ThemedView>
    

      {/* New section for images */}
      <ThemedView style={styles.imageContainer}>
        <Image source={require('@/assets/images/hp.jpeg')} style={styles.image} />
        <Image source={require('@/assets/images/canon.jpg')} style={styles.image} />
        <Image source={require('@/assets/images/hp.jpeg')} style={styles.image} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1, // Allow the search bar to take up available space
  },
  cartContainer: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 8, // Add some space between the search bar and cart
  },
  cartText: {
    color: '#000', // Change the text color if needed
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  image: {
    width: '30%', // Each image takes up 30% of the container width
    height: 100, // Set
  }})