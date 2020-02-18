import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import counter from './reducers/counter'
import { create } from 'domain';

const store = createStore(counter);
const el = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Counter></Counter>
    </Provider>, el
)

