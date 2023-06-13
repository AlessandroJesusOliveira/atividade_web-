import React, { createContext, useState } from 'react';

export const ListContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <ListContext.Provider value={{ activities, addActivity }}>
      {children}
    </ListContext.Provider>
  );
};