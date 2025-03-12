import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Box, ButtonBase, Menu, MenuItem } from "@mui/material"
import { useAhamiyatStore, useStatustStore } from "../hooks/popovers"
import { useEffect, useState } from "react"

const tableColumns = () => {
  const [ahamiyat, setAhamiyat] = useState("")
  const [status, setStatus] = useState("")
  const { anchorEl, onClose, open, onOpen } = useAhamiyatStore()
  const { anchorEl: anchorElStatus, onClose: onCloseStatus, onOpen: onOpenStatus, open: openStatus } = useStatustStore()

  const ahamiyatArray = [
    {
      value: 1,
      color: "#FF5454",
      label: "Yonmoqda"
    },
    {
      value: 1,
      color: "#EFE83B",
      label: "Muhim"
    },
    {
      value: 1,
      color: "#54C1FF",
      label: "O'rtacha"
    },
    {
      value: 1,
      color: "#CFD0D3",
      label: "Past"
    },
  ]
  const statusArray = [
    {
      value: 1,
      color: "#9EA1A7",
      label: "Bajarilishi kerak"
    },
    {
      value: 1,
      color: "#065FD4",
      label: "Bajarilmoqda"
    },
    {
      value: 1,
      color: "#49BE6A",
      label: "Bajarildi"
    },
    {
      value: 1,
      color: "#FF5454",
      label: "Rad etildi"
    },
  ]
  const handleAhamiyat = (label: string) => {
    setAhamiyat(label)
    onClose()
  }
  const handleStatus = (label: string) => {
    setStatus(label)
    onCloseStatus()
  }

  return [
    { key: "task", title: "TASK", flex: 1 },
    { key: "qo'shdi", title: "QO'SHDI", flex: 1, align: "center" },
    {
      key: "ahamiyat",
      align: "center",
      title: (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonBase
            disableRipple
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "white",
              textTransform: "uppercase",
              "&:active": {
                backgroundColor: "transparent",
              },
            }}
            onClick={onOpen}
          >
            <span>Ahamiyat</span>
            {open ? (
              <KeyboardArrowUp sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "white" }} />
            )}
          </ButtonBase>

          <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
            {ahamiyatArray.map((item) => (
              <MenuItem
                key={item.color}
                onClick={() => handleAhamiyat(item.label)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: "black",
                  width: '180px',
                  marginInline: '1px',
                  "&:hover": {
                    backgroundColor: "#E7E8E9",
                  },
                }}
              >
                <Box sx={{ width: "20px", height: "20px", backgroundColor: item.color, borderRadius: "2px" }}></Box>
                <span>{item.label}</span>
              </MenuItem>
            ))}
          </Menu>

        </Box>
      ),
      flex: 1,
    },
    { key: "muddat", title: "MUDDAT", flex: 1, align: "center" },
    {
      key: "status",
      align: "center",
      title: (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonBase
            disableRipple
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "white",
              textTransform: "uppercase",
              "&:active": {
                backgroundColor: "transparent",
              },
            }}
            onClick={onOpenStatus}
          >
            <span>Status</span>
            {openStatus ? (
              <KeyboardArrowUp sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "white" }} />
            )}
          </ButtonBase>

          <Menu anchorEl={anchorElStatus} open={openStatus} onClose={onCloseStatus}>
            {statusArray.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => handleStatus(item.label)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: "black",
                  width: '165px',
                  marginInline: '1px',
                  "&:hover": {
                    backgroundColor: "#E7E8E9",
                  },
                }}
              >
                <Box sx={{ width: "14px", height: "14px", backgroundColor: item.color, borderRadius: "50%" }}></Box>
                <span>{item.label}</span>
              </MenuItem>
            ))}
          </Menu>

        </Box>
      ),
      flex: 1,
    },
    { key: "izoh", title: "IZOH", flex: 1, align: "center" },
    {
      key: "actions",
      title: "",
      flex: 1
    }
  ]
}

export default tableColumns