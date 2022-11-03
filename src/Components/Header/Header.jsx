import React from 'react';
import './style.scss';
import { createStyles, Navbar, Header } from '@mantine/core';
import { Link } from "react-router-dom";


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
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/settings" className={classes.link}>Settings</Link>
        </Navbar>
      </Header>
    </>
  );
}


export default AppHeader;
