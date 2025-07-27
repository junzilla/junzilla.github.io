// src/pages/BlogPage.js
import React, { useState } from "react";
import blogs from "../data/blogs.json";
import BlogDetail from "../components/BlogDetail";
import BlogWallPaper from '../components/BlogWallPaper';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicPlayerSlider from "../components/MusicPlayer";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import { useTheme } from "@mui/material/styles";
import LinearScaleIcon from '@mui/icons-material/LinearScale';


const BlogPage = () => {
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const [selectedBlog, setSelectedBlog] = useState(sortedBlogs[0]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 小于600px 为 mobile
    const [showPlayer, setShowPlayer] = useState(!isMobile);

    const [drawerOpen, setDrawerOpen] = useState(false);


    const drawerContent = (
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
    )



    return (
        <Box sx={{ display: "fixed", height: "100%" }}>
            {/* 左侧时间轴 */}
            {!isMobile && (
                <Box sx={{ width: 200, borderRight: 3, borderColor: "divider", mt: 8 }}>
                    {drawerContent}
                </Box>
            )}

            {/* 右侧Blog细节 */}
            <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3, paddingBottom: 3, mt: 9 }}>
                {/* 移动端菜单按钮 */}
                {isMobile && (
                    <IconButton onClick={() => setDrawerOpen(true)} sx={{ ml: -1, color: "#ffffff" }} >
                        <LinearScaleIcon sx={{ transform: 'rotate(90deg)' }} />
                    </IconButton>
                )}
                <BlogDetail blog={selectedBlog} />
                <BlogWallPaper />
            </Box>

            {/* Music Note Icon  */}
            <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 20 }}>
                <IconButton
                    color="primary"
                    onClick={() => setShowPlayer((prev) => !prev)}
                    sx={{
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        "&:hover": {
                            backgroundColor: "#f0f0f0"
                        }
                    }}
                >
                    <MusicNoteIcon />
                </IconButton>
            </Box>

            {/* If MusicNoteIcon == 1, show Player */}
            <Box
                sx={{
                    display: showPlayer ? 'block' : 'none',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 20
                }}>
                <MusicPlayerSlider />
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

export default BlogPage;