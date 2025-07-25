// src/components/AppBarTop.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  useMediaQuery
} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ height: 65, position: "relative" }}>
          {/* 姓名：桌面端左对齐，移动端居中 */}
          {/* ...(isMobile ? { ... } : { ... }) 是JS中的三元表达式Ternary Expression */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              ...(isMobile
                ? {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }
                : { ml: 4 })
            }}
          >
            Junjie Lin
          </Typography>

          {/* 右侧更多菜单图标 */}
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ position: "absolute", right: 16 }}
              >
                <MoreHorizIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} slotProps={{
                paper: {
                  sx: {
                    height: 65, // 只覆盖 AppBar 区域
                    width: "100%", // 往左延伸至覆盖整个 AppBar
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                  }
                }

              }}>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  onClick={toggleDrawer(false)}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/projects"
                  onClick={toggleDrawer(false)}
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/blogs"
                  onClick={toggleDrawer(false)}
                >
                  Blogs
                </Button>
              </Drawer>
            </>
          ) : (
            <Box sx={{ marginLeft: "auto" }}>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/projects">
                Projects
              </Button>
              <Button color="inherit" component={RouterLink} to="/blogs">
                Blogs
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarTop;
