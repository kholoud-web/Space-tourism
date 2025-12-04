import Box from '@mui/material/Box';
import bgImage from '/assets/home/background-home-desktop.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";



// animation
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};


export default function Home(){
  


    return(
    <>
    
<Helmet>
  <title>Space Tourism | Explore The Universe</title>
  <meta name="description" content="Experience the next generation of space travel. Explore destinations, choose your crew, and discover cutting-edge technology." />
  <meta name="description" content="Experience the next generation of space travel and explore planets, crew members, and advanced spacecraft technology." />
  <link rel="canonical" href="https://tourismspac.netlify.app.com/" />
</Helmet>

      <motion.div
         variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "100%", width: "100%" }}
      
      >
     <Box sx={{backgroundImage: `url(${bgImage})`,
             backgroundSize: "cover",
             backgroundPosition: "center", 
             width: "100%",
             minHeight: "100vh",
            backgroundRepeat: "no-repeat",
             py:{xs:5,md:8},
             px:{xs:2, md:6}
      
             }}>
       <Container maxWidth={false}  sx={{ display: "flex", flexDirection: "column", gap: 4 }} >
    
        {/* text */}
        <Box sx={{mt:"100px" , display:"flex",justifyContent:"space-around", alignItems:"center",
            flexDirection:{xs:"column", md:"row"}
        }}>
          <Box >
           <Typography variant="h4" sx={{color:"white", opacity:0.7, 
                  fontFamily:"Bellefair ,serif", 
                  mb:{xs:5},
                  letterSpacing: 3,
                  fontSize: { xs: "1.7rem", md: "2rem" },
                  mt: { xs: 6, md: 10 },}}>
             So, you want to travel to
          </Typography>
             <Typography variant="h1" sx={{color:"papayawhip",textTransform:"uppercase", my:4, fontSize:{xs:"5rem", md:"7rem"}, fontWeight:"bold",fontFamily:"Bellefair"}}>
               Space
            </Typography>
             <Typography variant="h6" sx={{color:"white", opacity:0.7, 
                  fontFamily:"Bellefair ,serif",fontSize: { xs: "1.7rem", md: "2rem" },}}>
                Let’s face it; if you want to go to space, you might as well<br/> genuinely go to 
               outer space and not hover kind of on the <br/>edge of it. Well sit back, and relax 
               because we’ll give you <br/> a truly out of this world experience!

            </Typography>
         </Box>
         {/* explore */}
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",
            mt:{xs:10, md:0}
         }}>
          <NavLink to="/Destination">
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
           </NavLink>
         </Box>
        </Box>
        </Container>
     </Box>
     </motion.div>
    </>  
    )
}