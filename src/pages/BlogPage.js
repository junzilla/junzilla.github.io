// src/pages/BlogPage.js
import React, { useState } from "react";
import blogs from "../data/blogs.json";
import BlogDetail from "../components/BlogDetail";
import BlogWallPaper from '../components/BlogWallPaper';
import MusicPlayerSlider from "../components/MusicPlayer";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider, } from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';

const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Box sx={{ display: "fixed", height: "100%" }}>
            {/* 左侧时间轴 */}
            <Box sx={{ width: 200, borderRight: 3, borderColor: "divider", mt: 8 }}>
                {sortedBlogs.map((blog, index) => (
                    <TimelineItem key={blog.date}>
                        <TimelineSeparator>
                            <TimelineDot />
                            {index < sortedBlogs.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                onClick={() => setSelectedBlog(blog)}
                                sx={{
                                    cursor: "pointer",
                                    fontWeight: selectedBlog.id === blog.id ? "bold" : "normal",
                                    color: selectedBlog.id === blog.id ? "primary.main" : "text.primary",
                                }}
                            >
                                {blog.title}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Box>

            {/* 右侧Blog细节 */}
            <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3, paddingBottom: 3, mt: 12, }}>
                <BlogDetail blog={selectedBlog} />
                <BlogWallPaper />
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: -8,
                right: 16,
                zIndex: 10,
            }}>
                <MusicPlayerSlider />
            </Box>
        </Box>
    );
};

export default BlogPage;