import { useEffect, useState } from "react";
import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";
import { NewPost } from "./components/NewPost/NewPost";
import { Modal } from "./components/Modal/Modal";
import { MainHeader } from "./components/MainHeader/MainHeader";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  console.log(posts)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    };

    fetchPosts();
  }, []);

  const handleGetPosts = (postData: Post) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevState) => [...prevState, postData]);
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
