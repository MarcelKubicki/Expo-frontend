import styles from "./TextEditor.module.css";
import { EditorContent } from "@tiptap/react";

export default function TextEditor({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className={styles.controlGroup}>
        <div className={styles.buttonGroup}>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            {"<h2>"}
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            {"<h3>"}
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <h4>B</h4>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            <u>U</u>
          </button>
        </div>
      </div>
      <EditorContent className={styles.area} editor={editor} />
    </>
  );
}
