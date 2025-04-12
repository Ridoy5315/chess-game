import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import CalendarScreen from "@/app/components/CalendarScreen";
import Header from "@/app/components/Header";
export default function Page() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />, 
          headerShadowVisible: false,
        }}
      />
      <View style={{ flex: 1 }}>
        <SignedIn>
          <CalendarScreen />
        </SignedIn>
        <SignedOut>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </SignedOut>
      </View>
    </>
  );
}