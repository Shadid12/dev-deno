/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { buttonStyle } from "./Navbar.tsx";

export const inputStyle = `p-2 border-2 border-purple-200 focus:border-indigo-500 radius rounded-md flex w-2/5`;


export default function RegisterForm() { 
  return (
    <div>
      <div class={tw`pl-4 pt-4 mt-4`}>
        <input type="text" class={tw`${inputStyle}`} placeholder="Name"/>
      </div>
      <div class={tw`pl-4 pt-4 mt-1`}>
        <input type="email" class={tw`${inputStyle}`} placeholder="Email"/>
      </div>
      <div class={tw`pl-4 pt-2 mt-1`}>
        <input type="password" class={tw`${inputStyle}`} placeholder="Password"/>
      </div>
      <button class={tw`${buttonStyle} pl-4 ml-4 mt-2`}>Register</button>
      <hr class={tw`mt-4 w-2/5`}/>
    </div>
  )
}