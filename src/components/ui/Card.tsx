import Badge from "@mui/material/Badge/Badge";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TimerIcon from "@mui/icons-material/Timer";

import imgSrc from "../../assets/1.png";
import Typography from "@mui/material/Typography/Typography";

const Card = () => {
  return (
    // width and height are temporary
    <Paper
      elevation={1}
      component="article"
      sx={{
        width: 400,
        height: 434,
        padding: "1rem 1rem 0 1rem",
      }}
    >
      <Box component="header">
        <Badge
          badgeContent={<FavoriteIcon sx={{ color: " #FF6363" }} />}
          color="secondary"
          sx={{
            top: -205,
            right: -330,
            "& .MuiBadge-badge": {
              width: 48,
              height: 48,
              borderRadius: "100%",
            },
          }}
        ></Badge>
        <img src={imgSrc} alt="" className="img img_card" />
      </Box>
      {/* <Badge badgeContent={<FavoriteIcon sx={{ color: " #DBE2E5" }} />} /> */}
      <Box>
        <Typography
          sx={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}
        >
          Lorem ipsum dolor sit amet consectetur
        </Typography>
      </Box>
      <Box sx={{ marginTop: "1.4rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TimerIcon />
            <Typography variant="subtitle1">30 Minutes</Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "1.5rem" }}
          >
            <RestaurantIcon />
            <Typography variant="subtitle1">snack</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;
