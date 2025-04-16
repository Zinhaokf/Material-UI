import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const contacts = [
  { name: "John Doe", username: "@johndoe", avatar: "https://mui.com/static/images/avatar/1.jpg" },
  { name: "Jane Smith", username: "@janesmith", avatar: "https://mui.com/static/images/avatar/2.jpg" },
  { name: "Mike Johnson", username: "@mikejohnson", avatar: "https://mui.com/static/images/avatar/3.jpg" },
  { name: "Emily Davis", username: "@emilydavis", avatar: "https://mui.com/static/images/avatar/4.jpg" },
];

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ position: "fixed", width: "360px", padding: "16px" }}>
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9e9e9e" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          marginBottom: "16px",
          backgroundColor: "#1f2229",
          borderRadius: "25px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            "& fieldset": { border: "none" },
            color: "#fff",
          },
          "& input": { color: "#fff" },
        }}
      />

      {/* Danh sách liên hệ */}
      <Box
        sx={{
          backgroundColor: "#1f2229",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600, marginBottom: "12px" }}>
          Người liên hệ gần đây
        </Typography>

        <List>
          {filteredContacts.map((contact, index) => (
            <ListItem
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#2a2d35",
                  borderRadius: "12px",
                },
                paddingY: "8px",
              }}
              secondaryAction={
                <Tooltip title="Follow">
                  <IconButton edge="end" sx={{ color: "#6ec207" }}>
                    <PersonAddAlt1Icon />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.username}
                primaryTypographyProps={{ color: "#fff" }}
                secondaryTypographyProps={{ color: "#aaa" }}
              />
            </ListItem>
          ))}
        </List>

        {filteredContacts.length === 0 && (
          <Typography color="gray" textAlign="center" mt={2}>
            Không tìm thấy kết quả
          </Typography>
        )}

        <Box mt={2} textAlign="right">
          <Link href="#" sx={{ color: "#6ec207", fontWeight: "bold" }}>
            Xem thêm
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
