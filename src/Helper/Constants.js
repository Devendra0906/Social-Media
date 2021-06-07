import { Platform } from 'react-native'
export default {
  AppFont: 'Arial'
}

// Header size accordingly platform
export const headerMarginTop = Platform.OS === 'ios' ? 0 : - 26