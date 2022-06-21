import { useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData.file:", formData.file);
    try {
      const response = await axios({
        method: "post",
        url: "route/to/backend",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Formular erfolgreich gesendet.");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="App">
        <h1>Datei Upload</h1>
        <form
          id="fileForm"
          name="fileForm"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="fileForm" />

          <label htmlFor="file">Datei auswählen:</label>
          <input type="file" name="file" id="file" onChange={handleChange} />

          <button type="submit">Datei senden</button>
        </form>
      </main>
      <footer>formData: {JSON.stringify(formData)}</footer>
    </>
  );
}

export default App;
