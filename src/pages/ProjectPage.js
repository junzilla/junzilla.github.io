// src/pages/ProjectPage.js
import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Box sx={{ display: "fixed", height: "100%" }}>
      {/* 左侧导航 */}
      <Box sx={{ width: 200, borderRight: 3, borderColor: "divider", mt: 7 }}>
        <List>
          {projects.map((proj, index) => (
            <React.Fragment key={proj.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelectedProject(proj)}
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

      {/* 右侧展示 */}
      <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3, paddingBottom: 3, mt: 12 }}>
        <ProjectDetail project={selectedProject} />
      </Box>
    </Box>
  );
};

export default ProjectPage;