import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from '/assets/destination/background-destination-desktop.jpg';
import Container from '@mui/material/Container';








export default function Destination(){
    return(
        <Box sx={{backgroundImage: `url(${img})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center", 
                     width: "100%",
                     height: "100vh",
                    backgroundRepeat: "no-repeat",
                    py:7,
                    }}>
          <Container maxWidth={false} sx={{height:"100%",display:"flex",alignItems:"center" , justifyContent:"center"}}>
            <Box sx={{display:"flex",pt:15, ml:10 , flex:1}}>
              <Box >
                <Typography variant="h4" sx={{color:"white", opacity:0.5, letterSpacing:3,mb:5}}>
                    01  PICK YOUR DESTINATION
                </Typography>
                <img src="/assets/destination/image-europa.png" alt="europa" 
                 style={{maxWidth:"400px" , objectFit:"contain"}}
                />
              </Box>
              <Box >

              </Box>

            </Box>
         </Container>          
        </Box>
    )
}