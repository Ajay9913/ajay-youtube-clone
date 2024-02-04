import { Stack, Box } from '@mui/material';
import { logo } from '../utils/constant';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';


const Navbar = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}
    px={2} py={1}  sx={{background:"#000", position:"sticky", top:0, zIndex:2}}
    >
        <Link to="/">
            <img src={logo} style={{ height: "35px" }} alt='Logo' />
        </Link>
        <Searchbar/>
    </Stack>
  )
}

export default Navbar
