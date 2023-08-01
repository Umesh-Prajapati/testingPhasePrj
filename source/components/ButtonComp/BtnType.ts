import { PressableAndroidRippleConfig, TextStyle, ViewStyle } from "react-native";

type ButtonType = {
    children?: React.ReactNode;
    text?: string | undefined;
    textSty?: TextStyle;
    onP?: () => void;
    disabled?: boolean;
    cSty?: ViewStyle;
    mSty?: ViewStyle;
    animated?: boolean;
    hitSlop?: number;
    btnType?: 'pressable' | 'touchable' | 'withoutTouchable';
    androidRipple?: PressableAndroidRippleConfig;
};

type rippleType = {

}


export type { ButtonType }