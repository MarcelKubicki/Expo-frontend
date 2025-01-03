import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import styles from "./TextEditor.module.css";

export default function TextEditor({ longDesc, setLongDesc }) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Underline,
      Heading.configure({
        levels: [2, 3],
      }),
    ],
    content: longDesc,
    onUpdate: ({ editor }) => {
      const contentHTML = editor.getHTML();
      setLongDesc(contentHTML);
    },
  });

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
