import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import '../static/TodoInput.css'

export default function TodoInput(){
    const [text, setText] = useState("");
    const context = useContext(TodoContext);
    function onSubmit(e){
        e.preventDefault();
        context.setList(prev => [...prev, {"todo": text, "check": false}])
        console.log(context.list)
        setText("");
    }
    function textChange(e){
        setText(e.target.value);
    }
    return(
        <>
            <p className="title">TODO</p>
            <form onSubmit={onSubmit} className="create">
                <input type='text' onChange={textChange} value={text} className="Input" placeholder="할일을 입력해주세요..."/>
                <input type='submit' value='추가하기' className="Button" />
            </form>
        </>
    )
}