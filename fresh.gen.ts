// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/comment.ts";
import * as $2 from "./routes/api/login.ts";
import * as $3 from "./routes/api/post.ts";
import * as $4 from "./routes/api/register.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/login.tsx";
import * as $7 from "./routes/posts/[id]/edit.tsx";
import * as $8 from "./routes/posts/[id]/index.tsx";
import * as $9 from "./routes/posts/new.tsx";
import * as $$0 from "./islands/Comments.tsx";
import * as $$1 from "./islands/LoginForm.tsx";
import * as $$2 from "./islands/Navbar.tsx";
import * as $$3 from "./islands/Post.tsx";
import * as $$4 from "./islands/PostForm.tsx";
import * as $$5 from "./islands/PostList.tsx";
import * as $$6 from "./islands/RegisterForm.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/comment.ts": $1,
    "./routes/api/login.ts": $2,
    "./routes/api/post.ts": $3,
    "./routes/api/register.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/login.tsx": $6,
    "./routes/posts/[id]/edit.tsx": $7,
    "./routes/posts/[id]/index.tsx": $8,
    "./routes/posts/new.tsx": $9,
  },
  islands: {
    "./islands/Comments.tsx": $$0,
    "./islands/LoginForm.tsx": $$1,
    "./islands/Navbar.tsx": $$2,
    "./islands/Post.tsx": $$3,
    "./islands/PostForm.tsx": $$4,
    "./islands/PostList.tsx": $$5,
    "./islands/RegisterForm.tsx": $$6,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
