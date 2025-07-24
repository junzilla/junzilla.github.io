import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
    ...theme.applyStyles?.('dark', {
        backgroundColor: 'rgba(0,0,0,0.6)',
    }),
}));

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
    const audioRef = React.useRef(null);
    const [paused, setPaused] = React.useState(true);
    const [position, setPosition] = React.useState(0);
    const [duration, setDuration] = React.useState(0);

    const formatDuration = (value) => {
        const minute = Math.floor(value / 60);
        const second = Math.floor(value % 60);
        return `${minute}:${second < 10 ? `0${second}` : second}`;
    };

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setPosition(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const handleSliderChange = (_, value) => {
        const audio = audioRef.current;
        audio.currentTime = value;
        setPosition(value);
    };

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (paused) {
            audio.play();
        } else {
            audio.pause();
        }
        setPaused(!paused);
    };

    const handleVolumeChange = (_, value) => {
        const audio = audioRef.current;
        audio.volume = value / 100;
    };

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', p: 3, mt: 8 }}>
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CoverImage>
                        <img alt="Album Cover" src="/cover.jpg" />
                    </CoverImage>
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>

                        <Typography noWrap>
                            <b>(Ferr)Benake-Girl beat</b>
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            45decibel
                        </Typography>
                    </Box>
                </Box>

                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={duration}
                    onChange={handleSliderChange}
                    sx={{
                        color: 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s',
                            '&::before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -2 }}>
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration - position)}</TinyText>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1 }}>
                    <IconButton aria-label="rewind">
                        <FastRewindRounded fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                        {paused ? (
                            <PlayArrowRounded sx={{ fontSize: '3rem' }} />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3rem' }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="forward">
                        <FastForwardRounded fontSize="large" />
                    </IconButton>
                </Box>

                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    <VolumeDownRounded />
                    <Slider aria-label="Volume" defaultValue={50} onChange={handleVolumeChange} />
                    <VolumeUpRounded />
                </Stack>

                {/* 插入音频文件 */}
                <audio ref={audioRef} src="/(Ferr)Benake-Girl beat - 45decibel.mp3" />
            </Widget>
        </Box>
    );
}
