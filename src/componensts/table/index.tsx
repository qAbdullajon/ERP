import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

interface TableType {
  columns: { key: string; title: string; flex: number }[];
  data: any[];
  pagination: { page: number; pageSize: number; total: number };
  onChange: (pagination: {
    page: number;
    pageSize: number;
    total: number;
    search: "";
  }) => void;
}

const GlobalTable = ({ columns, data, pagination, onChange }: TableType) => {
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

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "15px", boxShadow: "none" }}
    >
      <Table sx={{ borderCollapse: "separate", borderSpacing: "0 3px" }}>
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
                  "&.Mui-checked": { color: "#49BE6A" },
                  "&.MuiCheckbox-indeterminate": { color: "#49BE6A" },
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
                  fontFamily: "Gilroy",
                  minWidth: col.key === "id" ? "50px" : "auto",
                }}
              >
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ transform: "translateY(-4px)" }}>
          {data.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            return (
              <TableRow
                key={row.id}
                sx={{
                  border: "none",
                  backgroundColor: isSelected ? "#E6F4FF" : "#F6FBFF",
                }}
              >
                <TableCell sx={{ border: "none" }}>
                  <Checkbox
                    sx={{
                      color: "#122349",
                      "&.Mui-checked": { color: "#122349" },
                    }}
                    checked={isSelected}
                    onChange={() => handleSelect(row.id)}
                  />
                </TableCell>
                {columns.map((col) => (
                  <TableCell key={col.key} sx={{ border: "none" }}>
                    {row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={pagination.total}
        page={pagination.page - 1} 
        rowsPerPage={pagination.pageSize}
        onPageChange={(_, newPage) =>
          onChange({
            page: newPage + 1,
            pageSize: pagination.pageSize,
            total: pagination.total,
            search: "",
          })
        }
        rowsPerPageOptions={[]} 
      />
    </TableContainer>
  );
};

export default GlobalTable;
