import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

const RootLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack
        screenOptions={{
          header: () => null,
          
        }}
      />
    </ClerkProvider>
  );
};

export default RootLayout;
