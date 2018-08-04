import { AsyncStorage } from 'react-native';

export default class MyStorage {
  load = async () => {
    const currentData = JSON.parse(
      await AsyncStorage.getItem('storageTasks')
    );
    return (currentData === (undefined || null) ? [] : currentData);
  }

  add = async (data) => {
    const currentData = await this.load();

    const newData = {
      id: currentData.length > 0 ?
        (currentData[currentData.length - 1].id + 1) :
        1,
      title: data.title,
      description: data.description,
      rating: data.rating
    }

    currentData.push(newData);

    await AsyncStorage.setItem('storageTasks', JSON.stringify(currentData));

    return currentData;
  }

  destroy = () => {

  }

  update = () => {

  }
}