import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import '../static/TodoList.css'

export default function TodoList(){
    const context = useContext(TodoContext);
    const [render, setRender] = useState(true)
    function onDelete(index){
        let tem = context.list
        tem.splice(index, 1);
        console.log(tem)
        context.setList(prev => tem)
        setRender(prev => !prev)
    }
    function onCheck(index){
        let tem = context.list;
        tem[index].check = !tem[index].check
        console.log(tem)
        context.setList(prev => tem)
        setRender(prev => !prev)
    }
    const list = context.list.map((data, index) => {
        console.log(data.check)
        return (<div className="list" key={index}>
          <div className="fin" style={{color: (data.check ? 'green' : 'red')}}>
            {(data.check ? <>완료</> : <>미완료</>)}
          </div>
          <div>
            <p className="cont">{data.todo}</p>
          </div>
          <p className="delete" onClick={()=>{
            onDelete(index)
          }}>삭제하기</p>
          <input type='checkbox' className="check" onClick={() => {
            onCheck(index);
          }} /> 
        </div>
        )
});
    return (
        <div className="todolist">
            <p className="listtitle">TODO LIST</p>
            <div>{list}</div>
        </div>
    )
}