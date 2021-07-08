import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bulmaswatch/nuclear/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import CellList from './components/cell-list';
import configureStore from "./state/store";
import Header from "./components/header";

const App = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <div className={"layout"}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <CellList />
        </PersistGate>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
