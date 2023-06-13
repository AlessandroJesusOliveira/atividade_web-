import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../context";


const Form = () => {
  const { addActivity } = useContext(ListContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      addActivity({ name});
    }
    setName("");
    setDescription("");
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/list");
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Nome da Atividade
        <input
          type="text"
          placeholder="Digite aqui"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Descrição da Atividade
        <textarea
          placeholder="Digite aqui"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Cadastrar Atividade</button>
      <div className="button-container">
        <button onClick={handleNextPage}>Próxima Página</button>
      </div>
    </form>
  );
};

export default Form;
