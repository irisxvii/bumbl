import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall = () => {
  return (
    <View style={[styles.androidSmall1, styles.dummyBg]}>
      <View style={[styles.dummy, styles.dummyBg]} />
      <View style={[styles.basu, styles.basuLayout]}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.glassmorphism, styles.rectangleLayout]}>
          <View style={[styles.rectangle, styles.rectangleBorder]} />
        </View>
        <Text style={styles.bhaskaran20}>BHASKARAN, 20</Text>
        <Text style={[styles.uiuxDesigner, styles.frappeDevClr]}>
          UI/UX Designer
        </Text>
      </View>
      <View style={[styles.basu, styles.basuLayout]}>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.glassmorphism1, styles.rectangle1Layout]}>
          <View style={[styles.rectangle1, styles.rectangle1Layout]} />
        </View>
        <Text style={[styles.emily21, styles.emily21Typo]}>EMILY, 21</Text>
        <Text style={[styles.softwareDev, styles.emily21Typo]}>
          Software Dev
        </Text>
      </View>
      <View style={[styles.screenshotFrom2024022421Parent, styles.basuLayout]}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/screenshot-from-20240224-212704-1.png")}
        />
        <Text style={[styles.benjamin29, styles.frappeDevTypo]}>
          BENJAMIN, 29
        </Text>
        <Text style={[styles.frappeDev, styles.frappeDevTypo]}>Frappe Dev</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dummyBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  basuLayout: {
    height: 421,
    width: 316,
    left: 22,
    position: "absolute",
  },
  rectangleLayout: {
    height: 57,
    width: 176,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 3,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  frappeDevClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi_3,
  },
  rectangle1Layout: {
    width: 113,
    height: 57,
    position: "absolute",
  },
  emily21Typo: {
    left: 29,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  frappeDevTypo: {
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  dummy: {
    top: 270,
    left: 183,
    width: 100,
    height: 100,
    position: "absolute",
  },
  image1Icon: {
    left: 0,
    top: 0,
    height: 421,
    width: 316,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangle: {
    height: 57,
    width: 176,
    position: "absolute",
  },
  glassmorphism: {
    left: 18,
    top: 326,
  },
  bhaskaran20: {
    top: 335,
    width: 164,
    height: 48,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 24,
    color: Color.colorGhostwhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  uiuxDesigner: {
    width: 93,
    height: 15,
    top: 359,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 24,
    position: "absolute",
  },
  basu: {
    top: 109,
    borderRadius: Border.br_xl,
    height: 421,
    width: 316,
    left: 22,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  image2Icon: {
    top: -55,
    left: -4,
    width: 324,
    height: 532,
    position: "absolute",
  },
  rectangle1: {
    borderWidth: 3,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  glassmorphism1: {
    left: 17,
    top: 326,
  },
  emily21: {
    top: 336,
    left: 29,
    fontSize: FontSize.size_xl,
  },
  softwareDev: {
    fontSize: FontSize.size_smi_3,
    left: 29,
    top: 359,
  },
  benjamin29: {
    top: 338,
    color: Color.colorGhostwhite,
    left: 23,
    fontSize: FontSize.size_xl,
  },
  frappeDev: {
    top: 362,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi_3,
  },
  screenshotFrom2024022421Parent: {
    top: 110,
    height: 421,
    width: 316,
    left: 22,
  },
  androidSmall1: {
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default AndroidSmall;
