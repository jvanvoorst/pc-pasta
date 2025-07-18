import { Button, View } from "react-native";
import { ReactNativeLegal } from "react-native-legal";

function launchNotice() {
  ReactNativeLegal.launchLicenseListScreen("OSS Notice");
}

export default function About() {
  return (
    <View>
      <Button onPress={launchNotice} title="Open source licenses" />
    </View>
  );
}
