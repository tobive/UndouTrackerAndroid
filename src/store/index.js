import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import * as asyncInitialState from 'redux-async-initial-state';
import rootReducer from '../reducers';

import loadStorageExercise from './exerciseStorage';
import loadStorageWorkout from './workoutStorage';
import loadStorageSession from './sessionStorage';
import loadStorageLanguage from './languageStorage';
import loadExampleData from './exampleData';

global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
  });

const loadAllStorage = async (currentState) => {
    const saveExample = await loadExampleData();
    return new Promise(resolve => {
        loadStorageLanguage(currentState)
        .then(resultLa => {
            loadStorageWorkout(resultLa)
            .then(resultWo => {
                loadStorageSession(resultWo)
                .then(resultSess => {
                    resolve(loadStorageExercise(resultSess));
                })
                .catch(err => {
                    resolve(currentState);
                });
            })
            .catch(err => {
                resolve(currentState);
            });
        })
        .catch(err => {
            resolve(currentState);
        });
    });
};

const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                navMiddleware, 
                promiseMiddleware,
                asyncInitialState.middleware(loadAllStorage),
            )
            // ,window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
