import { PressableAndroidRippleConfig } from "react-native"

const android_ripple = {
    RIPPLE_BTNr: ({ }): PressableAndroidRippleConfig => { return { color: 'black', borderless: true, foreground: true } }
}


const _COL = {
    "TRANSPARENT": "transparent",
    "BLACK005": "rgba(0,0,0,.05)",
    "BLACK01": "rgba(0,0,0,.1)",
    "BLACK02": "rgba(0,0,0,.2)",
    "BLACK03": "rgba(0,0,0,.3)",
    "BLACK04": "rgba(0,0,0,.4)",
    "BLACK05": "rgba(0,0,0,.5)",
    "BLACK06": "rgba(0,0,0,.6)",
    "BLACK07": "rgba(0,0,0,.7)",
    "BLACK08": "rgba(0,0,0,.8)",
    "BLACK09": "rgba(0,0,0,.9)",
    "WHITE01": "rgba(256,256,256,0.1)",
    "WHITE02": "rgba(256,256,256,0.2)",
    "WHITE03": "rgba(256,256,256,0.3)",
    "WHITE04": "rgba(256,256,256,0.4)",
    "WHITE05": "rgba(256,256,256,0.5)",
    "WHITE06": "rgba(256,256,256,0.6)",
    "WHITE07": "rgba(256,256,256,0.7)",
    "WHITE08": "rgba(256,256,256,0.8)",
    "WHITE09": "rgba(256,256,256,0.9)",
};

export { android_ripple, _COL }