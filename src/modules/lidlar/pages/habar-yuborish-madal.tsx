import {
    Box,
    Modal,
    ButtonBase,
    Typography,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    TextField,
    Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useHabarYuborish } from "../hooks/use-habar-yuborish";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRef, useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
};


const HabarYuborishMadal = () => {
    const { isOpen, onClose } = useHabarYuborish()
    const [habarState, setHabarState] = useState<"start" | "end">("start")
    const [andozaSate, setAndozaState] = useState("")
    const xabarRef = useRef(null)

    const labelSMS = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const labelBOT = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleOk = () => {
        setHabarState("end")
    };

    const handleSave = () => {

    }

    const users = [
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
        {
            name: "Jane Cooper",
            number: "+998 99 876 54 32"
        },
    ]
    const andoza = [
        "andoza1",
        "andoza2",
        "andoza3",
        "andoza4",
    ]

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {
                    habarState === "start" ? (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "8px 20px",
                                    borderBottom: "1px solid #CFD0D3",
                                }}
                            >
                                <Box className="text-[16px] font-medium text-[#3D444F] flex items-center ">
                                    <Box onClick={onClose}><ArrowBackIosIcon sx={{ fontSize: '16px', cursor: 'pointer' }} /></Box>
                                    <span>O’quvchilar ro’yxati ({users.length})</span>
                                </Box>
                                <CloseIcon
                                    sx={{ fontSize: "28px" }}
                                    onClick={onClose}
                                    style={{ cursor: "pointer" }}
                                />
                            </Box>
                            <Box sx={{ padding: "10px 0", width: "100%", maxHeight: '300px', overflowY: 'auto' }}>
                                <Box sx={{ padding: '0 25px' }}>
                                    {
                                        users.map((item) => (
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBlock: '12px' }}>
                                                <img src="/public/images/Avatar.png" />
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span className="text-sm text-[#0D1523] ">{item.name}</span>
                                                    <span className="text-[#6E737B] text-[12px]">{item.number}</span>
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
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
                                        color: "white",
                                        backgroundColor: "#49BE6A",
                                        padding: "12px 25px",
                                        borderRadius: "4px",
                                        fontWeight: "500",
                                    }}
                                    onClick={handleOk}
                                >
                                    Ok
                                </ButtonBase>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "8px 20px",
                                    borderBottom: "1px solid #CFD0D3",
                                }}
                            >
                                <Box className="text-[16px] font-medium text-[#3D444F] flex items-center ">
                                    <span>Xabar yuborish</span>
                                </Box>
                                <CloseIcon
                                    sx={{ fontSize: "28px" }}
                                    onClick={onClose}
                                    style={{ cursor: "pointer" }}
                                />
                            </Box>
                            <Box sx={{ padding: "30px 25px", width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "7px" }}>
                                    <Typography variant="body2" color="#3D444F">O’quvchilar</Typography>
                                    <button onClick={() => setHabarState("start")}><Typography sx={{ cursor: 'pointer' }} variant="body1" color="#49BE6A">O’quvchilar ro’yxati</Typography></button>
                                </Box>
                                <FormControl sx={{ width: "260px" }}>
                                    <FormLabel
                                        sx={{
                                            fontSize: "14px",
                                            color: "black !important",
                                            paddingBottom: "10px",
                                        }}
                                    >
                                        <span>Andoza tanlang</span>
                                    </FormLabel>

                                    <Select
                                        value={andozaSate}
                                        onChange={(e) => setAndozaState(e.target.value)}
                                        renderValue={(select) =>
                                            select ? (
                                                select
                                            ) : (
                                                <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                                            )
                                        }
                                        displayEmpty
                                        sx={{
                                            height: "45px",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #6E737B",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                            {
                                                border: "1px solid #49BE6A",
                                            }
                                        }}
                                        inputProps={{ "aria-label": "Without label" }}
                                    >
                                        {andoza.map((item) => (
                                            <MenuItem
                                                sx={{
                                                    "&.Mui-selected": {
                                                        backgroundColor: "#49BE6A !important",
                                                        color: "white",
                                                    },
                                                    "&:hover": {
                                                        backgroundColor: "#49BE6A !important",
                                                        color: "white",
                                                    },
                                                }}
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ paddingInline: '25px' }}>
                                <TextField
                                    multiline
                                    inputRef={xabarRef}
                                    rows={4}
                                    variant="outlined"
                                    placeholder="Xabar yozing..."
                                    fullWidth
                                    sx={{
                                        backgroundColor: "#f9f9f9",
                                        marginTop: "10px",
                                        borderRadius: "4px",
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "4px",
                                            "& fieldset": {
                                                border: "1px solid #6E737B",
                                            },
                                            "&.Mui-focused fieldset": {
                                                border: "1px solid #49BE6A",
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    padding: "16px 20px",
                                }}
                            >
                                <Box sx={{display:'flex', alignItems:'center', gap:'30px'}}>
                                    <Box sx={{display:'flex', alignItems:'center' }}>
                                        <Checkbox {...labelSMS} defaultChecked />
                                        <Typography variant="body2">SMS orqali</Typography>
                                    </Box>
                                    <Box sx={{display:'flex', alignItems:'center' }}>
                                        <Checkbox {...labelSMS} defaultChecked />
                                        <Typography variant="body2">Telegram bot orqali</Typography>
                                    </Box>
                                </Box>
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
                                    Ok
                                </ButtonBase>
                            </Box>
                        </>
                    )
                }
            </Box>
        </Modal>
    );
};

export default HabarYuborishMadal