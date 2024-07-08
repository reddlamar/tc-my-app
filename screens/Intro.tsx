import { StyleSheet, View, Image, Text } from "react-native";
import { useRef, useState } from "react";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import PrimaryButton from "@/components/PrimaryButton";
import Circle from "@/components/Circle";
import { appInfo } from "@/database/AppInfo";
import { AppInfo } from "@/types/AppInfoType";
import { ButtonProps, ProgressCirclesProps } from "@/types/PropsType";
import ButtonLink from "@/components/ButtonLink";

const SkipButton: React.FC<ButtonProps> = ({
  screenIndex,
  screens,
  updateAppInfoScreen,
  updateAppInfoScreens,
}: ButtonProps) => {
  const handleOnPressSkip = () => {
    screenIndex.current = 4;
    const updatedScreens = screens.map((a: AppInfo, i: number) => {
      if (i < 4) {
        a.active = false;
        return a;
      }
      a.active = true;
      return a;
    });
    updateAppInfoScreen(updatedScreens[4]);
    updateAppInfoScreens([...updatedScreens]);
  };

  return (
    <PrimaryButton style={styles.skipButton} onPress={handleOnPressSkip}>
      <Text style={styles.skipButtonText}>SKIP</Text>
    </PrimaryButton>
  );
};

const ProgressCircles: React.FC<ProgressCirclesProps> = ({
  appInfoScreens,
}: ProgressCirclesProps) => {
  const size = 8;
  const activeColor = "#003096";
  const inactiveColor = "#D9D9D9";

  return (
    <>
      {appInfoScreens.map((a: any) => (
        <Circle
          key={a.id}
          size={size}
          color={a.active ? activeColor : inactiveColor}
        />
      ))}
    </>
  );
};

const RegisterButtons: React.FC<ButtonProps> = ({
  screenIndex,
  screens,
  updateAppInfoScreen,
  updateAppInfoScreens,
}: ButtonProps) => {
  const handleOnPressContinue = () => {
    screenIndex.current += 1;
    const updatedScreens = updateScreensActiveValue();
    updateAppInfoScreens([...updatedScreens]);
  };

  const updateScreensActiveValue = (): AppInfo[] => {
    return screens.map((s: AppInfo, i: number) => {
      if (screenIndex.current === i) {
        s.active = true;
        updateAppInfoScreen(s);
      } else {
        s.active = false;
      }
      return s;
    });
  };

  return (
    <View style={styles.buttonView}>
      {screenIndex.current < 4 ? (
        <PrimaryButton onPress={handleOnPressContinue}>
          <Text style={styles.buttonText}>{"CONTINUE"}</Text>
        </PrimaryButton>
      ) : (
        <>
          <ButtonLink href="/sign-in" style={styles.registerButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </ButtonLink>
          <ButtonLink
            href="/sign-up"
            style={[styles.registerButton, styles.signUpButton]}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </ButtonLink>
        </>
      )}
    </View>
  );
};

const IntroScreen = () => {
  const [screens, setScreens] = useState(appInfo);
  const [screen, setScreen] = useState(appInfo[0]);
  const index = useRef(0);

  return (
    <View style={styles.view}>
      <View style={styles.titleView}>
        {index.current < 4 && (
          <SkipButton
            screenIndex={index}
            screens={screens}
            updateAppInfoScreen={setScreen}
            updateAppInfoScreens={setScreens}
          />
        )}
        <View style={styles.imageView}>
          <Image source={screen.image} style={styles.image} />
        </View>
        <ThemedText
          style={[styles.themedTitle, styles.titleColor]}
          lightColor="#fff"
          darkColor="#000"
          type="title"
        >
          {screen.title}
        </ThemedText>
        <ThemedText
          style={[styles.themedSubTitle, styles.titleColor]}
          lightColor="#fff"
          darkColor="#000"
          type="subtitle"
        >
          {screen.subTitle}
        </ThemedText>
        <View style={styles.circleView}>
          {index.current < 4 && <ProgressCircles appInfoScreens={screens} />}
        </View>
      </View>
      <RegisterButtons
        screenIndex={index}
        screens={screens}
        updateAppInfoScreen={setScreen}
        updateAppInfoScreens={setScreens}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center", rowGap: 12 },
  skipButtonText: {
    color: "#000",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 15.12,
    textAlign: "center",
  },
  titleView: { rowGap: 15, flex: 3 },
  skipButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 49,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 9,
    marginTop: 6,
  },
  titleColor: { color: Colors.light.text },
  imageView: {
    marginHorizontal: 12,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  themedTitle: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 27.72,
    textAlign: "center",
  },
  themedSubTitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20.16,
    textAlign: "center",
  },
  circleView: {
    flexDirection: "row",
    columnGap: 3,
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    columnGap: 12,
  },
  registerButton: {
    width: 171,
    height: 54,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  signUpButton: {
    backgroundColor: "#fff",
    borderColor: Colors.light.tint,
    borderWidth: 1,
  },
  signUpButtonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25.2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25.2,
    textAlign: "center",
    color: "#fff",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default IntroScreen;
