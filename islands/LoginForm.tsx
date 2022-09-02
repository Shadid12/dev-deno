/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { buttonStyle } from "./Navbar.tsx";
import { useState } from "preact/hooks";
import { setToken } from "../store/mystore.ts";


export const inputStyle = `p-2 border-2 border-purple-200 focus:border-indigo-500 radius rounded-md flex w-2/5`;


export default function LoginForm() { 
  const [state, setState] = useState({});

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const doLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({...state}),
      })
      const data = await response.json();
      setToken(data.data.token);
      localStorage.setItem("token", data.data.token);
      // Will set state here
    } catch (error) { 
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <div class={tw`pl-4 pt-4 mt-4`}>
        <input onChange={handleChange} type="email" class={tw`${inputStyle}`} placeholder="Email" name="email"/>
      </div>
      <div class={tw`pl-4 pt-2 mt-1`}>
        <input onChange={handleChange} type="password" class={tw`${inputStyle}`} placeholder="Password" name="password"/>
      </div>
      <button onClick={doLogin} class={tw`${buttonStyle} pl-4 ml-4 mt-2`}>Signin</button>
      <hr class={tw`mt-2 w-2/5`}/>
    </div>
  )
}