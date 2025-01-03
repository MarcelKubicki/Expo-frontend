import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import styles from "./CreateEventPage.module.css";
import SelectLocalization from "../components/SelectLocalization";
import SelectCategory from "../components/SelectCategory";
import axios from "../axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("Wprowadź opis wydarzenia...");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [localization, setLocalization] = useState("");
  const [category, setCategory] = useState("");
  const axiosPrivate = useAxiosPrivate();

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  }
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

  async function handleSubmit() {
    let filename;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const resImg = await axios.post(
          "/exhibitors/upload_profile_img",
          formData
        );
        filename = resImg.data.filename;
      } catch (error) {
        console.log(error);
      }
    }

    const payload = {
      event_name: eventName,
      img_url: filename,
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
      setEventName("");
      setShortDesc("");
      setStartDate("");
      setEndDate("");
      setLocalization("");
      setCategory("");
      setFile(null);
      setLongDesc("");
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
          </div>
        </div>
      </form>
      <label>Opis</label>
      <TextEditor longDesc={longDesc} setLongDesc={setLongDesc} />
      <button className={styles.createBtn} onClick={handleSubmit}>
        Utwórz wydarzenie
      </button>
    </main>
  );
}

export default CreateEventPage;
