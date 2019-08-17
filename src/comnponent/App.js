import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import { store } from '../reducers/reducer';
import LoginContainer from './login/loginContainer';
import ListArticlesContainer from './ListArticles/ListArticlesContainer';
import SideBar from './sidebar/sideBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <SideBar />
          <Route path='/Login' component={LoginContainer} />
          <Route path='/Logout' component={LoginContainer} />
          <Route path='/' exact render={() => (<ListArticlesContainer />)} />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
