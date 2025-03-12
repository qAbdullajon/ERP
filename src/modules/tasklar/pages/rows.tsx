import { MoreVert } from "@mui/icons-material"
import { Box, ButtonBase, Menu, MenuItem, Typography } from "@mui/material"
import { useMenuStore } from "../hooks/popovers"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const tableRows = (data: any) => {
  const { anchorEl, onClose, onOpen, open } = useMenuStore()

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // ✅ Detail Page ochilishini to‘xtatadi
    onOpen(e);
  };
  

  return data?.map((item: any) => ({
    id: item.id,
    task: (
      <Typography variant="body2" sx={{ fontWeight: '500', color: "#263145", maxWidth: '382px' }}>
        {item.task}
      </Typography>
    ),
    "qo'shdi": (
      <Box sx={{ width: '32px', height: '32px', backgroundColor: '#EDB447', color: 'white', borderRadius: '50%', display: "flex", alignItems: 'center', justifyContent: "center" }}>
        {item.profileImage}
      </Box>
    ),
    ahamiyat: <Box sx={{ width: "20px", height: '20px', borderRadius: '2px', backgroundColor: item.ahamiyat === 1 ? "red" : "red" }} />,
    muddat: <Typography variant="body2" color="#3D444F">{item.muddat}</Typography>,
    status: "",
    izoh: <ButtonBase sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <img src="/public/images/u_comment.svg" alt="comment" />
      <span>{item.comments.length}</span>
    </ButtonBase>,
    actions:
      <ButtonBase>
        <ButtonBase
          onClick={handleOpen}
        >
          <MoreVert />
        </ButtonBase>

        <Menu anchorEl={anchorEl} open={open} onClose={onClose} sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#122349", 
            color: "white", 
          },
        }}>
          <MenuItem
            sx={{
              marginBlock: '1px',
              width: '176px',
              justifyContent: 'space-between',
            }}
          >
            <Typography>O’zgartirish</Typography>
            <EditIcon />
          </MenuItem>
          <MenuItem
            sx={{
              marginBlock: '1px',
              width: '176px',
              justifyContent: 'space-between',
            }}
          >
            <Typography>O’chirish</Typography>
            <DeleteIcon />
          </MenuItem>
        </Menu>
      </ButtonBase>
  }))
}

export default tableRows