import { Avatar, Box, Button, ButtonBase, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { GlobalTable } from "@componensts";
import { useGetLidsQuery } from "../hooks/queries";
import TelegramIcon from "@mui/icons-material/Telegram";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import CallIcon from "@mui/icons-material/Call";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import StatusMadal from "./status-madal";
import { LidsInterface } from "../types";

const Lidlar = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    total: 0,
    search: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const [status, setStatus] = useState("");
  const [userId, setuserId] = useState("");

  const openStatusMadal = (item: any) => {
    handleOpen();
    setStatus(item?.status || "Status yo'q");
    setuserId(item.id);
  };
  const { data } = useGetLidsQuery(pagination);

  const tableData =
    data?.map((item: LidsInterface) => ({
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
        <div>
          <ButtonBase
            type="submit"
            onClick={()=>openStatusMadal(item)}
            sx={{
              width: "225px",
              justifyContent: "space-between",
              fontSize: "16px",
              fontWeight: "500",
              border: `2px solid ${
                item?.status === "Status yo'q" ? "#FF5454" : "#3D444F"
              }`,
              padding: "5px",
              color: `${
                item?.status === "Status yo'q" ? "#FF5454" : "#122349"
              }`,
              borderRadius: "2px",
            }}
          >
            {item?.status || "Status yo'q"}
            <UnfoldMoreIcon />
          </ButtonBase>
        </div>
      ),
    })) || [];

  useEffect(() => {
    if (data) {
      setPagination((prev) => ({
        ...prev,
        total: data.length,
      }));
    }
  }, [data]);

  const columns = [
    { key: "id", title: "ID", flex: 1 },
    { key: "fullName", title: "Ism-familiya", flex: 1 },
    { key: "phone", title: "Telefon raqam", flex: 1 },
    { key: "lastContact", title: "So’nggi aloqa", flex: 1 },
    { key: "status", title: "Status", flex: 1 },
  ];

  return (
    <>
      <Box paddingTop="15px">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight="700">
            LIDLAR ({pagination.total})
          </Typography>
          <Button color="inherit">
            <AddIcon color="inherit" fontSize="large" />
          </Button>
        </Box>
        <GlobalTable
          columns={columns}
          data={
            tableData
              ? tableData.slice(
                  (pagination.page - 1) * pagination.pageSize,
                  pagination.page * pagination.pageSize
                )
              : []
          }
          pagination={pagination}
          onChange={setPagination}
        />
      </Box>
      <StatusMadal
        open={open}
        handleClose={handleClose}
        status={status}
        onStatusChange={setStatus}
        userId={userId}
      />
    </>
  );
};

export default Lidlar;
