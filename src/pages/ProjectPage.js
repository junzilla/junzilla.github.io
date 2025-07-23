// src/pages/ProjectPage.js
import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Box sx={{ display: "flex", height: "100%", padding: 2 }}>
      {/* 左侧导航 */}
      <Box sx={{ width: 200, borderRight: 1, borderColor: "divider" }}>
        <List>
          {projects.map((proj, index) => (
            <React.Fragment key={proj.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelectedProject(proj)}>
                  <ListItemText primary={proj.title} />
                </ListItemButton>
              </ListItem>
              {index < projects.length - 1 && <Divider />} {/* 最后一个项目后不加分隔线 */}
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* 右侧展示 */}
      <Box sx={{ flexGrow: 1, paddingLeft: 3 }}>
        <ProjectDetail project={selectedProject} />
      </Box>
    </Box>
  );
};

export default ProjectPage;