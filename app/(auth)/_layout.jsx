import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function AuthLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(home)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ title: "Back" }} />
      <Stack.Screen name="sign-up" options={{ title: "Back" }} />
    </Stack>
  );
}