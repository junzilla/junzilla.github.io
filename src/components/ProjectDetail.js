// src/components/ProjectDetail.js
import React from "react";
import { Typography, Divider } from "@mui/material";

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <div>
      <Typography variant="h4">{project.title}</Typography>
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {project.description}
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6">🧰 Development Tools</Typography>
      <ul>
        {project.tools.hardware.length > 0 && (
          <li><strong>Hardware：</strong>{project.tools.hardware.join(", ")}</li>
        )}
        {project.tools.software.length > 0 && (
          <li><strong>Software：</strong>{project.tools.software.join(", ")}</li>
        )}
      </ul>

      {project.challenges.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>🔧 Key Challenges Addressed</Typography>
          <ul>
            {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </>
      )}

      {/* 媒体文件（Json会把图片和视频以数组方式存储，这里用map遍历 */}
      {project.media?.images?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>🖼️ Photos</Typography>
          {project.media.images.map((img, i) => (
            <img
              key={i}
              src={`/projects/images/${img}`}
              alt={`project-${i}`}
              style={{ width: "100%", maxWidth: 400, marginTop: 10 }}
            />
          ))}
        </>
      )}
      {project.media?.videos?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>🎥 Videos</Typography>
          {project.media.videos.map((video, i) => (
            <video
              key={i}
              controls
              volume='50'
              style={{ width: "100%", maxWidth: 500, marginTop: 10 }}
              src={`/projects/videos/${video}`}
            >
              Your browser does not support the video tag.
            </video>
          ))}
        </>
      )}
    </div>
  );
};

export default ProjectDetail;