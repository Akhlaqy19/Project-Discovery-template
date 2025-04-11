// src/context/DataProvider.js
import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get(url);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return (
    <DataContext.Provider value={{ ...state, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
