// src/pages/ProjectPage.js
import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";
import { Box, List, ListItem, ListItemButton, ListItemText, Divider, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";


const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 小于600px 为 mobile

  const drawerContent = (
    <Box sx={{ width: 200, mt:-1}}>
      <List>
        {projects.map((proj, index) => (
          <React.Fragment key={proj.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedProject(proj);
                  setDrawerOpen(false); //点击后关闭抽屉
                }}
                selected={selectedProject.id === proj.id}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    }
                  }
                }}
              >
                <ListItemText primary={proj.title} />
              </ListItemButton>
            </ListItem>
            {index < projects.length - 1 && <Divider />} {/* 最后一个项目后不加分隔线 */}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: "flex" }}>
      {/* 左侧导航：桌面端显示/移动端隐藏 */}
      {!isMobile && (
        <Box sx={{ width: 200, borderRight: 3, borderColor: "divider", mt:8 }}>
          {drawerContent}
        </Box>
      )}

      {/* 右侧内容 */}
      <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3, paddingBottom: 3, mt: 9 }}>
        {/* 移动端菜单按钮 */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ ml: -1, color: "#1976d2" }} >
            <MenuIcon />
          </IconButton>
        )}

        {/* 项目内容 */}
        <ProjectDetail project={selectedProject} />
      </Box>

      {/* 移动端 Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              top: '65px',
              height: 'calc(100% - 65px)',
            },
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default ProjectPage;