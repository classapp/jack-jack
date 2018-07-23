// EXTERNAL
import { AsyncStorage } from 'react-native';


export default class MyStorage {
    load = async () => {
      const currentData = JSON.parse(await AsyncStorage.getItem('storageTasks'));
      return (currentData === (undefined || null) ? [] : currentData);
    }

    add = async (data) => {
      const currentData = await this.load();

      const newData = {
        uid: (currentData.length > 0 ? (currentData[currentData.length - 1].uid + 1) : 1),
        title: data.title,
        text: data.text,
        rating: data.rating
      };

      currentData.push(newData);

      await AsyncStorage.setItem('storageTasks', JSON.stringify(currentData));

      return currentData;
    }

    delete = async (uid) => {
      const currentData = await this.load();

      currentData.forEach((element, index, array) => {
        if (element.uid === uid) {
          array.splice(index, 1);
        }
      });

      await AsyncStorage.setItem('storageTasks', JSON.stringify(currentData));

      return currentData;
    }

    update = async () => {
      // IF YOU WANT, YOU CAN IMPLEMENTS THE PAGE FOR UPDATE THE TASKs WITH THIS METHOD
    }
}
