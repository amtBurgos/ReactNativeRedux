import storeDev from '../src/store.dev';
import storeProd from '../src/store';

const getStore = () => {
  const dev = true;
  const store = dev ? storeDev : storeProd;
  return store;
};

export default getStore;
