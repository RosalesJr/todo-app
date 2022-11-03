import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const storedPreferences = JSON.parse(localStorage.getItem('preferences'));
export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [submit, setSubmit] = useState(false);
  const [showCompleted, setShowCompleted] = useState(storedPreferences ? storedPreferences.showCompleted : false);
  const [pageItems, setPageItems] = useState(storedPreferences ? storedPreferences.pageItems : 5);
  const [sort, setSort] = useState('difficulty');
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 4,
  });

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)

  const values = {
    list,
    setList,
    incomplete,
    setIncomplete,
    toggleComplete,
    addItem,
    defaultValues,
    deleteItem,
    showCompleted, setShowCompleted,
    pageItems, setPageItems,
    sort, setSort,
    listToRender,
    savePreferences
  }

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function savePreferences() {
    setSubmit(prev => !prev);

  };

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify({ pageItems, sort, showCompleted }));
    console.log('storage ----->', localStorage);
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (

    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;
