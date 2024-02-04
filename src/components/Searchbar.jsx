import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { SearchResults } from './';

const Searchbar = () => {
  const [searchTerm, setSerarchTerm ] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`search/${searchTerm}`);
      setSerarchTerm('');
    }
  }

  return (
    <Paper 
    component={"form"} onSubmit={handleSubmit} 
    sx={{ borderRadius: "20px", background:"#fff", padding:"0px 10px" }}
    >
    <input className="search-bar" placeholder="Search" onChange={(e)=> setSerarchTerm(e.target.value)}  />

    <IconButton type="submit">
        <Search/>
    </IconButton>

    </Paper>
  )
}

export default Searchbar
