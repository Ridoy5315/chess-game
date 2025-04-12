import { Text, View } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20, // Adds space between buttons
      }}
    >
      <Link href="/(auth)/sign-in" asChild>
        <Text style={{ fontSize: 18, color: "blue" }}>Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-up" asChild>
        <Text style={{ fontSize: 18, color: "blue" }}>Sign Up</Text>
      </Link>
    </View>
  );
}

export default Index;
