/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { faunaClient, q } from "../utils/db.ts";
import { buttonStyle } from "../islands/Navbar.tsx";

export const inputStyle = `p-4 border-2 border-purple-400 radius rounded-md flex w-9/12`;


interface CounterProps {
  start: number;
}

export default function NewPost(props: CounterProps) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    await faunaClient.query(
      q.Create(
        q.Collection('Post'),
        { data: { title, content } },
      )
    );
    setTitle("");
    setContent("");
    alert("Post created!");
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
