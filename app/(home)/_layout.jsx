import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function HomeLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        // These options apply to ALL screens in (home) group
        headerTitle: '', // Remove default (home) text
        headerBackTitleVisible: false, // Hide back button text
      }}
    />
  );
}
