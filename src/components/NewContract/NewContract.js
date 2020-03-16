import React, { useState } from "react";
import "./newcontract.css";
import { SERVER_URL } from "../../config";

export default NewContract;
function NewContract() {
  const [contract, setContract] = useState({
    provider_name: "",
    contract_id: 0,
    start_date: "",
    end_date: "",
    number_of_learners: "",
    skill_level: "",
    summary: "",
    complete: "",
    budget: ""
  });
  function postData() {
    const post = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contract)
    };
    console.log(post);
    fetch(`${SERVER_URL}/contract`, post)
      .then(res => res.json())
      .then(data => setContract(data));
    alert("New Contract Added!");
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setContract({ ...contract, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    postData(contract);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new contract</h1>
      <input
        className="input"
        type="text"
        value={contract.provider_name}
        name="provider_name"
        onChange={handleChange}
        placeholder="Add provider name"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.contract_id}
        name="contract_id"
        onChange={handleChange}
        placeholder="Add contract ID"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.start_date}
        name="start_date"
        onChange={handleChange}
        placeholder="Add contract start date"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.end_date}
        name="end_date"
        onChange={handleChange}
        placeholder="Add contract end date"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.number_of_learners}
        name="number_of_learners"
        onChange={handleChange}
        placeholder="Add number of learners"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.skill_level}
        name="skill_level"
        onChange={handleChange}
        placeholder="Add skill level"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.summary}
        name="summary"
        onChange={handleChange}
        placeholder="Add summary"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.complete}
        name="complete"
        onChange={handleChange}
        placeholder="Add complete"
      ></input>
      <br></br>
      <br></br>
      <input
        className="input"
        type="text"
        value={contract.budget}
        name="budget"
        onChange={handleChange}
        placeholder="Add budget"
      ></input>
      <br></br>
      <br></br>
      <button type="submit" value="submit">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}
