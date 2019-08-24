import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import s from './App.module.css';
import { store } from '../reducers/reducer';
import LoginContainer from './login/loginContainer';
import ListArticlesContainer from './ListArticles/ListArticlesContainer';
import SideBarContainer from './sidebar/sideBarContainer';
import OneArticleContainer from './oneArticleBody/oneArticleContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <div>
            <SideBarContainer />
          </div>
          <div className={s.header2}>
            <div className={s.gridItem}>
              Работа с react
            </div>
          </div>
          <div>
            <Route path='/Login' component={LoginContainer} />
            <Route path='/Logout' component={LoginContainer} />
            <Route path='/' exact render={() => (<ListArticlesContainer />)} />
            <Route path='/articles' exact render={() => (<ListArticlesContainer />)} />
            <Route path='/article' exact render={() => (<OneArticleContainer />)} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
