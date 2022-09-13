import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { store } from '../store/mystore.ts';


export const buttonStyle = `relative inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`;

export default function Navbar() {
  const [isLoggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedin(true);
    }
  }, []);

  store.subscribe((state) => {
    console.log("state", state);
    if(state.token) {
      setLoggedin(true);
      alert('You are logged in 🚪 🗝️');
      window.location.href = '/';
    }
  });

  const doLogout = () => {
    localStorage.removeItem("token");
    setLoggedin(false);
  }

  return (
    <div class="flex items-center">
      {!isLoggedin ? (
        <div class="flex-shrink-0">
          <a href="/login" class={`${buttonStyle} ml-2 bg-pink-600`}>Login</a>
        </div>

      ) : 
        <Fragment>
          <div class="flex-shrink-0">
            <a class={`${buttonStyle}`} href="/posts/new">
              <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              <span>New Post</span>
            </a>
          </div>

          <div class="flex-shrink-0">
            <button onClick={doLogout} class={`${buttonStyle} ml-2 bg-pink-600`}>Logout</button>
          </div>
        </Fragment>
      }
    </div>
  );
}