import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import styles from "../styles/Layout.module.css";

const drawerWidth = 240;

type Title = {
  title: string;
  children: ReactNode;
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Layout: FC<Title> = ({ children, title = "unremoted.com" }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const thisyear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <AppBar position="fixed" color="inherit" open={open}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <div className={styles.Title}>unremoted.com</div>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {/* <Main className={styles.main}> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        // color="inherit"
        // color="default"
      >
        <DrawerHeader className={styles.Bgblack}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className={styles.Text} />
            ) : (
              <ChevronRightIcon className={styles.Text} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton component="a" href="/">
            <ListItemText primary={"HOME"} />
          </ListItemButton>
          <ListItemButton component="a" href="mission">
            <ListItemText primary={"ミッション"} />
          </ListItemButton>
          <ListItemButton component="a" href="prof">
            <ListItemText primary={"会社概要"} />
          </ListItemButton>
          <ListItemButton component="a" href="contact">
            <ListItemText primary={"お問合せ"} />
          </ListItemButton>
          <ListItemButton component="a" href="style">
            <ListItemText primary={"開発スタイル"} />
          </ListItemButton>
          <ListItemButton component="a" href="times">
            <ListItemText primary={"時系列"} />
          </ListItemButton>
        </List>
      </Drawer>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a
          className="flex items-center"
          href="https://unremoted.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are unremoted.com
        </a>
      </footer>
    </div>
  );
};
