/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { buttonStyle } from "../islands/Navbar.tsx";


export const inputStyle = `p-4 border-2 border-purple-400 radius rounded-md flex w-9/12`;

export default function NewPost() { 
  return (
    <div class={tw`p-5 m-5`}>
      <h1 >Create New Post</h1>
      <div class="mt-1 flex">
        <input 
          class={tw`${inputStyle}`} 
          placeholder="Post Title"
        />
      </div>
      <div class="mt-1 flex">
        <textarea class={tw`${inputStyle} mt-5 mb-5`} placeholder="Write something awesome..."/>
      </div>
      <div>
        <button class={tw`${buttonStyle}`}>Create</button>
      </div>
    </div>
  )
}