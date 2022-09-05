/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { RemotePost } from "../types/Post.ts";

export default function Post({ post } : { post: RemotePost }) {
  const deletePost = async () => {
    const response = await fetch(`/api/post/`, {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      method: "DELETE",
      body: JSON.stringify({
        _id: post._id
      })
    });
    const data = await response.json();
    if(data.error) {
      alert(data.error);
    } else {
      alert("Post deleted!");
      window.location.href = "/";
    }
  }
  return (
    <Fragment>
      <div class={tw`p-3`}>
        <h1 class={tw`text-xl pl-4`}>{post.title}</h1>
        <div class={tw`text-sm font-bold pl-4`}>By {post.author}</div>
        <p class={tw`pl-4 text-left`}>{post.content}</p>
        <a href={`/posts/${post._id}/edit`} class={tw`font-bold py-3 px-3 rounded mr-2 ml-2 hover:underline hover:bg-purple-200`}>
          Edit
        </a>
        <button onClick={deletePost} class={tw`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}>
          Delete
        </button>
      </div>
    </Fragment>
  )
}