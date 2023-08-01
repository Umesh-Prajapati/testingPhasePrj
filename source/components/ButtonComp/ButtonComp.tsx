import { TouchableOpacity, Pressable, Platform, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { ReactNode } from 'react'
import { _COL, android_ripple } from './Constatnts';
import { ButtonType } from './BtnType';

const ButtonComp = ({ cSty, mSty,
  children,
  btnType = 'pressable', androidRipple = { borderless: true, color: _COL.BLACK01, foreground: true },
  disabled, hitSlop, onP, text, textSty }: ButtonType) => {

  const touchable = (child: ReactNode) => (<TouchableOpacity
    onPress={onP}
    disabled={onP ? false : disabled ? disabled : true}
    style={{
      backgroundColor: cSty?.backgroundColor || undefined,
      borderRadius: cSty?.borderRadius || undefined,
      overflow: cSty?.overflow || undefined
    }}>
    {child}</TouchableOpacity>);

  const pressable = (child: ReactNode) => <Pressable
    onPress={onP}
    disabled={disabled ? disabled : onP ? false : true}
    android_ripple={android_ripple.RIPPLE_BTNr(androidRipple)}
    hitSlop={hitSlop || 2}
    pressRetentionOffset={15}
    style={({ pressed }) => {
      return [{
        backgroundColor: Platform.OS === "ios" ? (pressed ? cSty?.backgroundColor || _COL.BLACK005 : cSty?.backgroundColor || _COL.TRANSPARENT) : cSty?.backgroundColor || _COL.TRANSPARENT,
        opacity: disabled ? 0.3 : Platform.OS === "ios" ? pressed ? .75 : 1 : 1,
        borderRadius: cSty?.borderRadius,
        overflow: 'hidden',
        width: cSty?.width
      }];
    }}>{child}</Pressable>;

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