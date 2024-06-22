import { Grid, styled, Container, Typography } from "@mui/material";
import Avatar from "../../../../images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";


export const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`

  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">Felipe Pontes</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">Student Software Engineering</Typography>
              <Grid container display="flex" justifyContent="center" spacing="10px">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                      <DownloadIcon />
                      <Typography>
                        Donwload CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <AlternateEmailIcon />
                    <Typography>
                        Contact me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero