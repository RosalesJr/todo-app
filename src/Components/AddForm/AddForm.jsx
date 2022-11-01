import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import useForm from '../../hooks/form.js';
import { Menu, Button, Group, TextInput, Text, Space } from '@mantine/core';
import './style.scss';

const AddForm = ({ children }) => {
  const { defaultValues, addItem, incomplete } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  return (
    <>
      <Menu>
        <Group>
          <form onSubmit={handleSubmit}>
            <Text className='ToDoHeader'><b>Items to do: {incomplete} </b></Text>

            <Text className='ToDoItem'><b>Add To Do Item</b></Text>

            <TextInput label="To Do Item"
              onChange={handleChange} name="text" type="text" placeholder="Item Details" />

            <TextInput label="Assigned To"
              onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />

            <Text>Difficulty</Text>
            <Space h="md" />
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            <Space h="md" />


            <Button type="submit">Add Item</Button>
          </form>
        </Group>

      </Menu>
    </>
  )
}

export default AddForm