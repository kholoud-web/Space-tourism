import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

const image = "/assets/technology/background-technology-desktop.jpg";




export default function Technology(){
   const [tech , setTech] = useState([]);
   const [index , setIndex] = useState(0);
  const [loading,setLoading] = useState(true);
   
 
  useEffect(()=>{
     fetch ("/data.json").
     then((res)=>res.json())
     .then((data)=>{
      if(data&& Array.isArray(data.technology)){
            setTech(data.technology);
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
     
  const current = tech[index];

  if(loading){
     return <Typography sx={{ color: "white" }}>Loading...</Typography>;
  }

  if(!current){
    return <Typography sx={{ color: "white" }}>No  data available</Typography>;
  }

    return(
        <Box sx={{backgroundImage:`url(${image})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 minHeight: "100vh",
                py:{xs:5,md:8},
                px:{xs:2, md:6},
                color:"white"
                 }}>
            <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column" }}>
                {/* heading */}
                 <Box >
                      <Typography variant='h4' sx={{color:"white", opacity:0.7, 
                      fontFamily:"Bellefair ,serif", 
                       mb: { xs: 4, md: 6 },
                      letterSpacing: 3,
                      fontSize: { xs: "1.2rem", md: "2rem" },
                      mt: { xs: 6, md: 10 },
                      }}>  
                    03 Space launch 101
                  </Typography>
                 </Box>
                 {/* content */}
                 <Box sx={{display:"flex", flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
            flex: 1,}}>
                   {/* left side */}
                   <Box sx={{display:"flex",
                     flexDirection: { xs: "row", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-start" },
              gap: { xs: 3, md: 0 },
              width: { xs: "100%", md: "50%" },
              order: { xs: 2, md: 1 },}}>
                    <Box sx={{display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: { xs: 1, md: 3 },
                justifyContent: { xs: "center", md: "flex-start" },m:6}}>
                       {tech.map((_, i) => (
                            <Button
                             key={i}
                             onClick={() => setIndex(i)}
                             className={i === index ? "active" : ""}
                             sx={{
                                width: { xs: 36, md: 50 },
                    height: { xs: 36, md: 50 },
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.5)",
                    backgroundColor: i === index ? "white" : "transparent",
                    color: i === index ? "#000" : "white",
                    fontFamily: "Bellefair, serif",
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: i === index ? "white" : "rgba(255,255,255,0.15)",
                    },
                             }}
                           >
                             {i + 1}
                           </Button>
                         ))}
                      </Box>
                 {/* text content */}
                  <Box sx={{ width: { xs: "100%", md: "auto" } ,mt:5}}>
                     <Typography sx={{
                  opacity: 0.7,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  mb: 1,
                }}>this terminology
                </Typography>
                     <Typography  sx={{
                  fontFamily: "Bellefair, serif",
                  fontSize: { xs: "1.5rem", md: "2.25rem" },
                  mb: 2,
                }}>{current.name}
                </Typography>
                     <Typography  sx={{
                  opacity: 0.8,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  maxWidth: "100%",
                }}>{current.description}
                </Typography>
                  </Box>
                   </Box>
                   {/* right side */}
                   <Box  sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, md: 2 },
            }}>
                     <img style={{
                width: "100%",
                maxWidth: 400,
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
                     src={current.images?.portrait || current.images?.landscape ||"/assets/technology/image-placeholder.png"} alt={current.name} />
                   </Box>
                 </Box>
            </Container>
        </Box>
    )
}