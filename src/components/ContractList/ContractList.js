import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import "./contractlist.css";
import { SERVER_URL } from "../../config";

//Should render a list of contract list items pulled from the DB. - Dooonnnee??
// can use box to search and narrow down contract list - DONE!!

//extra - Include both provider name and summary

function ContractList() {
  const [list, setList] = useState([]);
  // const [list2, setList2] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch(`${SERVER_URL}/contract`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setList(data);
      });
  }, []);

  function handleChange(value) {
    setSearchTerm(value);
  }
  function handleClick(id) {
    history.push(`Contract/${id}`);
  }

  return (
    <div>
      <form action={`${SERVER_URL}/newcontract`}>
        <input className="cheatButton" type="submit" value="New Contract" />
      </form>
      <SearchBar handleChange={handleChange} />
      <ul>
        {list
          .filter(function(contract) {
            return contract.provider_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map(function(contract) {
            return (
              <>
                <li
                  onClick={() => handleClick(contract.contract_id)}
                  className="items"
                >
                  {contract.provider_name}
                </li>
                <br></br>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default ContractList;
