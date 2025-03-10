import { LidsInterface } from "../types";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useStatusModal } from "../hooks/use-status-modal";

const TableDataItems = (data: any) => {
  const { onOpen, setUserId, setStatus } = useStatusModal();

  const onOpenStatus = (id: string, status: string) => {
    onOpen();
    setUserId(id);
    setStatus(status);
  };

  return data?.map((item: LidsInterface) => ({
    id: item?.id || "N/A",
    fullName: (
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar
          alt={item?.user?.fullName || "No Name"}
          src={item?.user?.profileImage || "/public/images/Avatar.png"}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{ color: "black", fontWeight: 500, fontFamily: "Gilroy" }}
          >
            {item?.user?.fullName || "No Name"}
          </Typography>
          <Typography
            sx={{ color: "#6E737B", fontSize: "12px", fontFamily: "Gilroy" }}
          >
            {item?.user?.createdAt || "N/A"}
          </Typography>
        </Box>
      </Box>
    ),
    phone: (
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          color: "#263145",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "0%",
          lineHeight: "100%",
        }}
      >
        <span style={{ fontFamily: "Gilroy" }}>
          {item?.phone?.number || "N/A"}
        </span>
        {item.phone.isTelegram && (
          <Box className="w-[14px] h-[14px] bg-[#0088CC] rounded-full flex justify-center items-center">
            <TelegramIcon
              sx={{ color: "white", fontSize: "12px", paddingRight: "1px" }}
            />
          </Box>
        )}
      </Box>
    ),
    lastContact: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <SouthWestIcon
            sx={{ width: "14px", height: "14px" }}
            color={item?.lastContact?.isCall ? "success" : "error"}
          />
          <CallIcon sx={{ width: "14px", height: "14px" }} />
          <span className="text-[#6E737B] text-[10px] font-medium">
            {item?.lastContact?.createdAt || "N/A"}
          </span>
        </Box>
        <Typography
          variant="body2"
          sx={{
            maxWidth: "360px",
            fontFamily: "Gilroy",
            fontWeight: 500,
            color: "#000",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {item?.lastContact?.description || "No description available"}
        </Typography>
      </Box>
    ),
    status: (
      <Button
        onClick={() => onOpenStatus(item.id, item.status)}
        sx={{
          width: "265px",
          justifyContent: "space-between",
          fontSize: "14px",
          fontWeight: "500",
          border: `1px solid ${
            item?.status === "Status yo'q" ? "#FF5454" : "#3D444F"
          }`,
          color: `${item?.status === "Status yo'q" ? "#FF5454" : "#122349"}`,
          borderRadius: "2px",
        }}
      >
        {item?.status || "Status yo'q"}
        <UnfoldMoreIcon />
      </Button>
    ),
    hudud: (
      <Box sx={{ fontSize: "14px", fontWeight: "500", color: "#0D1523" }}>
        {item.hudud}
      </Box>
    ),
    birthday: (
      <Box sx={{ fontSize: "14px", fontWeight: "500", color: "#0D1523" }}>
        {item.birthday}
      </Box>
    ),
    manba: (
      <Box sx={{ fontSize: "14px", fontWeight: "500", color: "#0D1523" }}>
        {item.manba}
      </Box>
    ),
    addAdmin: (
      <Box sx={{ fontSize: "14px", fontWeight: "500", color: "#0D1523" }}>
        {item.addAdmin}
      </Box>
    ),
  }));
};

export { TableDataItems };
