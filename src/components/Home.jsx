import Box from '@mui/material/Box';
import bgImage from '/assets/home/background-home-desktop.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



export default function Home(){
  


    return(
     <Box sx={{backgroundImage: `url(${bgImage})`,
             backgroundSize: "cover",
             backgroundPosition: "center", 
             width: "100%",
             height: "100vh",
            backgroundRepeat: "no-repeat",
            py:6,
      
             }}>
       <Container maxWidth={false} >
    
        {/* text */}
        <Box sx={{mt:"100px" , display:"flex",justifyContent:"space-around", alignItems:"center",
            flexDirection:{xs:"column", md:"row"}
        }}>
          <Box >
           <Typography variant="h4" sx={{color:"#ddd0d0ff", mt:10}}>
             So, you want to travel to
          </Typography>
             <Typography variant="h1" sx={{color:"papayawhip",textTransform:"uppercase", my:4, fontSize:"100px", fontWeight:"bold",fontFamily:"Bellefair"}}>
               Space
            </Typography>
             <Typography variant="h6" sx={{color:"#ddd0d0ff"}}>
                Let’s face it; if you want to go to space, you might as well<br/> genuinely go to 
               outer space and not hover kind of on the <br/>edge of it. Well sit back, and relax 
               because we’ll give you <br/> a truly out of this world experience!

            </Typography>
         </Box>
         {/* explore */}
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",
            mt:{xs:10, md:0}
         }}>
           <Button variant="contained" 
           sx={{backgroundColor:"papayawhip",
            color:"#0b0d17",
            borderRadius:"50%",
            width:"200px",
            height:"200px",
            fontSize:"24px",
            '&:hover': {
              backgroundColor: '#f0e6e6',
            },
           }}
           >Explore</Button>
         </Box>
        </Box>
        </Container>
     </Box>
    )
}