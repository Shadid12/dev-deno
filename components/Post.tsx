/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export interface PostType {
  title: string;
  content: string;
}

export default function Post({ post, id } : { post: PostType, id: string }) {
  return (
    <div class={tw`p-5`}>
      <h4 class={tw`text-md mb-3`}>{post.title}</h4>
      <a class={tw`border mt-1 p-2 cursor:pointer`} href={`/posts/${id}`}>View</a>
    </div>
  )
}