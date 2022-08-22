/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { buttonStyle } from "../islands/Navbar.tsx";
export const inputStyle = `p-4 border-2 border-purple-400 radius rounded-md flex w-9/12`;

interface CounterProps {
  start: number;
}

export default function NewPost(props: CounterProps) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(title, content);
  }

  return (
    <div class={tw`p-5 m-5`}>
      <h1 class={tw`text-xl`}>Create new Post</h1>
      <div class="mt-1 flex">
        <input 
          class={tw`${inputStyle}`} 
          placeholder="Post Title"
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div class="mt-1 flex">
        <textarea 
          class={tw`${inputStyle}`} 
          placeholder="Write something..."
          onChange={(e: any) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <button 
        onClick={handleSubmit}
        class={tw`${buttonStyle} mt-1`}
      >
        Create Post
      </button>
    </div>
  );
}
