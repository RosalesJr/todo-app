import { Grid } from '@mantine/core';
import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'
import { Text, Header, createStyles } from '@mantine/core';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';

const useStyles = createStyles((theme) => ({
  todoHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));


const ToDo = () => {

  const { incomplete } = useContext(SettingsContext);
  const { classes } = useStyles();

  return (
    <>
      <Header data-testid="todo-header" className={classes.todoHeader}>
        <Text>To Do List: {incomplete} items pending</Text>
      </Header>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4} gutter="xl">
          <AddForm />
        </Grid.Col>
        <Grid.Col xs={12} sm={8} gutter="xl">
          <List />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;
