import { useState, useEffect } from "preact/hooks";
import { buttonStyle } from "./NavMenu.tsx";
import { RemotePost } from "../types/Post.ts";

export const inputStyle = `p-4 border-2 border-purple-400 radius rounded-md flex w-9/12`;


export default function PostForm({ edit, post }: { edit?: boolean, post?: RemotePost }) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if(post) {
      setTitle(post.title);
      setContent(post.content);
    }
    console.log(post);
  }, [post]);

  const createPost = async (e: Event) => {
    e.preventDefault();
    const response = await fetch("/api/post", {
      headers: {
        "Authorization": localStorage.getItem("token") || "",
      },
      method: "POST",
      body: JSON.stringify({ title, content, author: localStorage.getItem("username") }),
    });
    const data = await response.json();
    alert('Post created!');
    setTitle("");
    setContent("");
  }

  const updatePost = async (e: Event) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post", {
        method: "PUT",
        headers: {
          "Authorization": localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ title, content, id: post!._id })
      });
      const data = await response.json();
      if(data.error) {
        alert(data.error);
      } else {
        alert("Yay!!!, Post updated!");
      }
    } catch (error) { 
      alert("Something went wrong!");
    }
  }

  return (
    <div class="p-5 m-5">
      <h1 class="text-xl">
        {edit ? "Edit Post" : "Create Post"}
      </h1>
      <div class="mt-1 flex">
        <input 
          class={`${inputStyle}`} 
          placeholder="Post Title"
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div class="mt-1 flex">
        <textarea 
          class={`${inputStyle}`} 
          placeholder="Write something..."
          onChange={(e: any) => setContent(e.target.value)}
          value={content}
        />
      </div>

      {
        edit ? (
          <button 
            onClick={updatePost}
            class={`${buttonStyle} mt-1`}
          >
            Update Post
          </button>
        ) : (
          <button 
            onClick={createPost}
            class={`${buttonStyle} mt-1`}
          >
            Crate Post
          </button>
        )
      }
    </div>
  );
}
