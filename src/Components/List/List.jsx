import React from "react";
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Card, Button, Text, Box, Pagination, Badge, Group } from '@mantine/core';

const List = ({ children }) => {

  const { list, deleteItem } = useContext(SettingsContext);

  return (
    <>
      <Box>
        {list.map(item => (
          <Card key={item.id}>
            <Group className="assignedTo">
              <Badge color="green" variant="solid">
                Pending
              </Badge>
              <Text><small>Assigned to: {item.assignee}</small></Text>
            </Group>
            <Text>{item.text}</Text>
            <Text><small>Difficulty: {item.difficulty}</small></Text>
            <Button onClick={() => deleteItem(item.id)}>Complete</Button>
            <hr />
          </Card>
        ))}
        <Pagination
          total={10}
          position="center"
          styles={(theme) => ({
            item: {
              '&[data-active]': {
                backgroundImage: theme.fn.gradient({ from: 'blue', to: 'blue' }),
              },
            },
          })}
        />
      </Box>
    </>
  )
}


export default List;