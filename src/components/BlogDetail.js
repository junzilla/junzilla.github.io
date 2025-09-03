// src/components/BlogDetail.js
import React from "react";
import { Typography, Divider } from "@mui/material";

const BlogDetail = ({ blog }) => {
  if (!blog) return null;

  return (
    <div>
      <Typography variant="h4">{blog.title}</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6"><strong>📅 Date: </strong>{blog.date}</Typography>
      <React.Fragment>
        <Typography variant="h6" sx={{ marginTop: 2 }}><strong>📝 Content</strong></Typography>
        <ul>
          {blog.content}
        </ul>
      </React.Fragment>

      {/* 媒体文件（Json会把图片和视频以数组方式存储，这里用map遍历 */}
      {blog.media?.images?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>🖼️ Photos</Typography>
          {blog.media.images.map((img, i) => (
            <img
              key={i}
              src={`/blogs/images/${img}`}
              alt={`blog-${i}`}
              style={{ width: "100%", maxWidth: 400, marginTop: 10 }}
            />
          ))}
        </>
      )}
      {blog.media?.videos?.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>🎥 Videos</Typography>
          {blog.media.videos.map((video, i) => (
            <video
              key={i}
              controls
              style={{ width: "100%", maxWidth: 500, marginTop: 10 }}
              src={`/blogs/videos/${video}`}
            >
              Your browser does not support the video tag.
            </video>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogDetail;
