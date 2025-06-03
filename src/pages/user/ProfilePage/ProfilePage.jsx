import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import SelectCategory from "../../../ui/SelectCategory";
import axios from "../../../services/axios";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const { auth, profileInfo, setProfileInfo } = useAuth();

  const [name, setName] = useState(profileInfo.exhib_name);
  const [short_desc, setShortDesc] = useState(profileInfo.short_desc);
  const [adres, setAdres] = useState(profileInfo.adres);
  const [mail, setMail] = useState(profileInfo.mail);
  const [site, setSite] = useState(profileInfo.site_url);
  const [category, setCategory] = useState(profileInfo.short_categ_name);
  const [description, setDescription] = useState(profileInfo.description);

  const [isEditing, setIsEditing] = useState("");
  const [file, setFile] = useState(null);

  function handleEdit() {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      setName(profileInfo.exhib_name);
      setAdres(profileInfo.adres);
      setMail(profileInfo.mail);
      setSite(profileInfo.site_url);
      setDescription(profileInfo.description);
      setFile(null);
    }
  }

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
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

    try {
      const res = await axios.post(
        "exhibitors/",
        JSON.stringify({
          exhib_name: name,
          short_desc,
          img_url: filename || profileInfo.img_url,
          adres,
          mail,
          site_url: site,
          category,
          description,
          user_id: auth.userId,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      handleEdit();
      setProfileInfo({ ...profileInfo, is_edited: true });
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.modal}>
        <h1>Twój profil</h1>
        <form className={styles.basicInfoContainer} onSubmit={handleSubmit}>
          <div className={styles.profilePictureRow}>
            <img src={profileInfo.img_url} />
          </div>
          {isEditing && (
            <input id="image" type="file" onChange={handleFileChange} />
          )}
          <div className={styles.row}>
            <label htmlFor="exhib_name">Nazwa wystawcy:</label>
            <input
              id="exhib_name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="short_desc">Krótki opis:</label>
            <input
              id="short_desc"
              value={short_desc}
              onChange={(e) => setShortDesc(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="adres">Adres:</label>
            <input
              id="adres"
              type="text"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="site_url">Strona www:</label>
            <input
              id="site_url"
              type="url"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="category">Kategoria:</label>
            <SelectCategory
              id="category"
              category={category}
              setCategory={setCategory}
              disabled={!isEditing}
              className={styles.selectCategory}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="description">Opis:</label>
            <textarea
              id="description"
              type="text"
              rows="15"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.buttonsContainer}>
            {profileInfo.is_edited && (
              <div className={styles.warning}>
                <img src="/info.png" />
                <p>
                  Dane twojego profilu wystawcy zostały niedawno zmodyfikowane,
                  czekają na akceptacje administratora, nie mozesz w tym
                  momencie edytować
                </p>
              </div>
            )}
            <button
              type="button"
              className={styles.editBtn}
              onClick={handleEdit}
              disabled={profileInfo.is_edited}
            >
              {isEditing ? "Anuluj" : "Edytuj dane profilu"}
            </button>
            {isEditing && (
              <button type="submit" className={styles.confirmBtn}>
                Zatwierdz
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
