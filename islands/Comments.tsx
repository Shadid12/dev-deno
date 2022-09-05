/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";
import { inputStyle } from "./PostForm.tsx";
import { buttonStyle } from "./Navbar.tsx";

export default function Comments({ postId } : { postId: string }) {
  const [content, setContent] = useState("");

  const saveComment = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ content, postId })
    }); 
    const data = await response.json();
    alert("Comment created!");
    setContent("");
    console.log(data);
  };

  return (
    <div class={tw`p-5`}>
      <div class="mt-1 flex p-5">
        <input 
          class={tw`${inputStyle} w-2/5`} 
          placeholder="Make a comment"
          onChange={(e: any) => setContent(e.target.value)}
          value={content}
        />
        <button 
          onClick={saveComment}
          class={tw`${buttonStyle} ml-1`}
        >
          Save
        </button>
      </div>
    </div>
  )
}