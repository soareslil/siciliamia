import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function MyForm() {
  const [searchTxt, setSearchTxt] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [showError, setShowError] = useState(false);

  const api = axios.create({
    baseURL: "https://api.publicapis.org",
  });

  async function getApi() {
    console.log(searchTxt);
    api
      .get("/entries")
      .then(function ({ data }) {
        const result = data.entries.find(
          (element) => element.API === searchTxt
        );
        setShowError(false);
        setName(result.API);
        setDescription(result.Description);
        setLink(result.Link);
        setCategory(result.Category);
      })
      .catch(function (error) {
        setShowError(true);
        if (
          error.message ===
          "Cannot read properties of undefined (reading 'API')"
        )
          setAlertMsg("API not found!");
      });

    await fetch("http://localhost:5000/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        link: link,
        category: category,
      }),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  return (
    <section className="allItems">
      <section className="sec1-body">
        <form className="form">
          <label className="form-label">Enter your API name:</label>
          <input
            type="text"
            className="form-inputTxt"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button type="button" className="form-btn" onClick={getApi}>
            Search
          </button>
          {showError && <div className="errorMsg">{alertMsg}</div>}
        </form>
      </section>
      {name !== "" && (
        <div className="cardInfo">
          <p> API NAME: {name}</p>
          <p>DESCRIPTION: {description}</p>
          <p>LINK: {link}</p>
          <p>CATEGORY: {category}</p>
        </div>
      )}
    </section>
  );
}

export default MyForm;
