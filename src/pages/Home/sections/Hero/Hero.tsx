import { Grid, styled } from "@mui/material"
import Avatar from "../../../../images/avatar.jpg"


const Hero = () => {
  
    const StyledHero = styled("div") (()=> ({
      
      backgroundColor: "black"
      
    })) 

    const StyledImg = styled("img") (()=> ({
      
      width: "30%",
      borderRadius: "50%"
      
    })) 

    return (
      <>
        <StyledHero>

        <Grid container spacing={2}>
            <Grid item xs={8}>
              
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
            <Grid item xs={8}>
              
            </Grid>
          </Grid>
          Ola
          <StyledImg src={Avatar} />

        </StyledHero>
      </>
    )
  }
  
  export default Hero