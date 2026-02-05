import { useState } from "react";
import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";
import { NewPost } from "./components/NewPost/NewPost";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleGetPosts = (data: Post) => {
    setPosts((prevState) => [...prevState, data]);
  };
  return (
    <>
      <Modal>
        <NewPost onSubmit={handleGetPosts} />
      </Modal>
      {posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <p style={{ textAlign: "center" }}>Sorry we don't have any posts</p>
      )}
    </>
  );
};
