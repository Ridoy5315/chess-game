import { Text, View } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Chess History</Text>
        <View style={styles.buttonContainer}>
          <Link href="/(auth)/sign-in" asChild>
            <Text style={styles.buttonPrimary}>Sign In</Text>
          </Link>
          <Link href="/(auth)/sign-up" asChild>
            <Text style={styles.buttonSecondary}>Create Account</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  buttonPrimary: {
    backgroundColor: '#5f9ea0',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonSecondary: {
    backgroundColor: 'white',
    color: '#5f9ea0',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#5f9ea0',
    textAlign: 'center',
    overflow: 'hidden',
  },
};

export default Index;