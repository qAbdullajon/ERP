import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  FormControl,
  FormLabel,
  InputBase,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { useAddMadal } from "../hooks/use-add-modal";
import { PatternFormat } from "react-number-format";
import { useRef, useState } from "react";
import { statuses } from "./status-madal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 980,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "0px",
  maxHeight: "90vh",
  overflow: "auto",
};

const AddToLidMadal = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastRef = useRef<HTMLInputElement | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);
  const parentNameRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLInputElement | null>(null);

  const { open, onClose } = useAddMadal();
  const [birthDate, setBirthDate] = useState(null);
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [lidStatus, setLidStatus] = useState("");
  const [manba, setManba] = useState("");
  const [jins, setJins] = useState("");

  const viloyatlar = [
    {
      viloyat: "Toshkent sh",
      tuman: [
        "Shayxontohur",
        "Chilonzor",
        "Yunusobod",
        "Yakkasaroy",
        "Yashnobod",
      ],
    },
    { viloyat: "Farg'ona", tuman: [] },
    { viloyat: "Andijon", tuman: [] },
    { viloyat: "Namangan", tuman: [] },
    { viloyat: "Sirdaryo", tuman: [] },
  ];
  const manbalar = [
    "Youtube",
    "Instagram",
    "TikTok",
    "Telegram",
    "Do'stimdan eshitdim",
  ];

  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onSubmit = () => {
    console.log(
      nameRef.current?.value,
      lastRef.current?.value,
      numberRef.current?.value,
      parentNameRef.current?.value,
      commentRef.current?.value,
      birthDate,
      region,
      district,
      lidStatus,
      manba,
      jins
    );
  };

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
          <span className="text-[16px] font-medium text-[#3D444F]">
            Yangi lid qo’shish
          </span>
          <CloseIcon
            sx={{ fontSize: "28px" }}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              width: "100%",
              paddingBottom: "30px",
              borderBottom: "1px solid #CFD0D3",
            }}
          >
            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Ism</span> <span className="text-[red]">*</span>
              </FormLabel>
              <InputBase
                placeholder="Ismni kiriting..."
                required
                inputRef={nameRef}
                sx={{
                  borderRadius: "4px",
                  px: "15px",
                  py: "5px",
                  fontSize: "14px",
                  border: "1px solid #49BE6A",
                  "&::placeholder": {
                    color: "#6E737B",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Familiya</span> <span className="text-[red]">*</span>
              </FormLabel>
              <InputBase
                inputRef={lastRef}
                placeholder="Familiyasini kiriting..."
                required
                sx={{
                  borderRadius: "4px",
                  px: "15px",
                  py: "5px",
                  fontSize: "14px",
                  border: "1px solid #49BE6A",
                  "&::placeholder": {
                    color: "#6E737B",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Telefon raqami</span>{" "}
                <span className="text-[red]">*</span>
              </FormLabel>
              <PatternFormat
                inputRef={numberRef}
                format="+998 (##) ### ## ##"
                mask="_"
                allowEmptyFormatting
                id="phone"
                placeholder="+998 (__) ___ __ __"
                customInput={InputBase}
                sx={{
                  borderRadius: "4px",
                  px: "15px",
                  py: "5px",
                  fontSize: "14px",
                  border: "1px solid #49BE6A",
                  "&::placeholder": {
                    color: "#6E737B",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              width: "100%",
              paddingBlock: "30px",
            }}
          >
            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Otasining ismi</span>
              </FormLabel>
              <InputBase
                placeholder="Otasining ismi"
                required
                inputRef={parentNameRef}
                sx={{
                  borderRadius: "4px",
                  px: "15px",
                  py: "5px",
                  fontSize: "14px",
                  border: "1px solid #49BE6A",
                  "&::placeholder": {
                    color: "#6E737B",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Viloyat</span>
              </FormLabel>

              <Select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                renderValue={(select) =>
                  select ? (
                    select
                  ) : (
                    <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                  )
                }
                displayEmpty
                sx={{
                  height: "40px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #49BE6A !important",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {viloyatlar.map((item) => (
                  <MenuItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                    }}
                    key={item.viloyat}
                    value={item.viloyat}
                  >
                    {item.viloyat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: "33%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Tumani</span>
              </FormLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                renderValue={(select) =>
                  select ? (
                    select
                  ) : (
                    <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                  )
                }
                displayEmpty
                sx={{
                  height: "40px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #49BE6A !important",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {viloyatlar[0].tuman.map((item) => (
                  <MenuItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormControl sx={{ width: "25%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Lid statusi</span>
              </FormLabel>

              <Select
                value={lidStatus}
                onChange={(e) => setLidStatus(e.target.value)}
                renderValue={(select) =>
                  select ? (
                    select
                  ) : (
                    <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                  )
                }
                displayEmpty
                sx={{
                  height: "40px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #49BE6A !important",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {statuses.map((item) => (
                  <MenuItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                    }}
                    key={item.label}
                    value={item.label}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "25%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Klayotgan manbasi</span>
              </FormLabel>

              <Select
                value={manba}
                onChange={(e) => setManba(e.target.value)}
                renderValue={(select) =>
                  select ? (
                    select
                  ) : (
                    <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                  )
                }
                displayEmpty
                sx={{
                  height: "40px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #49BE6A !important",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {manbalar.map((item) => (
                  <MenuItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "25%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Tug‘ilgan sana</span>
              </FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={birthDate}
                  onChange={(newValue: any) => setBirthDate(newValue)}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      placeholder: "Sanani kiriting",
                      sx: {
                        height: "40px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        "& .MuiOutlinedInput-root": {
                          height: "40px",
                        },
                        "& .MuiOutlinedInput-input": {
                          height: "40px",
                          padding: "10px 14px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #49BE6A",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #49BE6A !important",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl sx={{ width: "25%" }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#065FD4",
                  paddingBottom: "10px",
                }}
              >
                <span>Jinsi</span>
              </FormLabel>

              <Select
                value={jins}
                onChange={(e) => setJins(e.target.value)}
                renderValue={(select) =>
                  select ? (
                    select
                  ) : (
                    <Typography sx={{ color: "#6E737B" }}>Tanlang</Typography>
                  )
                }
                displayEmpty
                sx={{
                  height: "40px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #49BE6A !important",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {["Erkak", "Ayol"].map((item) => (
                  <MenuItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#49BE6A !important",
                        color: "white",
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Accordion
              disableGutters
              square
              sx={{
                boxShadow: "none",
                "&:before": { display: "none" },
                width: "fit-content",
              }}
              expanded={expanded === "panel"}
              onChange={handleChange("panel")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  height: "26px",
                  minHeight: "26px",
                  padding: "0 5px",
                  marginBlock: "30px 0",
                  width: "fit-content",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <PlayArrowIcon
                    sx={{
                      color: "#49BE6A",
                      fontSize: "20px",
                      transform:
                        expanded === "panel" ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "0.3s",
                    }}
                  />
                  <Typography
                    component="span"
                    sx={{ fontWeight: "medium", color: "#065FD4", fontSize: "14px" }}
                  >
                    Qo’shimcha kontaktlar
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "white",
                  color: "#333",
                  display: expanded === "panel" ? "block" : "none",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <FormLabel
              sx={{
                fontSize: "14px",
                color: "#065FD4",
              }}
            >
              <span>Kommentariya</span>
            </FormLabel>
            <TextField
              multiline
              inputRef={commentRef}
              rows={3}
              variant="outlined"
              placeholder="Label"
              fullWidth
              sx={{
                backgroundColor: "#f9f9f9",
                marginTop: "10px",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  "& fieldset": {
                    border: "1px solid #49BE6A",
                  },
                  "&:hover fieldset": {
                    border: "1px solid #49BE6A",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #49BE6A",
                  },
                },
              }}
            />
          </Box>
        </Box>
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
            onClick={onSubmit}
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

export default AddToLidMadal;