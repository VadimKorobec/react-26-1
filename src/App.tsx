import { useState } from "react";
import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";
import { NewPost } from "./components/NewPost/NewPost";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(true);

  const handleGetPosts = (data: Post) => {
    setPosts((prevState) => [...prevState, data]);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={handleCloseModal}>
          <NewPost onSubmit={handleGetPosts} />
        </Modal>
      ) : null}
      {posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <p style={{ textAlign: "center" }}>Sorry we don't have any posts</p>
      )}
    </>
  );
};
