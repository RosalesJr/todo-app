import React from 'react';
// import './style.scss';
import { createStyles, Navbar, Header, Group } from '@mantine/core';
import { Link } from "react-router-dom";
import Login from "../Login/index";


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }
}));

const AppHeader = ({ children }) => {
  const { classes } = useStyles();

  return (
    <>
      <Header>
        <Navbar className={classes.navbar}>
          <Group position="apart">
            <Group>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/settings" className={classes.link}>Settings</Link>
            </Group>
            <Login />
          </Group>
        </Navbar>
      </Header>
    </>
  );
}


export default AppHeader;
