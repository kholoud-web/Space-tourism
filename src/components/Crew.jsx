import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect,useState } from 'react';
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

const backImage = "/assets/crew/background-crew-desktop.jpg";


export default function Crew(){
  const [index , setIndex] = useState(0);
  const [crew,setCrew] = useState([]);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
     fetch ("/data.json").
     then((res)=>res.json())
     .then((data)=>{
      if(data&& Array.isArray(data.crew)){
            setCrew(data.crew);
            setIndex(0);
      }else{
        console.error("data not find");
      }
    })
    .catch((error)=>{
      console.error("error in loading" , error)
    })
    .finally(()=>setLoading(false));

     },[]) ;
     
  const current = crew[index];

  if(loading){
     return <Typography sx={{ color: "white" }}>Loading...</Typography>;
  }

  if(!current){
    return <Typography sx={{ color: "white" }}>No crew data available</Typography>;
  }

    return(
    <>
    <Helmet>
  <title>Space Tourism | Meet The Crew</title>
  <meta name="description" content="Meet our professional space crew with years of experience in missions beyond Earth." />
  <link rel="canonical" href="https://tourismspac.netlify.app/crew" />

  <meta name="keywords" content="space crew, astronauts, pilot, mission specialist" />

  <meta property="og:title" content="Meet The Space Crew" />
  <meta property="og:description" content="Learn about the experienced astronauts leading your mission." />
  <meta property="og:image" content="/share/crew.jpg" />
    </Helmet>

      <motion.div
       variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "100%", width: "100%" }}
    >
        <Box sx={{backgroundImage:`url(${backImage})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 minHeight: "100vh",
                py:{xs:5,md:8},
                px:{xs:2, md:6}
                 }}>
          <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column" }}>
            {/* heading */}
           <Box >
            <Typography variant='h4' sx={{color:"white", opacity:0.7, 
                  fontFamily:"Bellefair ,serif", 
                  mb:{xs:7},
                  letterSpacing: 3,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  mt: { xs: 8, md: 10 },
                  textAlign:{xs:"center",md:"left"}
                  }}>  
              02 Meet your crew
            </Typography>
           </Box>
           {/* content */}
          <Box sx={{display:"flex",flexDirection:{xs:"column-reverse" , md:"row"},
             alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
            flex: 1,}}>
             {/* left box */}
             <Box  sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>          
              <Typography variant='h6' sx={{opacity:0.7, ml:2,textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "0.85rem", md: "1rem" }}}>{current.role}</Typography>
             
              <Typography variant='h3' sx={{fontFamily: "Bellefair, serif",
                fontSize: { xs: "1.75rem", md: "3rem" },
                mt: 1,
                mb: 2,}}>{current.name}</Typography>
             
              <Typography sx={{ opacity: 0.8, lineHeight: 1.6, fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                {current.bio} 
               </Typography>
                  <Tabs
                value={index}
                onChange={(e, newValue) => setIndex(newValue)}
                centered
                sx={{
                  "& .MuiTabs-indicator": { display: "none" },
                  "& .MuiTab-root": {
                    minWidth: 0,
                    width:  { xs: 10, md: 14 },
                    height:{ xs: 10, md: 14 },
                    padding: 0,
                    mx: 0.5,
                    borderRadius: "50%",
                    backgroundColor: "grey",
                    opacity: 1,
                    minHeight: "auto",
                    mt: { xs: 4, md: 6 },
                    display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  },
                  "& .Mui-selected": {
                    backgroundColor: "white",
                  }
                }}
              >
                {crew.map((_, i) => (
                  <Tab key={i} />
                ))}
                </Tabs>
             </Box>
             {/* right box */}
             <Box sx={{ width: { xs: "100%", md: "45%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
               <img src= {current.images.webp} alt={current.name} loading='lazy'
                style={{maxWidth:"100%",width:"400px",height:"auto",objectFit:"contain"}}
               />
             </Box>
          </Box>            
        </Container>        
        </Box>
    </motion.div>
    </>
    )
}