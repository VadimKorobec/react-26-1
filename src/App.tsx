import { useState } from "react";
import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";
import { NewPost } from "./components/NewPost/NewPost";
import { Modal } from "./components/Modal/Modal";
import { MainHeader } from "./components/MainHeader/MainHeader";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleGetPosts = (data: Post) => {
    setPosts((prevState) => [...prevState, data]);
  };

  const handleOpenModal = () => {
    setToggleModal(true);
  };

  const handleCloseModal = () => {
    setToggleModal(false);
  };

  return (
    <>
      <MainHeader onOpen={handleOpenModal} />
      <main>
        {toggleModal ? (
          <Modal onClose={handleCloseModal}>
            <NewPost onSubmit={handleGetPosts} onClose={handleCloseModal} />
          </Modal>
        ) : null}
        {posts.length > 0 ? (
          <PostsList posts={posts} />
        ) : (
          <p style={{ textAlign: "center" }}>Sorry we don't have any posts</p>
        )}
      </main>
    </>
  );
};
