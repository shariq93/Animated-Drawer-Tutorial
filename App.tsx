
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MenuItem } from './MenuItem';
const { width, height } = Dimensions.get('window')
import { Feather } from '@expo/vector-icons';
export default function App() {

  // Pull in navigation via hook

  const MENU_ITEMS = [
    {
      title: "Schedule",
      name: 'Home',
      navigateTo: 'Home',
      icon: require('./assets/images/calender.png'),
      onClick: undefined
    },

    {
      title: "Users",
      name: 'Customers',
      navigateTo: 'Customers',
      icon: require('./assets/images/Customers.png'),
      onClick: () => {


      }
    },

    {
      title: "Projects",
      name: 'Services',
      navigateTo: 'Services',
      icon: require('./assets/images/services.png'),
      onClick: () => {



      }
    },
    {
      title: "Tasks",
      name: 'Packages',
      navigateTo: 'Packages',
      icon: require('./assets/images/Packages.png'),
      onClick: () => { }
    },
    {
      title: "Bin",
      name: 'Products',
      navigateTo: 'Products',
      icon: require('./assets/images/Products.png'),
      onClick: () => {

      }
    },
  ]

  /** this will hold the value for our animation */
  const $translate = useRef(new Animated.Value(0)).current

  /** this will help us to keep track of drawer open and close state */
  let [toggleHeader, setToggleHeader] = useState(false)

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

  const openSideBar = () => {
    Animated.timing($translate, {
      toValue: width / 1.8,
      easing: Easing.elastic(.9),
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const closeSideBar = () => {
    Animated.timing($translate, {
      toValue: 0,
      easing: Easing.elastic(.5),
      duration: 300,
      useNativeDriver: true,
    }).start()
  }
  return (
    <View style={styles.container}>
      <View style={[{ width, height, backgroundColor: "#2980b9" }]}>
        <View style={{ marginVertical: 70, flex: 1 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20, }}
              source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}></Image>
            <Text
              style={{ marginLeft: 10, color: '#fff', }}

            >
              John Doe
            </Text>
          </View>
          <View
            style={{ height: 1, backgroundColor: '#ccc', marginVertical: 30, maxWidth: 190, marginLeft: 15 }}
          />
          <View>
            {MENU_ITEMS.map((item) => {
              return <MenuItem
                key={item.name}
                selected={false}
                onPress={() => {
                  closeSideBar()
                  setToggleHeader(false)
                }
                }
                icon={item.icon}
                title={item.title}
              />
            })}
          </View>

        </View>

      </View>
      <Animated.View style={[{ width, height, backgroundColor: "#fff", position: 'absolute', transform: [{ translateX: $translate }, { scale: $scale }, { translateY: $translateY }], borderRadius: toggleHeader ? 30 : 0, overflow: 'hidden' }]}>
        <Animated.View
          style={{
            backgroundColor: "#2980b9", height: 90, width, alignItems: 'flex-end', flexDirection: 'row',
            paddingHorizontal: 20, justifyContent: 'space-between', transform: [{ translateY: $translateHeader }]
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Animated.View style={{ transform: [{ translateY: Animated.multiply($translateHeader, -1) }] }}>
              <TouchableOpacity onPress={() => {
                if (!toggleHeader) {
                  openSideBar()
                  setToggleHeader(true)
                }
                else {
                  closeSideBar()
                  setToggleHeader(false)
                }
              }}>
                <Feather name="align-left" size={24} style={{ marginBottom: 10, color: toggleHeader ? "#2980b9" : "#fff" }} />
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View>
            <Image
              style={{ width: 25, height: 25, borderRadius: 20, marginBottom: 15, }}
              source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}></Image>
          </View>

        </Animated.View>

        <View style={{ flex: 1 }}>
          {/**
           * Your Navigator will go here
           */}
          {/* <MainNavigationNavigator></MainNavigationNavigator> */}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
