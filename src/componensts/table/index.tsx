import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box
} from "@mui/material";
import { useState } from "react";

interface TableType {
  columns: { key: string; title: any; flex: number, align?: string }[];
  data: any[];
  pagination: { page: number; pageSize: number; total: number };
  checked: boolean
  maxWidth?: string
  onOpen?: any
  onChange: (pagination: {
    page: number;
    pageSize: number;
    total: number;
    search: string;
    status: string;
  }) => void;
}

const GlobalTable = ({
  columns,
  data,
  checked,
  maxWidth,
  onOpen
}: TableType) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === data.length ? [] : data.map((row) => row.id)
    );
  };

  const handleSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleDetail = (row:any) => {
    onOpen()
    
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "15px",
        boxShadow: "none",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Table
        sx={{
          borderCollapse: "separate",
          borderSpacing: "0 3px",
          minWidth: maxWidth || "800px",
        }}
      >
        <TableHead sx={{ backgroundColor: "#122349" }}>
          <TableRow sx={{ height: "50px" }}>
            {checked && (
              <TableCell width={"10px"}>
                <Checkbox
                  sx={{
                    color: "white",
                    backgroundColor: "white",
                    width: "17px",
                    height: "17px",
                    padding: 1,
                    marginLeft: "13px",
                    borderRadius: 1,
                    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                      color: "#49BE6A",
                    },
                    "&:hover": { backgroundColor: "white" },
                  }}
                  checked={selectedRows.length === data.length && data.length > 0}
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < data.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
            )}
            {columns.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  textAlign: col?.align ? col.align : "start"
                }}
              >
                {col.title}
              </TableCell>
            ))}


          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id || row.task}
              onClick={()=>handleDetail(row)}
              sx={{ cursor: "pointer" }}
            >
              {checked && (
                <TableCell width={"10px"}>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelect(row.id)}
                  />
                </TableCell>
              )}
              {columns.map((col) => (
                <TableCell key={col.key} sx={{ textAlign: col.align || "start" }}>
                  <Box sx={{ display: col.align ? "flex" : "", justifyContent: "center", alignItems: "center" }}>
                    {row[col.key]}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default GlobalTable;
