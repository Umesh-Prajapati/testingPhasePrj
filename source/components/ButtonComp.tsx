import { TouchableOpacity, Pressable, Platform, Animated, TouchableWithoutFeedback, TextStyle, ViewStyle, PressableAndroidRippleConfig } from 'react-native'
import React, { ReactNode } from 'react'

export type ButtonType = {
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

const ButtonComp = ({ cSty, mSty,
  children,
  btnType = 'pressable', androidRipple = { borderless: true, color: `rgba(0,0,0,.1)`, foreground: true },
  disabled, hitSlop, onP, text, textSty }: ButtonType) => {

  const pressable = (child: ReactNode) => <Pressable
    onPress={onP}
    disabled={disabled ? disabled : onP ? false : true}
    android_ripple={androidRipple}
    hitSlop={hitSlop || 2}
    pressRetentionOffset={15}
    style={({ pressed }) => {
      return [{
        backgroundColor: Platform.OS === "ios" ? (pressed ? cSty?.backgroundColor || `rgba(0,0,0,.05)` : cSty?.backgroundColor || 'transparent') : cSty?.backgroundColor || 'transparent',
        opacity: disabled ? 0.3 : Platform.OS === "ios" ? pressed ? .75 : 1 : 1,
        borderRadius: cSty?.borderRadius,
        overflow: 'hidden',
        width: cSty?.width
      }];
    }}>{child}</Pressable>;

  const touchable = (child: ReactNode) => (<TouchableOpacity
    onPress={onP}
    disabled={onP ? false : disabled ? disabled : true}
    style={{
      backgroundColor: cSty?.backgroundColor || undefined,
      borderRadius: cSty?.borderRadius || undefined,
      overflow: cSty?.overflow || undefined
    }}>
    {child}</TouchableOpacity>);

  const withoutTouchable = (child: ReactNode) => <TouchableWithoutFeedback
    onPress={onP}
    disabled={onP ? false : disabled ? disabled : true}
    style={{
      backgroundColor: cSty?.backgroundColor || undefined,
      borderRadius: cSty?.borderRadius || undefined,
      overflow: cSty?.overflow || undefined
    }}>

  </TouchableWithoutFeedback>

  function getButton(child: ReactNode) {
    return <Animated.View style={mSty}>
      {btnType == 'pressable' && pressable(<Animated.View style={cSty}>{child ? child : null}</Animated.View>)}
      {btnType == 'touchable' && touchable(<Animated.View style={cSty}>{child ? child : null}</Animated.View>)}
      {btnType == 'withoutTouchable' && withoutTouchable(<Animated.View style={cSty}>{child ? child : null}</Animated.View>)}
    </Animated.View>;
  }

  if (children) return getButton(children);
  if (text) return getButton(<Animated.Text style={textSty}>{text}</Animated.Text>);

  return <></>;
}

export default ButtonComp