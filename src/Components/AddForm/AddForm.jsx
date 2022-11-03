import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Button, Space, TextInput, Slider } from '@mantine/core';

const AddForm = ({ children }) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(addItem, defaultValues);

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" >
        <form onSubmit={handleSubmit}>
          <Card.Section withBorder >
            <Text weight={800} px="xs">Add To Do Item</Text>
          </Card.Section>
          <Space h="md" />
          <Text weight={500} px="xs" >To Do Item</Text>
          <TextInput
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details" />
          <Space h="md" />
          <Text weight={500} px="xs">Assigned To</Text>
          <TextInput
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name" />
          <Space h="md" />
          <Text weight={500} px="xs">Difficulty</Text>
          <Slider
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            name="difficulty"
            type="range"
            min={1}
            max={5}
            step={1}
            mb="lg"
          />
          <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Add Item</Button>
        </form>
      </Card>
    </>
  )
}

export default AddForm
