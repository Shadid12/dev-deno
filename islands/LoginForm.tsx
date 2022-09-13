import { buttonStyle } from "./NavMenu.tsx";
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
      if(data.error) {
        alert(`${data.error} : Make sure you have a correct email and password`);
      } else {
        setToken(data.data.token);
        localStorage.setItem("token", data.data.token);
      }
    } catch (error) { 
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <div class="pl-4 pt-4 mt-4">
        <input onChange={handleChange} type="email" class={`${inputStyle}`} placeholder="Email" name="email"/>
      </div>
      <div class="pl-4 pt-2 mt-1">
        <input onChange={handleChange} type="password" class={`${inputStyle}`} placeholder="Password" name="password"/>
      </div>
      <button onClick={doLogin} class={`${buttonStyle} pl-4 ml-4 mt-2`}>Signin</button>
      <hr class="mt-2 w-2/5"/>
    </div>
  )
}