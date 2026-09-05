import { router } from "expo-router";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { setItems } from "../../utils/storage";

export default function OnBoardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboarding
        onDone={() => {
          setItems("onboardingCompleted", true);
          router.push("/");
          console.log("done");
        }}
        onSkip={() => console.log("skip")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/productivity.json")}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/animation.json")}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/lottie.json")}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </SafeAreaView>
  );
}
