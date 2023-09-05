import React from 'react';
import { App } from "./App";


const Main = () => {
  
      let header = document.querySelector('header');
      let menu = document.querySelector('menu-icon');
      let navbar = document.querySelector('navbar');
    
      window.addEventListener('scroll', ()=>{
        header.classList.toggle('active',window.scrollY > 0)
      })

      menu.onclick = ()=>{
        navbar.classList.toggle('active');
      }
      window.onscroll = ()=>{
        navbar.classList.remove('active');
      }
    
  
};

export default Main;
let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY > 0);
});