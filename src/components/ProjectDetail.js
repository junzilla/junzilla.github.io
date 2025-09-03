// src/components/ProjectDetail.js
import React from "react";
import { Typography, Tooltip, Divider, Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <div>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography variant="h4">{project.title}</Typography>
        {project.link && (
          <Tooltip title="Click to visit" arrow placement="right">
            <IconButton
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              color="success"
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>

        )}
      </Box>


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
      {/* 🖼️ Photos */}
      {project.media?.images?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>🖼️ Photos</Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // 手机1列，>=600px两列
              gap: { xs: 1.5, sm: 3 },
              alignItems: 'start'
            }}
          >
            {project.media.images.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={`/projects/images/${img}`}
                alt={`${project.title}-${i}`}
                loading="lazy"
                //style={{ width: "48%", height: "auto", border: "2px solid #ccc", marginTop: 25, marginLeft: 25, marginBottom: 25 }}
                sx={{
                  width: '100%',          // 手机时铺满屏幕（容器宽度）
                  height: 'auto',
                  border: '2px solid #ccc',
                  borderRadius: 1,
                  display: 'block'
                }}
              />
            ))}
          </Box>
        </>
      )}

      {/* 🎥 Videos */}
      {project.media?.videos?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>🎥 Videos</Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: { xs: 1.5, sm: 3 }
            }}
          >
            {project.media.videos.map((video, i) => (
              <Box
                key={i}
                component="video"
                controls
                src={`/projects/videos/${video}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1
                }}
              />
            ))}
          </Box>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
