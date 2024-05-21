import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styled from 'styled-components';

const StyledSpan = styled.span`
    margin: 10px;
    display: flex;
    align-items: center;
    
    &:hover {
        cursor: pointer;
    }
`

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <StyledSpan onClick={toggleTheme}  sx={{ position: 'fixed', top: '10px', right: '10px', cursor: 'pointer' }}>
      {themeMode === 'light' ? <ModeNightOutlinedIcon /> : <WbSunnyIcon/>}
    </StyledSpan>
  );
};

export default ThemeToggleButton;