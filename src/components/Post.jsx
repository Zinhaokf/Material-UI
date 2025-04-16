import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        bgcolor: "#0f1217",
        borderRadius: "25px",
        paddingBottom: 1,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        mb: 3,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="User"
            sx={{ width: 48, height: 48 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{ color: "#aaa" }} />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
              Diogo Forlan
            </Typography>
            <Typography sx={{ fontSize: 12, color: "#777" }}>
              9 giờ trước
            </Typography>
          </Box>
        }
      />

      <CardContent sx={{ pt: 0, pl: 7, pr: 2 }}>
        <Typography sx={{ color: "#e0e0e0", fontSize: 15 }}>{caption}</Typography>
      </CardContent>

      <Box sx={{ px: 2 }}>
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt="Post Image"
          sx={{
            borderRadius: "20px",
            mt: 1,
            maxHeight: 500,
            objectFit: "cover",
          }}
        />
      </Box>

      <CardActions sx={{ pl: 7, pt: 2, gap: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: "#FF3D00" }} />
            ) : (
              <FavoriteBorderOutlinedIcon sx={{ color: "#bbb" }} />
            )}
          </IconButton>
          <Typography color="#bbb">{likes}K</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon sx={{ color: "#bbb" }} />
          </IconButton>
          <Typography color="#bbb">{comment}K</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <TrendingUpOutlinedIcon sx={{ color: "#bbb" }} />
          </IconButton>
          <Typography color="#bbb">{view}M</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <ShareOutlinedIcon sx={{ color: "#bbb" }} />
          </IconButton>
          <Typography color="#bbb">{share}K</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
