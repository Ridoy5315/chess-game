import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import Header from "@/app/components/Header";
import CalendarScreen from "@/app/components/CalendarScreen";

export default function Page() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />, // Use our custom header
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