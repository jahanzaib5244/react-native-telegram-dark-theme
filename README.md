# react-native-telegram-dark-theme

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/musafir-49f4d.appspot.com/o/ScreenRecorderProject2.gif?alt=media&token=a729c77c-0ef8-4571-adf4-8f77109df3bf&_gl=1*1798e6e*_ga*MTcxMDI1NjE4My4xNjk3MTA2NTYz*_ga_CW55HF8NVT*MTY5NzEwNjU2NC4xLjEuMTY5NzEwNjk0Ni40MS4wLjA." alt="Showcase iOS" width="200" height="433">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

##

> **Note**: Make sure you have install [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation), [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/), [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/docs/getting-started/installation/) instructions till step, before proceeding.

## Installation

```sh
yarn add react-native-telegram-dark-theme
```

```sh
npm install react-native-telegram-dark-theme
```

## Usage

#### `ThemeProvider`

Wrap the `App.js` or `App.tsx` with `ThemeProvider` and provides the dafult colors.

```javascript
import {ThemeProvider} from 'react-native-telegram-dark-theme';

const lighhtColors = {
  background: 'white',
  text: 'black',
};

const darkColors = {
  background: 'black',
  text: 'white',
};

function App() {
  return (
    <ThemeProvider lightColors={lightColors} darkColors={darkColors}>
      {/* ... */}
    </ThemeProvider>
  );
}
```

### High level APIs

#### `useTheme`

Returns an object. `colors` .

```javascript
import {useTheme} from 'react-native-telegram-dark-theme';

function Component() {
  const {colors} = useTheme();
  return <View style={{backgroundColor: colors?.black}} />;
}
```

#### `ThemeButton`

Toggle the theme.if you want to use your own button pass a prop to `ThemeButton` `button`

```javascript
import {ThemeButton} from 'react-native-telegram-dark-theme';

function Component() {
  const {colors, colorScheme} = useTheme();
  const button = (
    <Text>{colorScheme === 'dark' ? 'switch to light' : 'switch to dark'}</Text>
  );

  return (
    <View style={{backgroundColor: colors?.black}}>
      <ThemeButton button={button} />
    </View>
  );
}
```

## Requirements

### iOS

- Xcode 11
- React Native 0.70.x or higher
- iOS 13 to see it in action

### Android

- Android 10 or Android Auto to see it in action
