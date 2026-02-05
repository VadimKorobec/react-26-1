import { useState } from "react";
import styles from "./NewPost.module.css";

export const NewPost = () => {
  const [text, setText] = useState<string>("");

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={handleChangeBody} id="body" required rows={3} />
      </p>
      <p>{text}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};
