import React,{useContext , createContext , useReducer} from 'react'
import PropTypes from "prop-types";
import {reducers} from './store'

export const StoreContext = createContext()

const StoreProvider = ({ children , initialState }) => {
    const [state, dispatch] = useReducer(reducers, initialState)
    return (
        <StoreContext.Provider value={{dispatch, state}}>
            {children}
        </StoreContext.Provider>
    );
  };

StoreProvider.propTypes = {
    children: PropTypes.node,
    initialState: PropTypes.object
};

export const useStore = () => {
    const {state, dispatch} = useContext(StoreContext)
    return {state, dispatch};
};

export default StoreProvider
  