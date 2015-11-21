import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(rootReducer);

  store.subscribe(() =>
    console.log(store.getState())
  );

  return store;
}
