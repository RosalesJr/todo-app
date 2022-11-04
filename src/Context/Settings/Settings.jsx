import React, { useState, useEffect } from 'react';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';

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



  const addItem = async ({...items}) => {
    try {
      let url = 'https://api-js401.herokuapp.com/api/v1/todo';
      let newItem = await axios.post(url, items);
      setList([...list, newItem.data]);
    } catch(e){
      console.error(e)
    }
  }

  const toggleComplete = async (id) => {
    try {
      let url = `https://api-js401.herokuapp.com/api/v1/todo/${id}`
      let updatedItem = await axios.put(url, id);
      const items = list.map(item => {
        if(updatedItem) {
          item.complete = !item.complete;
        }
        return item;
      });
      setList(items)
    } catch(e) {
      console.error(e);
    }

  }

  const deleteItem = async (id) => {
    try {
      let url = `https://api-js401.herokuapp.com/api/v1/todo/${id}`
      await axios.delete(url);
      let newList = list.filter(item => item._id !== id);
      setList(newList);
      console.log('Task Removed')
    } catch(e) {
      console.error(e);
    }
  }

  function savePreferences() {
    setSubmit(prev => !prev);

  };

  useEffect(() => {
    (async () => {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
      let results = response.data.results;
      console.log(results);
      setList(results)
    })();
  }, []);

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

  return (

    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;
