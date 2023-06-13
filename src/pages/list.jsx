import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context';


const List = () => {
  const { activities } = useContext(ListContext);
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate('/');
  };

  return (
    <div className="list-container">
      <h2>Lista de Atividades</h2>
      {activities.length === 0 ? (
        <p>Não há atividades para exibir.</p>
      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <div className="activity-name">{activity.name}</div>
            </li>
          ))}
        </ul>
      )}
            <div className="button-container">
        <button onClick={handlePreviousPage}>Página Anterior</button>
      </div>
    </div>
  );
};

export default List;