import { ComponentTheme, chrome, firefox } from "@devtools-ds/themes";

const ObjectTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      labelColor: firefox.light.blue04,
      textColor: firefox.light.gray04,
      keyColor: firefox.light.blue04,
      valueColor: firefox.light.pink01,
      stringColor: firefox.light.pink01,
      regexColor: firefox.light.blue04,
      errorColor: firefox.light.errorText,
      booleanColor: firefox.light.green02,
      numberColor: firefox.light.green02,
      undefinedColor: firefox.light.gray04,
      nullColor: firefox.light.gray04,
      prototypeColor: firefox.light.gray04,
      functionColor: firefox.light.blue04,
      functionDecoratorColor: firefox.light.blue04,
    },
    dark: {
      labelColor: firefox.dark.blue02,
      textColor: firefox.dark.gray01,
      keyColor: firefox.dark.blue02,
      valueColor: firefox.dark.pink02,
      stringColor: firefox.dark.pink02,
      regexColor: firefox.dark.blue02,
      errorColor: firefox.dark.errorText,
      booleanColor: firefox.dark.green02,
      numberColor: firefox.dark.green02,
      undefinedColor: firefox.dark.gray01,
      nullColor: firefox.dark.gray01,
      prototypeColor: firefox.dark.gray01,
      functionColor: firefox.dark.blue02,
      functionDecoratorColor: firefox.dark.blue02,
    },
  },
  chrome: {
    light: {
      labelColor: chrome.light.gray06,
      textColor: chrome.light.gray05,
      keyColor: chrome.light.purple03,
      valueColor: chrome.light.gray05,
      stringColor: chrome.light.red01,
      regexColor: chrome.light.red01,
      errorColor: chrome.light.errorText,
      booleanColor: chrome.light.blue04,
      numberColor: chrome.light.blue05,
      undefinedColor: chrome.light.gray06,
      nullColor: chrome.light.gray06,
      prototypeColor: chrome.light.purple02,
      functionColor: chrome.light.textColor,
      functionDecoratorColor: chrome.light.blue04,
    },
    dark: {
      labelColor: chrome.dark.gray01,
      textColor: chrome.dark.textColor,
      keyColor: chrome.dark.pink01,
      valueColor: chrome.dark.gray01,
      stringColor: chrome.dark.orange02,
      regexColor: chrome.dark.orange02,
      errorColor: chrome.dark.errorText,
      booleanColor: chrome.dark.purple02,
      numberColor: chrome.dark.purple02,
      undefinedColor: chrome.dark.gray03,
      nullColor: chrome.dark.gray03,
      prototypeColor: chrome.dark.pink02,
      functionColor: chrome.dark.textColor,
      functionDecoratorColor: chrome.dark.purple01,
    },
  },
});

export default ObjectTheme;