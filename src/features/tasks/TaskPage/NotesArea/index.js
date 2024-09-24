import { Wrapper } from "../../../../common/Wrapper";
import { useRef } from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { NoteSaveButton } from "./styled";
import { updateFirebaseDoc } from "../../updateFirebaseDoc";
import { toast } from "react-toastify";

const NotesArea = ({ task }) => {
  const [noteContent, setNoteContent] = useState(task.noteContent);
  const taskNoteContentDiffers = noteContent !== task.noteContent;

  const taskId = task.id;
  const editorRef = useRef(null);

  const saveNote = async () => {
    try {
      await updateFirebaseDoc(taskId, { noteContent: noteContent });
      toast.success("Note saved");
    } catch (error) {
      toast.error("Couldn't save note");
    }
  };

  return (
    <Wrapper>
      <Editor
        apiKey={process.env.REACT_APP_API_KEY_TINY}
        onInit={(editor) => (editorRef.current = editor)}
        value={noteContent}
        onEditorChange={(noteValue) => setNoteContent(noteValue)}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-size:16px, border-radius:3px} ",
        }}
      />

      <NoteSaveButton disabled={!taskNoteContentDiffers} onClick={saveNote}>
        Save note
      </NoteSaveButton>
    </Wrapper>
  );
};

export default NotesArea;
