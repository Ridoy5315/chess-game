import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/app/components/SignOutButton";
import CalendarScreen from "@/app/components/CalendarScreen";

export default function Page() {
  const { user } = useUser();

  return (
    <>
      <Stack.Screen
        options={{
          header: () => null, // This eliminates the entire header
        }}
      />
      <View style={{ flex: 1 }}>
        {/* <Stack.Screen 
        options={{ 
          title: "March 2025", // Custom title
          headerTitleAlign: "center", // Center the text
        }} 
      /> */}
        <SignedIn>
          <CalendarScreen />
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <SignOutButton />
        </SignedIn>
        <Text>Hello</Text>
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
