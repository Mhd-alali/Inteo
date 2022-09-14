import React from "react";

import {ReactComponent as Twitter} from "../assets/icons/twitter.svg"
import {ReactComponent as Youtube} from "../assets/icons/youtube.svg"
import {ReactComponent as Facebook} from "../assets/icons/facebook.svg"
import {ReactComponent as Instagram} from "../assets/icons/instagram.svg"

export default function Fotter({}) {
  return (
    <footer className="container text-neutral-700">
      <div className="flex my-20 items-start justify-between flex-wrap lg:flex-nowrap lg:gap-52 ">
        <div className="space-y-4">
          <h5 className="text-display-sm md:text-display-lg">kick-start your dream home with us</h5>
          <a className="inline-block font-display text-display-md md:text-display-lg text-primary-600 italic" href="">
            send us a hi
            <hr className="border-primary-600 -translate-y-2"/>
          </a>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h6 className="text-display-xs">Brooklyn, New York</h6>
            <p className="text-body-sm ">962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.</p>
          </div>
          <div className="space-y-2">
            <p className="text-body-sm ">Email U s at</p>
            <a className="inline-block font-display text-display-xs text-primary-600 " href="">hello@landify.design</a>
          </div>
          <div className="space-y-2">
            <p className="text-body-sm ">if you're hurry, quick call for us</p>
            <a className="inline-block font-display text-display-xs text-primary-600 " href="">+8(663)125-08-59</a>
          </div>
        </div>
      </div>
      <hr className="container border-neutral-300"/>
      <div className="mt-10 flex justify-between items-center flex-wrap lg:flex-nowrap gap-5">
        <p className="font-light min-w-min">© 2022 Inteo - Award winning studio. Made with love by <a className="cursor-pointer text-primary-600">Landify</a></p>
        <div className="flex items-center flex-wrap sm:space-x-6">
            <p className="text-body-sm font-semibold">CONNECT</p>
            <hr className="border-neutral-700 w-14"/>
            <div className="flex space-x-6">
              <MediaIcon icon={<Instagram/>}/>
              <MediaIcon icon={<Facebook/>}/>
              <MediaIcon icon={<Youtube/>}/>
              <MediaIcon icon={<Twitter/>}/>
            </div>
        </div>
      </div>
    </footer>
  )
}
  
function MediaIcon({icon}) {
  return(
    <span className="flex items-center justify-center cursor-pointer border-2 p-2 rounded-full border-primary-50">
      {icon}
    </span>
  )
}