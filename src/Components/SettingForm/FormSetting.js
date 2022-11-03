import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Button, Card, Text, TextInput, createStyles, Grid, Switch, NumberInput } from '@mantine/core';
import { When } from 'react-if';
import { IconSettings } from '@tabler/icons';

const useStyles = createStyles((theme) => ({

  settingCss: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },

  h1: {
    backgroundColor: theme.colors.gray[5],
    color: theme.colors.gray[0],
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    width: '80%',
  },

}));

const FormSet = () => {
  const { classes } = useStyles();
  const [show, setShow] = useState(false)
  const {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    localSave,
  } = useContext(SettingsContext);

  const handleClick = () => {
    setShow(true);
    localSave();
  }
  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card>
            <Text className={classes.settingCss}>Update Settings</Text>
            <Switch
              onChange={(e) => setShowCompleted(e.currentTarget.checked)}
              checked={showCompleted}
              label="Show Completed ToDos"
              md="sm"
            />
            <NumberInput
              mb="sm"
              onChange={(value) => setPageItems(value)}
              placeholder={pageItems}
              label="Items Per page"
            />
            <TextInput
              mb="sm"
              onChange={(e) => setSort(e.target.value)}
              placeholder={sort}
              label="Sort Keyword"
            />
            <Button onClick={handleClick}>Show New Settings</Button>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card>
              <Card.Section withBorder p="xs">
                <Text className={classes.settingCss}>Update Settings</Text>
              </Card.Section>
              <Text m="sm">{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text m="sm">Items Per page:  {pageItems}</Text>
              <Text m="sm">Sort Keyword: {sort}</Text>
            </Card>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
};

export default FormSet;
