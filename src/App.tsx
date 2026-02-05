import { useState } from "react";
import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";
import { NewPost } from "./components/NewPost/NewPost";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleGetPosts = (data: Post) => {
    setPosts(prevState => [...prevState,data]);
  };
  return (
    <>
      <NewPost onSubmit={ handleGetPosts} />
      <PostsList posts={posts} />
    </>
  );
};
