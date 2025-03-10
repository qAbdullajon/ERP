import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

interface TableType {
  columns: { key: string; title: any; flex: number }[];
  data: any[];
  pagination: { page: number; pageSize: number; total: number };
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
  pagination,
  onChange,
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

  const handleStatusChange = (event: any) => {
    const newStatus = event.target.value;
    
    onChange({ ...pagination, status: newStatus, search: "" });
  };

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
          minWidth: "2200px",
        }}
      >
        <TableHead sx={{ backgroundColor: "#122349" }}>
          <TableRow sx={{ height: "50px" }}>
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
            {columns.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell width={"10px"}>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelect(row.id)}
                />
              </TableCell>
              {columns.map((col) => (
                <TableCell key={col.key}>{row[col.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GlobalTable;
