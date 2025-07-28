import { Text } from "@/components/ui/text";
import * as Application from "expo-application";
import { Button, View } from "react-native";
import { ReactNativeLegal } from "react-native-legal";

function launchNotice() {
  ReactNativeLegal.launchLicenseListScreen("OSS Notice");
}

export default function About() {
  return (
    <View>
      <Button onPress={launchNotice} title="Open source licenses" />
      <Text>{`App Version: ${Application.nativeApplicationVersion}`}</Text>
    </View>
  );
}
