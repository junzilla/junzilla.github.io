import React, { useEffect } from "react";
import { AppBar, Button, Box, Toolbar, Typography, Container } from "@mui/material";

function App() {
  return (
    <Box>
      {/* 主体内容区域，居中且有最大宽度 */}
      <Container maxWidth="sm" sx={{ mt: 12, px: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Hi, I'm Junjie Lin 👋
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">👤 Name</Typography>
          <Typography>Junjie Lin</Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">📝 Self-Introduction</Typography>
          <Typography>
            I am an undergraduate student in Computer Science with a passion for technology and product development.
            I am proficient in React, Node.js, and cloud deployment.
            Currently, I am working on a Capstone project management system and planning to pursue a full-time frontend developer role upon graduation.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">🎯 Hobbies</Typography>
          <ul>
            <li>Programming & Web Development</li>
            <li>Hardware optimization (overclocking and cooling)</li>
            <li>Game: Rainbow Six Siege, Valorant, Crossfire</li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">💼 Expected Position</Typography>
          <Typography>Full Stack / Frontend Engineer (2026 Spring)</Typography>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6, fontSize: "0.9rem", color: "#666" }}>
          © 2025 Junjie Lin |{" "}
          <a href="https://github.com/junzilla" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Box>
      </Container>
    </Box>

  );
}

export default App;
