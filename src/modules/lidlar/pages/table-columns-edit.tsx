import { Box, Modal, ButtonBase } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useColumnsEdit } from "../hooks/use-columns-edite";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import IOSSwitch from "@utils/sweetch";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "2px",
};

export const columnsArray = [
  { id: "id", label: "ID" },
  { id: "name", label: "Ism-familiya" },
  { id: "phone", label: "Telefon raqam" },
  { id: "region", label: "Hudud" },
  { id: "source", label: "Manba" },
  { id: "dob", label: "Tug’ilgan kun" },
  { id: "status", label: "Status" },
  { id: "admin", label: "Qo’shgan admin" },
  { id: "comment", label: "Kommentariya" },
];

const SortableItem = ({ item, onToggle }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={itemStyle}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #00000033",
        padding: "12px 20px",
        cursor: "grab",
      }}
      {...attributes}
      {...listeners}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <DragHandleIcon sx={{ fontSize: "20px", color: "#3D444F" }} />
        <p className="text-[14px] font-medium text-[#3D444F]">{item.label}</p>
      </Box>
      <IOSSwitch checked={!!item.checked} onChange={() => onToggle(item.id)} />
    </Box>
  );
};

export const TableColumnsEdit = () => {
  const { isOpen, onClose } = useColumnsEdit();
  const [items, setItems] = useState(
    columnsArray.map((item) => ({ ...item, checked: false }))
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleToggle = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Modal
      open={isOpen}
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
          <span className="text-[16px] font-medium text-[#3D444F]">
            Jadval ustunlarini tahrirlash
          </span>
          <CloseIcon
            sx={{ fontSize: "28px" }}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <Box sx={{ padding: "10px 20px", width: "100%" }}>
              {items.map((item) => (
                <SortableItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                />
              ))}
            </Box>
          </SortableContext>
        </DndContext>
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
              color: "#3D444F",
              padding: "12px 25px",
              border: "1px solid #3D444F",
              borderRadius: "4px",
              fontWeight: "500",
            }}
            onClick={onClose}
          >
            Bekor qilish
          </ButtonBase>
          <ButtonBase
            sx={{
              fontSize: "16px",
              color: "white",
              backgroundColor: "#49BE6A",
              padding: "12px 25px",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            Saqlash
          </ButtonBase>
        </Box>
      </Box>
    </Modal>
  );
};
