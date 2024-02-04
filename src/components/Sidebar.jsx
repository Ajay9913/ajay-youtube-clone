import { Category } from "@mui/icons-material";
import { HomeCat } from "../utils/constant";
import { Stack } from "@mui/material";

const Sidebar = ({selectedCat, setselectedCat}) => {
  return (
    <Stack px={2} py={1} className="sidebarbtns" sx={{ display:"flex", flexDirection:{xs:"row", md:"column"}, justifyContent:{xs:"center", md:"start"}, height:"95%"}}>

        { HomeCat.map((Category)=>(
            <button 
            onClick={()=>setselectedCat(Category.name)}
            className="sidebar-btn" 
            style={{textAlign:"left", display:"flex", alignItems:"center",
            background: Category.name === selectedCat && '#FC1503',
            borderRadius:"20px", padding:"5px 10px"
            }}
            key={Category.name}
            >
                <span style={{marginRight:"10px", display:"flex", alignItems:"center"}}>{Category.icon}</span>
                <span>{Category.name}</span>
            </button>
        )
        )}

    </Stack>
  )
}

export default Sidebar
