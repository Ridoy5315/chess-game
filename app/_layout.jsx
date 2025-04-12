import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

const RootLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack
        screenOptions={{
          headerTitle: "", // Global fallback
          headerLeft: () => null,
          headerLeft: () => null,
          headerLeftContainerStyle: { display: "none" },
          headerTitleContainerStyle: { left: 0, right: 0 },
          headerStyle: { paddingLeft: 0, paddingRight: 0 },
          
        }}
      />
    </ClerkProvider>
  );
};

export default RootLayout;
