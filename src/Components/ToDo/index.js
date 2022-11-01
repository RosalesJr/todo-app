import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'
import { Menu, Group } from '@mantine/core';
import './style.scss'

const ToDo = () => {

  return (
    <>
      <Menu className='toDo'>
        <Group>
          <AddForm />
          <List />
        </Group>
      </Menu>
    </>
  );
};

export default ToDo;