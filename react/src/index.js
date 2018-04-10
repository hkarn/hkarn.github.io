import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'
import MyLoadable from './components/loader/myloadable'

//Used to exclude subdirectories from service worker, unregisters and refreshes url
import Unregister from './unregisterServiceWorker'

import 'normalize.css'
import './styles/css/index.css'

const target = document.querySelector('#root')

const App = MyLoadable({
  loader: () => import('./App')
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/projects/*" component={Unregister} />
        <Route path="/social-app-yhjust16/*" component={Unregister} />
        <Route component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker()
