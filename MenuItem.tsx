import * as React from "react"
import { StyleProp, Text, TextStyle, View, ViewStyle, Image, ImageStyle, Pressable } from "react-native"


export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  title: string
  icon: any
  selected?: boolean
  onPress?: () => void

}

/**
 * Describe your component here
 */
export const MenuItem = (props: MenuItemProps) => {
  const { style, icon, title, selected, onPress } = props
  const $styles = [$container, style]


  return (
    <Pressable onPress={onPress} style={$styles} >
      <View style={[$holderView, selected ? $selectedBackground : undefined]}>
        <Image source={icon} style={[$imageStyle, selected ? $imageStyleSelected : undefined]} />
        <Text style={[$text, selected ? $textSelected : undefined]}>{title}</Text>
      </View>
    </Pressable>
  )
}

const $container: ViewStyle = {


}
const $holderView: ViewStyle = {
  maxWidth: 190,
  marginTop: 10,
  alignItems: 'center',
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25,
  flexDirection: 'row',
  height: 40,
  paddingLeft: 20

}
const $selectedBackground: ViewStyle = {
  backgroundColor: '#fff',
}
const $imageStyle: ImageStyle = {
  width: 20, height: 20,
  tintColor: '#fff',
}
const $imageStyleSelected: ImageStyle = {
  tintColor: '#2980b9'
}
const $textSelected: TextStyle = {

  color: '#2980b9',
}

const $text: TextStyle = {

  fontSize: 14,
  marginLeft: 15,
  color:'#fff',

}
