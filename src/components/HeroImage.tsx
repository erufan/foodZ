import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import TimerIcon from "@mui/icons-material/Timer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import heroImage from "../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";
import Handpick from "../assets/Handpicked.svg?react";
import Recipes from "../assets/Recipes.svg?react";
import AvatarImage from "../assets/avatar/1.jpg";

const HeroImage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: 15,
        overflow: "hidden",
        padding: { lg: 0 },
      }}
    >
      <Grid container spacing={0}>
        <Grid
          size={6}
          sx={{
            padding: "3.1rem 0 3.1rem 3.1rem",
            backgroundColor: "primary.main",
          }}
        >
          <Button variant="contained" sx={{ marginBottom: "1.8rem" }}>
            <Recipes />
            Hot Recipes
          </Button>
          <Typography
            variant="h1"
            component="h2"
            sx={{ marginBottom: "1.8rem" }}
          >
            Spicy delicious chicken wings
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: "1.9rem" }}
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
          <Stack spacing={2} marginBottom="6.4rem">
            <Button variant="contained">
              <TimerIcon />
              30 Minutes
            </Button>
            <Button variant="contained">
              <RestaurantIcon />
              Chicken
            </Button>
          </Stack>
          <Stack spacing={15}>
            <Stack spacing={3}>
              <Avatar
                alt="Remy Sharp"
                src={AvatarImage}
                sx={{ width: 50, height: 50 }}
              />
              <Box>
                <Typography>john doe</Typography>
                <Typography component="time" dateTime="2022-03-15">
                  15 March 2022
                </Typography>
              </Box>
              <Box>
                <Typography></Typography>
              </Box>
            </Stack>
            <Button variant="contained">
              View Recipes <PlayCircleIcon />
            </Button>
          </Stack>
        </Grid>
        <Grid size={6} sx={{ position: "relative" }}>
          <img className="img" src={heroImage} alt="" />
          <Box
            component="span"
            sx={{ position: "absolute", top: 40, left: -50 }}
          >
            <Handpick />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroImage;
