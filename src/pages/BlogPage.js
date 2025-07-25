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
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const [selectedBlog, setSelectedBlog] = useState(sortedBlogs[0]);


    return (
        <Box sx={{ display: "fixed", height: "100%" }}>
            {/* 左侧时间轴 */}
            <Box sx={{ width: 200, borderRight: 3, borderColor: "divider", mt: 8 }}>
                <Timeline position="alternate">
                    {sortedBlogs.map((blog, index) => {
                        const isSelected = selectedBlog.id === blog.id;
                        return (
                            <TimelineItem key={blog.id}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        sx={{
                                            backgroundColor: isSelected ? 'primary.main' : 'white',
                                        }}
                                    />
                                    {index < sortedBlogs.length - 1 && (
                                        <TimelineConnector sx={{ backgroundColor: 'white' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography
                                        onClick={() => setSelectedBlog(blog)}
                                        sx={{
                                            cursor: 'pointer',
                                            color: isSelected ? 'primary.main' : 'text.primary',
                                            fontWeight: isSelected ? 'bold' : 'normal',
                                        }}
                                    >
                                        {blog.date}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
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