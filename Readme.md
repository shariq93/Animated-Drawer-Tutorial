## Animated Drawer
Create an animated side drawer in react native with out using any third party library and being on Native Thread

## Sample Code

```javascript
import {Animated, Easing, Dimensions} from 'react-native';
```
```javascript
   /** this will hold the value for our animation */
  const $translate = useRef(new Animated.Value(0)).current

 /** this will help us to keep track of drawer open and close state */
  let [toggleHeader, setToggleHeader] = useState(false)
```
## Managing interpolation
Interpolate is a method in the React Native Animated library that allows you to map one range of values to another. It's commonly used to calculate values between two ranges that are used to drive animations.

```javascript
/**
   * This is to manage size of main container of the screen 
   */
  const $scale = $translate.interpolate({
    inputRange: [0, width / 3, width / 2.3],
    outputRange: [1, .9, 0.8],
    extrapolate: 'clamp'
  })

  /**
  * to translate the main view to right in X direction 
  */
  const $translateHeader = $translate.interpolate({
    inputRange: [0, width / 3, width / 2.3],
    outputRange: [0, -50, -100],
    extrapolate: 'clamp'
  })

  /**
    * this value is to correct screen possition 
    */
  const $translateY = $translate.interpolate({
    inputRange: [0, width / 3, width / 2.3],
    outputRange: [0, -1, -2],
    extrapolate: 'clamp'
  })
```
##### If you find this help full please leave a feedback and star this project.
##### Follow me on  [LinkedIn](http://handlebarsjs.com/), to see more content like this

### Thank you!