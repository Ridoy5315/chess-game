import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(home)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="sign-in"  />
      <Stack.Screen name="sign-up"  />
    </Stack>
  );
}

export default AuthLayout;