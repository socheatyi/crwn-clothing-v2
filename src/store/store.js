import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { rootReducer } from './root-redcucer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares)); // Crate multiple middlewares from left to right

export const store = createStore(rootReducer, undefined, composedEnhancers); // Middle param is additional state