// src/components/AppBarTop.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const AppBarTop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 小于600px 为 mobile

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ height: 65, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Junjie Lin
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    <ListItem button component={RouterLink} to="/projects">
                      <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/blog">
                      <ListItemText primary="Blog" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/music">
                      <ListItemText primary="Music" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/projects">
                Projects
              </Button>
              <Button color="inherit" component={RouterLink} to="/blog">
                Blog
              </Button>
              <Button color="inherit" component={RouterLink} to="/music">
                Music
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarTop;