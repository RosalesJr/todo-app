import React from "react";
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Pagination } from '@mantine/core';
import { Card, Text, Badge, Group, Menu, ActionIcon } from '@mantine/core';
import { IconDots, IconTrash } from '@tabler/icons';
import { When } from 'react-if';
const List = ({ children }) => {
  const { toggleComplete, deleteItem, pageItems, listToRender } = useContext(SettingsContext);
  const [page, setPage] = useState(1);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);


  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} shadow="sm" pb="lg" radius="md" withBorder>
          <Card.Section withBorder >
            <Group position="apart" mt="md" mb="xs">
              <Badge
                onClick={() => toggleComplete(item._id)}
                color={item.complete ? "blue" : "green"}
                variant="light">{item.complete ? "complete" : "pending"}
              </Badge>
              <Text weight={300}>
                Assigned to: {item.assignee}
              </Text>
              <Menu withinPortal position="bottom-end" shadow="sm">
                <Menu.Target>
                  <ActionIcon>
                    <IconDots size={16} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => deleteItem(item._id)}
                    icon={<IconTrash size={14} />}
                    color="red">
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Text size="sm" color="dimmed">
              {item.text}
            </Text>
            <Text size="sm" color="dimmed">
              Difficulty: {item.difficulty}
            </Text>
          </Card.Section>
        </Card>
      ))}
      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;
