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
        <ListItem>About</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Our Work</ListItem>
        <Button ref={ref} children={"Contact Us"} type="md"/>
      </ul>
    </nav>
  );
}

function ListItem({ children }) {
  return <li className="hidden sm:block cursor-pointer  text-body-sm font-medium text-neutral-700">{children}</li>;
}

export default Nav;
