import React, { useState } from "react";

export const useTodoContext = () => {
    const [list, setList] = useState([]);

    return{
        list,
        setList,
    }
}
