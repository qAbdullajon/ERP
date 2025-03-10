import { Box, Button, ButtonBase, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { GlobalTable } from "@componensts";
import { useGetLidsQuery } from "../hooks/queries";
import CloseIcon from "@mui/icons-material/Close";
import { TableDataItems } from "./table-data";
import TableColumns from "./table-columns";
import { useTableStatus } from "../hooks/use-table-status";
import { useColumnsEdit } from "../hooks/use-columns-edite";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { StatusModal } from "./status-madal";
import { TableColumnsEdit } from "./table-columns-edit";
import { useAddMadal } from "../hooks/use-add-modal";
import AddToLidMadal from "./add-lid-modal";

const Lidlar = () => {
  const { status, removeStatus } = useTableStatus();
  const { onOpen } = useColumnsEdit();
  const {onOpen:handleAddLid} = useAddMadal()
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    total: 0,
    search: "",
  });

  const { data } = useGetLidsQuery(pagination);
  const tableData = TableDataItems(data);

  useEffect(() => {
    if (data) {
      setPagination((prev) => ({
        ...prev,
        total: data.length,
      }));
    }
  }, [data]);

  const columns = TableColumns();

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
          <Button onClick={handleAddLid} color="inherit">
            <AddIcon color="inherit" fontSize="large" />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {status.length > 0 ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="text-[#0D1523] font-medium text-sm">
                Filter:
              </span>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {status.map((item: any) => (
                  <Box
                    key={item}
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      backgroundColor: "#CFD0D3",
                      borderRadius: "60px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 8px",
                    }}
                  >
                    <span>{item}</span>
                    <CloseIcon
                      onClick={() => removeStatus(item)}
                      sx={{
                        cursor: "pointer",
                        width: "14px",
                        height: "14px",
                        color: "#323232",
                        paddingTop: "1px",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ) : (
            <div></div>
          )}
          <ButtonBase
            onClick={onOpen}
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              gap: "6px",
              alignItems: "center",
              padding: "6px",
            }}
          >
            <ViewColumnIcon />
            <span>Ustunlarni tahrirlash</span>
          </ButtonBase>
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
      <StatusModal />
      <TableColumnsEdit />
      <AddToLidMadal />
    </>
  );
};

export default Lidlar;
