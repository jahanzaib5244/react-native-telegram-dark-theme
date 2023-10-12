import { useCallback, useContext } from 'react';
import { ColorSchemesContext, corners } from '../constants';
import { dist, makeImageFromView } from '@shopify/react-native-skia';
import { withTiming } from 'react-native-reanimated';
const wait = async ms => new Promise(resolve => setTimeout(() => resolve('solved'), ms));
export const useTheme = () => {
  const ctx = useContext(ColorSchemesContext);
  if (ctx === null) {
    throw new Error('No ColorScheme context context found');
  }
  const {
    colorScheme,
    dispatch,
    circle,
    ref,
    transition
  } = ctx;
  const toggle = useCallback(async (x, y) => {
    try {
      const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
      dispatch({
        ...ctx,
        active: true,
        colorScheme,
        overlay1: null,
        overlay2: null
      });
      const r = Math.max(...corners.map(corner => dist(corner, {
        x,
        y
      })));
      circle.value = {
        x,
        y,
        r
      };
      // const screenShot1 = await captureRef(ref);
      // const overlay1 = useImage('https://picsum.photos/200/300');
      const overlay1 = await makeImageFromView(ref);
      // 2. display it
      dispatch({
        ...ctx,
        active: true,
        colorScheme,
        overlay1,
        overlay2: null
      });
      // 3. switch to dark mode
      await wait(10);
      dispatch({
        ...ctx,
        active: true,
        colorScheme: newColorScheme,
        overlay1,
        overlay2: null
      });
      // 4. wait for the dark mode to render
      await wait(16);
      // 5. take screenshot
      // const screenShot2 = await captureRef(ref);
      // const overlay2 = useImage('https://picsum.photos/200/300');
      const overlay2 = await makeImageFromView(ref);
      dispatch({
        ...ctx,
        active: true,
        colorScheme: newColorScheme,
        overlay1,
        overlay2
      });
      // 6. transition
      transition.value = 0;
      transition.value = withTiming(1, {
        duration: 650
      });
      await wait(650);
      dispatch({
        ...ctx,
        active: false,
        colorScheme: newColorScheme,
        overlay1: null,
        overlay2: null
      });
    } catch (error) {
      console.log(error);
    }
  }, [colorScheme, dispatch]);
  return {
    colorScheme,
    toggle,
    colors: ctx.colors,
    active: ctx.active
  };
};
//# sourceMappingURL=useTheme.js.map