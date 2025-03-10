import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, ButtonBase, Menu, MenuItem } from "@mui/material";
import { statuses } from "./status-madal";
import { useTableHudud } from "../hooks/use-table-hudud";
import { useTableStatus } from "../hooks/use-table-status";
import { NestedMenuItem } from "mui-nested-menu";

const TableColumns = () => {
  const { onClose, onOpen, anchorEl, open } = useTableHudud();
  const {
    onClose: statusOnClose,
    onOpen: statusOnOpen,
    anchorEl: statusAnchorEl,
    open: statusOpen,
    addStatus: statusAddStatus,
    status: allStatus,
  } = useTableStatus();

  const onStatusMenuItem = (label: string) => {
    if (!allStatus.includes(label)) {
      statusAddStatus(label);
    }
    statusOnClose();
  };

  const hududArray = [
    {
      label: "Toshkent",
      filials: ["Chilonzor", "Yunusobod", "Sergeli"],
    },
    {
      label: "Samarqand",
      filials: ["Registon", "Qo‘shhovuz", "Jomboy"],
    },
    {
      label: "Farg‘ona",
      filials: ["Marg‘ilon", "Qo‘qon", "Rishton"],
    },
  ];

  return [
    { key: "id", title: "ID", flex: 1 },
    { key: "fullName", title: "Ism-familiya", flex: 1 },
    { key: "phone", title: "Telefon raqam", flex: 1 },
    { key: "lastContact", title: "So’nggi aloqa", flex: 1 },
    {
      key: "status",
      title: (
        <Box>
          <ButtonBase
            disableRipple
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "white",
              textTransform: "uppercase",
              "&:active": {
                backgroundColor: "transparent",
              },
            }}
            onClick={statusOnOpen}
          >
            <span>Status</span>
            {statusOpen ? (
              <KeyboardArrowUp sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "white" }} />
            )}
          </ButtonBase>

          <Menu
            anchorEl={statusAnchorEl}
            open={statusOpen}
            onClose={statusOnClose}
          >
            {statuses.map((item) => (
              <MenuItem
                key={item.label}
                sx={{
                  "&:hover": {
                    backgroundColor: "#49BE6A",
                    color: "white",
                  },
                }}
                onClick={() => onStatusMenuItem(item.label)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ),
      flex: 1,
    },
    {
      key: "hudud",
      title: (
        <Box>
          <ButtonBase
            disableRipple
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "white",
              textTransform: "uppercase",
              "&:active": {
                backgroundColor: "transparent",
              },
            }}
            onClick={onOpen}
          >
            <span>Hudud</span>
            {open ? (
              <KeyboardArrowUp sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "white" }} />
            )}
          </ButtonBase>

          <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
            {hududArray.map((hudud) => (
              <NestedMenuItem
                sx={{
                  width: "200px",
                  marginInline: "1px",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#49BE6A",
                  },
                }}
                key={hudud.label}
                label={hudud.label}
                parentMenuOpen={Boolean(anchorEl)}
              >
                {hudud.filials.map((filial) => (
                  <MenuItem
                    key={filial}
                    sx={{
                      width: "200px",
                      marginInline: "1px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#49BE6A",
                      },
                    }}
                  >
                    {filial}
                  </MenuItem>
                ))}
              </NestedMenuItem>
            ))}
          </Menu>
        </Box>
      ),
      flex: 1,
    },
    { key: "manba", title: "Manba", flex: 1 },
    { key: "birthday", title: "Tug'ulgan kun", flex: 1 },
    { key: "addAdmin", title: "Qo'shgan admin", flex: 1 },
  ];
};

export default TableColumns;
