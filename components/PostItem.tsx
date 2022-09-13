import { IS_BROWSER } from "$fresh/runtime.ts";

export interface PostType {
  title: string;
  content: string;
}

export default function PostItem({ post, id } : { post: PostType, id: string }) {
  return (
    <div class="p-5">
      <h4 class="text-md mb-3">{post.title}</h4>
      <a class="border mt-1 p-2 cursor:pointer" href={`/posts/${id}`}>View</a>
    </div>
  )
}