import styles from "./CreateEventPage.module.css";
import TextEditor from "../components/TextEditor";
import SelectLocalization from "../components/SelectLocalization";
import SelectCategory from "../components/SelectCategory";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Text from "@tiptap/extension-text";
import { useEffect, useState } from "react";
import { useEditor } from "@tiptap/react";
import axios from "../axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function CreateEventPage() {
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
    onUpdate: ({ editor }) => {
      const contentHTML = editor.getHTML();
      setLongDesc(contentHTML);
    },
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();

  const [photos, setPhotos] = useState(null);
  const [photosPreview, setPhotosPreview] = useState();

  const [eventName, setEventName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [localization, setLocalization] = useState("");
  const [category, setCategory] = useState("");

  const axiosPrivate = useAxiosPrivate();

  useEffect(
    function () {
      if (!file) {
        setPreview(undefined);
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    },
    [file]
  );

  useEffect(
    function () {
      if (!photos) {
        setPhotosPreview(undefined);
        return;
      }

      const objectsUrls = photos.map((photo) => URL.createObjectURL(photo));
      setPhotosPreview(objectsUrls);

      return () => objectsUrls.forEach((object) => URL.revokeObjectURL(object));
    },
    [photos]
  );

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  function handlePhotosChange(e) {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3);
      setPhotos(filesArray);
    } else {
      setPhotos(null);
    }
  }

  async function handlePhotosUploas() {
    if (photos) {
      const formData = new FormData();
      photos.forEach((photo) => formData.append("files", photo));

      try {
        const response = await axios.post(
          "/exhibitors/upload_photos",
          formData
        );
        console.log(response.data);
        return response?.data?.filenames;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }

  async function handleProfileImgUpload() {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const resImg = await axios.post(
          "/exhibitors/upload_profile_img",
          formData
        );
        return resImg.data.filename;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }

  function resetAllStates() {
    setEventName("");
    setShortDesc("");
    setStartDate("");
    setEndDate("");
    setLocalization("");
    setCategory("");
    setFile(null);
    setPreview(null);
    setPhotos(null);
    setPhotosPreview(null);
    editor.commands.clearContent();
  }

  async function handleSubmit() {
    const img_url = await handleProfileImgUpload();
    const photos_urls = await handlePhotosUploas();

    const payload = {
      event_name: eventName,
      img_url,
      photos_urls,
      date_start: startDate,
      date_end: endDate,
      short_desc: shortDesc,
      long_desc: longDesc,
      localization,
      category,
    };
    console.log(JSON.stringify(payload));

    try {
      const res = await axiosPrivate.post("events/", JSON.stringify(payload));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      resetAllStates();
    }
  }

  return (
    <main className={styles.createEventPage}>
      <form>
        <div className={styles.gridContainer}>
          <div className={styles.group}>
            <label htmlFor="image">Zdjecie wydarzenia:</label>
            {file ? (
              <img src={preview} className={styles.image_holder} />
            ) : (
              <div className={styles.image_holder}>
                <img
                  className={styles.img_icon}
                  src="/image-gallery.png"
                  alt="photo icon"
                />
              </div>
            )}
            <input
              id="image"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.group}>
              <label htmlFor="event_name">Nazwa wydarzenia:</label>
              <input
                id="event_name"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />

              <label htmlFor="short_desc">Krótki opis:</label>
              <input
                id="short_desc"
                type="text"
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                required
              />
            </div>

            <div className={styles.selectorsContainer}>
              <div className={styles.group}>
                <label htmlFor="start_date">Data rozpoczęcia:</label>
                <input
                  id="start_date"
                  type="date"
                  className={styles.select}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />

                <label htmlFor="localization">Lokalizacja:</label>
                <SelectLocalization
                  localization={localization}
                  setLocalization={setLocalization}
                  required
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="end_date">Data zakończenia:</label>
                <input
                  id="end_date"
                  type="date"
                  className={styles.select}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />

                <label htmlFor="category">Kategoria:</label>
                <SelectCategory
                  category={category}
                  setCategory={setCategory}
                  required
                />
              </div>
            </div>
            <div className={styles.photosContainer}>
              {photos
                ? photosPreview?.map((e, i) => (
                    <img key={i} src={e} className={styles.photo} />
                  ))
                : Array(3)
                    .fill()
                    .map((_, i) => (
                      <div key={i} className={styles.photo_holder}>
                        <img
                          className={styles.img_icon}
                          src="/image-gallery.png"
                          alt="photo icon"
                        />
                      </div>
                    ))}
            </div>
            <input
              id="photos"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={handlePhotosChange}
              required
            />
            <button onClick={resetAllStates}>reset</button>
          </div>
        </div>
      </form>
      <label>Opis</label>
      <TextEditor editor={editor} />
      <button className={styles.createBtn} onClick={handleSubmit}>
        Utwórz wydarzenie
      </button>
    </main>
  );
}

export default CreateEventPage;
