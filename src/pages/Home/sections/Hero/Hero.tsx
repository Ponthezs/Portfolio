import { Grid, styled, Container, Typography, Button } from "@mui/material"
import Avatar from "../../../../images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



const Hero = () => {
  
    const StyledHero = styled("div") (()=> ({
      
      backgroundColor: "black",
      height: "100vh"
      
    })) 

    const StyledImg = styled("img") (()=> ({
      
      width: "100%",
      borderRadius: "50%"
      
    })) 

    return (
      <>
          <StyledHero>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography color="primary" variant="h1" textAlign="center">Felipe Pontes</Typography>
                  <Typography color="primary" variant="h2" textAlign="center">Student Software Engineering</Typography>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Button>
                        <DownloadIcon/>
                        Download CV
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button>
                        <AlternateEmailIcon/>
                        Contact me
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            </Container>
          </StyledHero>
        </>
    )
  }
  
  export default Hero