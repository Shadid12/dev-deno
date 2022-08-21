/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Navbar() {
  return (
    <nav class={tw`bg-white shadow`}>
      <div class={tw`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div class={tw`flex h-16 justify-between`}>
          <div class={tw`flex`}>
            <div class={tw`ml-6 flex space-x-8`}>
              <a class={tw`inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900`}> Dev Deno </a>
            </div>
          </div>
          <div class={tw`flex items-center`}>
            <div class={tw`flex-shrink-0`}>
              <a class={buttonStyle()} href="/posts/new">
                <svg class={tw`-ml-1 mr-2 h-5 w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                <span>New Post</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const buttonStyle = (): string | undefined => {
  return tw`relative inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`;
}