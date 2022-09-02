import { makeStore } from "https://esm.sh/statery@0.5.4?alias=react:preact/compat&deps=preact@10.8.2";

/* Make a store */
export const store = makeStore({ 
  token: "",
})

export const setToken = (token: string) =>
  store.set((state) => ({ ...state, token }))