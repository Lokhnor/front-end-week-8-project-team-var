import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckBox from "../CheckBox/CheckBox";
import "./contract.css";
import { SERVER_URL } from "../../config";

//Should retrieve full contract info from the db - DONE
//Show three sign off boxes (tick box?) to indicate depts which have signed off.
//  - Finance
//  - Legal
//  - Final management sign-off - DONE
//Each department should be able to select their sign-off box, input a
//digital signature and then submit. Box should then show as complete

//Would like to be able to then fire off email to management to inform of each sign-off?

function Contract() {
  const [doc, setDoc] = useState({});
  const { id } = useParams();
  const [isSelectedF, setIsSelectedF] = useState(false);
  const [isSelectedL, setIsSelectedL] = useState(false);
  const [isSelectedM, setIsSelectedM] = useState(false);

  function onCheckboxChangeF() {
    // if (isSelectedF) {

    // } else {
    setIsSelectedF(!isSelectedF);
  }
  function onCheckboxChangeL() {
    setIsSelectedL(!isSelectedL);
  }
  function onCheckboxChangeM() {
    setIsSelectedM(!isSelectedM);
  }

  useEffect(() => {
    fetch(`${SERVER_URL}/contract?id=${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setDoc(data[0]);
      });
  }, []);

  async function handleDelete() {
    const res = await fetch(`${SERVER_URL}/contract/${doc.contract_id}`, {
      method: "DELETE"
    });
    alert("Contract Deleted!");
    console.log(res);
  }
  return (
    <div className="contract">
      <p>Provider Name: {doc.provider_name}</p>
      <p>Contract Id: {doc.contract_id}</p>
      <p>Start Date: {doc.start_date}</p>
      <p>End Date: {doc.end_date}</p>
      <p>No. of Learners: {doc.number_of_learners}</p>
      <p>Skill Level: {doc.skill_level}</p>
      <p>Summary: {doc.summary}</p>
      <p>Complete: {doc.complete}</p>
      <p>Budget: {doc.budget}</p>
      <br></br>
      <CheckBox
        label="Finance Signoff"
        isSelected={isSelectedF}
        onCheckboxChange={onCheckboxChangeF}
      />
      <br></br>
      <CheckBox
        label="Legal Signoff"
        isSelected={isSelectedL}
        onCheckboxChange={onCheckboxChangeL}
      />
      <br></br>
      <CheckBox
        label="Management Signoff"
        isSelected={isSelectedM}
        onCheckboxChange={onCheckboxChangeM}
      />
      <br></br>
      <button onClick={handleDelete} type="submit" value="submit">
        {""}Delete Contract{""}
      </button>
    </div>
  );
}

export default Contract;

// call handleDelete
// function handleDelete() {
//   postDelete(current_contract_id);
// }

// function postDelete(id) {
//   "fetch to delete route in backend, handing the id of the contract to be deleted"
// }
