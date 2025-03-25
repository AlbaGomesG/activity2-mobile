import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giovanna Alba Gomes</Text>
      <Image 
        style={styles.image} 
        source={require('./public/flower.jpg')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 30
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
  }
});
