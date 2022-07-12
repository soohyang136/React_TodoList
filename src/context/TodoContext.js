import React, { createContext } from "react";

const initialState = {
    list: [{
        todo: "",
        check: false,
    }],
    setList: () => {},
}

export const TodoContext = createContext(initialState);