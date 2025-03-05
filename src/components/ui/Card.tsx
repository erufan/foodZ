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
    <Paper elevation={1} component="article" sx={{ width: 400, height: 434 }}>
      <Box>
        <img src={imgSrc} alt="" className="card_banner" />
        <Badge
          badgeContent={<FavoriteIcon sx={{ color: " #FF6363" }} />}
          color="info"
        />
        {/* <Badge badgeContent={<FavoriteIcon sx={{ color: " #DBE2E5" }} />} /> */}
      </Box>
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
            <Typography>30 Minutes</Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "1.5rem" }}
          >
            <RestaurantIcon />
            <Typography>snack</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;
