import React from 'react'
import { createRoot } from 'react-dom/client';
import "./index.css"
//import ReactDom from 'react-dom'


const Person=({img,name,job,children})=>{
   const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article className='person'>
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
}

const PersonList=()=>{
  return(
    <section className='personList'>
      <Person img="55" name="ahmet" job="civil servant"/>
      <Person img="75" name="nefise" job="web dev">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, enim in exercitationem harum fuga sequi et, velit autem omnis cupiditate atque molestiae odio possimus deleniti vero natus unde aspernatur animi.</p>
      </Person>
      <Person img="15" name="ömer" job="student"/>
    </section>
  );
}
const container=document.getElementById("root");
const root=createRoot(container);
root.render(<PersonList/>);
//ReactDom.render(<PersonList/>,document.getElementById("root"));