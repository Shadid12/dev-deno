import { tw } from "twind";
import { buttonStyle } from "./NavMenu.tsx";
import { useState } from "preact/hooks";

export const inputStyle = `p-2 border-2 border-purple-200 focus:border-indigo-500 radius rounded-md flex w-2/5`;

export default function RegisterForm() { 
  const [state, setState] = useState({});

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const register = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          ...state,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert("Successfully registered!, try to log 🪵 in now");

    } catch (error) {
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <div class="pl-4 pt-4 mt-4">
        <input onChange={handleChange} type="text" class={tw`${inputStyle}`} placeholder="Name" name="username"/>
      </div>
      <div class="pl-4 pt-4 mt-1">
        <input onChange={handleChange} type="email" class={tw`${inputStyle}`} placeholder="Email" name="email"/>
      </div>
      <div class="pl-4 pt-2 mt-1">
        <input onChange={handleChange} type="password" class={tw`${inputStyle}`} placeholder="Password" name="password"/>
      </div>
      <button onClick={register} class={tw`${buttonStyle} pl-4 ml-4 mt-2`}>Register</button>
      <hr class="mt-4 w-2/5"/>
    </div>
  )
}