import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (key,item) => {
    try {
      await AsyncStorage.setItem(key, item)
    } catch (error) {
      console.log("local storage error while setting",error)
    }
  }
export const getItem =  async (key) => {
    
    try {
      const value = await AsyncStorage.getItem(key);
      return value
      
    } catch (error) {
        console.log("local storage error while getting",error)
    }
  };