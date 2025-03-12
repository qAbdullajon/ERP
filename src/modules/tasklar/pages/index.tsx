import { Box, Button, ButtonBase, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useGetTasksQuery } from "../hooks/queries";
import { useEffect, useState } from "react";
import tableColumns from "./columns";
import tableRows from "./rows";
import { GlobalTable } from "@componensts";
import { useTaskDetail } from "../hooks/use-detail";
import { DetailModal } from "./detail";

const Tasklar = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    total: 0,
    search: "",
  });
  const { onOpen } = useTaskDetail()

  const { data } = useGetTasksQuery(pagination)
  useEffect(() => {
    if (data) {
      setPagination((prev) => ({
        ...prev,
        total: data.length,
      }));
    }
  }, [data]);

  const handleTaskLid = () => {

  }

  const columns = tableColumns()

  const tableData = tableRows(data)

  return (
    <>
      <Box>
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
          <Button onClick={handleTaskLid} color="inherit">
            <AddIcon color="inherit" fontSize="medium" />
          </Button>
        </Box>
        <Box sx={{ display: 'flex', paddingBlock: '24px', gap: "16px" }}>
          <ButtonBase sx={{ fontWeight: '500', color: 'white', backgroundColor: '#49BE6A', borderRadius: '30px', padding: '10px 15px' }}>
            Dolzarb <span className="font-normal opacity-80"> (24)</span>
          </ButtonBase>
          <ButtonBase sx={{ fontWeight: '500', border: "1px solid #6E737B", borderRadius: '30px', padding: '10px 15px' }}>
            Tugallangan {(<span className="text-[#6E737B]">(41)</span>)}
          </ButtonBase>
        </Box>

        <GlobalTable
          columns={columns}
          checked={false}
          maxWidth={"800px"}
          onOpen={onOpen}
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
      <DetailModal data={data} />
    </>
  )
}

export default Tasklar