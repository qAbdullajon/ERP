import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  ButtonBase,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePatchStatus } from "../hooks/mutations";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "8px",
};

const statuses = [
  { value: "status-yoq", label: "Status yo'q" },
  { value: "birinchi-kontakt", label: "Birinchi kontakt" },
  { value: "darsga-yozildi", label: "Darsga yozildi" },
  { value: "darsga-keldi", label: "Darsga keldi" },
  { value: "guruh-ochilishini-kutyapti", label: "Guruh ochilishini kutyapti" },
  { value: "aloqaga-chiqmayapti", label: "Aloqaga chiqmayapti" },
];

interface StatusModalProps {
  open: boolean;
  handleClose: () => void;
  status: string;
  onStatusChange: (newStatus: string) => void;
  userId: string;
}

const StatusModal = ({
  open,
  handleClose,
  status,
  onStatusChange,
  userId,
}: StatusModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const { mutate } = usePatchStatus();

  useEffect(() => {
    setSelectedStatus(status);
  }, [status]);

  const handleChange = (event: SelectChangeEvent) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
  };

  const handleSave = async () => {
    mutate({ id: userId, status: selectedStatus });
    onStatusChange(selectedStatus);
    handleClose()
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 20px",
            borderBottom: "1px solid #CFD0D3",
          }}
        >
          <span className="text-[20px] font-semibold text-[#3D444F]">
            Lidning statusi
          </span>
          <CloseIcon
            sx={{ fontSize: "28px" }}
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Box sx={{ padding: "30px 20px 20px 20px", width: "100%" }}>
          <FormControl fullWidth>
            <Select
              value={selectedStatus}
              onChange={handleChange}
              displayEmpty
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #6E737B",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #49BE6A",
                },
              }}
              inputProps={{ "aria-label": "Without label" }}
              MenuProps={{
                MenuListProps: {
                  sx: {
                    "& .MuiMenuItem-root": {
                      "&:hover": {
                        backgroundColor: "rgba(200, 200, 255, 0.2)",
                      },
                    },
                  },
                },
              }}
            >
              {statuses.map((item) => (
                <MenuItem key={item.label} value={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            padding: "16px 20px",
          }}
        >
          <ButtonBase
            sx={{
              fontSize: "16px",
              color: "#3D444F",
              padding: "12px 25px",
              border: "1px solid #3D444F",
              borderRadius: "4px",
              fontWeight: "500",
            }}
            onClick={handleClose}
          >
            Bekor qilish
          </ButtonBase>
          <ButtonBase
            sx={{
              fontSize: "16px",
              color: "white",
              backgroundColor: "#49BE6A",
              padding: "12px 25px",
              borderRadius: "4px",
              fontWeight: "500",
            }}
            onClick={handleSave}
          >
            Saqlash
          </ButtonBase>
        </Box>
      </Box>
    </Modal>
  );
};

export default StatusModal;
