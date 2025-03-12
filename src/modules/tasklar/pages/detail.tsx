import {
    Box,
    Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTaskDetail } from "../hooks/use-detail";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
};

export const statuses = [
    { value: "status-yoq", label: "Status yo'q" },
    { value: "birinchi-kontakt", label: "Birinchi kontakt" },
    { value: "darsga-yozildi", label: "Darsga yozildi" },
    { value: "darsga-keldi", label: "Darsga keldi" },
    { value: "guruh-ochilishini-kutyapti", label: "Guruh ochilishini kutyapti" },
    { value: "aloqaga-chiqmayapti", label: "Aloqaga chiqmayapti" },
];
interface Props {
    data: any
}
export const DetailModal = ({data}: Props) => {
    console.log(data);
    
    const { onClose, open } = useTaskDetail()

    return (
        <Modal
            open={open}
            onClose={onClose}
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
                    <span className="text-[16px] font-semibold text-[#3D444F]">
                        Task
                    </span>
                    <CloseIcon
                        sx={{ fontSize: "28px" }}
                        onClick={onClose}
                        style={{ cursor: "pointer" }}
                    />
                </Box>
                <Box>
                    <Box>
                        <Box>
                            <Box>
                                <span>Qo'shildi</span>
                                <span>{data?.createdAt}</span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

