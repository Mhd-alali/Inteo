import React, { useEffect, useRef } from "react";

import Button from "./Button";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import {spinOnHover} from '../animations';

function Nav() {
  const ref = useRef(null)

  useEffect(()=>{
    spinOnHover(ref,ref.current.querySelector("svg"))
  },[])

  return (
    <nav className="container flex justify-between py-3">
      <Logo />
      <ul className="flex gap-8 items-center ">
        <a href="#About"><ListItem>About</ListItem></a>
        <a href="#Services"><ListItem>Services</ListItem></a>
        <a href="#Our-Work"><ListItem>Our Work</ListItem></a>
        <Button ref={ref} children={"Contact Us"} type="md"/>
      </ul>
    </nav>
  );
}

function ListItem({ children }) {
  return <li className="hidden sm:block cursor-pointer  text-body-sm font-medium text-neutral-700">{children}</li>;
}

export default Nav;
