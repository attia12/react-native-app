import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 p-4 text-white bg-primary rounded"
      >
        Go to OnBoarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 p-4 text-white bg-primary rounded"
      >
        Go to SignIn
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 p-4 text-white bg-primary rounded"
      >
        Go to SignUp
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 p-4 text-white bg-primary rounded"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claudemax" },
        }}
        className="mt-4 p-4 text-white bg-primary rounded"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
