import storeDev from '../src/store.dev';
import storeProd from '../src/store';

const getStore = () => {
  const store = __DEV__ ? storeDev : storeProd;
  return store;
};

export default getStore;
