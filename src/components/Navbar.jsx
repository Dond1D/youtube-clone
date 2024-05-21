import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../utils/constants';
import SearchBar from "./SearchBar";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { themeMode } = useTheme();

    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: 'sticky', backgroundColor: themeMode === 'dark' ? "#000" : "#fff", top: 0,
            justifyContent: 'space-between', zIndex: 999
        }}>

            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <Box display="flex">
                <SearchBar />
                <ThemeToggleButton />
            </Box>

        </Stack>
    )
}



export default Navbar;