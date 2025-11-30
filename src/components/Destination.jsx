import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from '/assets/destination/background-destination-desktop.jpg';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import{useState , useEffect} from 'react';
import data from '/public/data';





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Destination(){
    const [value, setValue] = useState(0);
    // fetching data json
     const[destinations , setDestinations]= useState([]);
    useEffect(()=>{
       fetch("/data.json")
       .then(res=>res.json())
       .then(data=>setDestinations(data.destinations));
    },[]);


     const current = destinations[value];
    if(!current) return null ;


    const handleChange = (event, newValue) => {
    setValue(newValue);
    }

    return(
        <Box sx={{backgroundImage: `url(${img})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center", 
                     width: "100%",
                     minHeight: "100vh",
                    backgroundRepeat: "no-repeat",
                    py:{xs:5,md:7},
                    px:{xs:2, md:4}
                    }}>
          <Container maxWidth={false} sx={{height:"100%",width:"100%",}}>
            {/* title */}
            <Box sx={{mt:"100px", ml:"30px"}}>
                 <Typography variant="h4"
                sx={{color:"white", opacity:0.8, 
                  fontFamily:"Bellefair",
                whiteSpace:{ xs: "normal", lg: "nowrap" }
                }}>
                    01  PICK YOUR DESTINATION
                </Typography>
            </Box>
            <Box sx={{display:"flex",pt:{ xs: 3, md: 5 }, ml:"auto",
               alignItems:"center", 
               justifyContent:"space-between",
               flexDirection:{xs:"column", md:"row"},
                width:"100%",
                 gap: { xs: 5, md: 0 }
               }}>
                {/*  image */}
             <Box  
             sx={{flex:1,maxWidth:{md:"50%"},
             textAlign:{xs:"center",md:"left"},
               display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flexStart" },

             }} >          
                <img src={current.images.webp} alt="current.name" 
                 style={{maxWidth:"400px" , objectFit:"contain",width:"100%"}}
                />
            </Box>
              {/* text and tabs */}
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",
                alignItems:{ xs: "center",lg:"center"},
                maxWidth:{md: "50%" },mt:{xs:8, md:0}}}>
            <Box sx={{borderBottom:"1px solid #ccc",paddingBottom:{ xs: 3, md: 6 }}} >
                {/* planets */}
             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example"
                          sx={{
                        '& .MuiTab-root': {
                          color: "white",
                          opacity:"0.7",
                          fontSize: { xs: "0.8rem", md: "1.2rem" },
                          py:  {xs: 1, md: 2 },
                          px: { xs: 1, md: 2 }
                        }
                      }}
>
                         {destinations.map((item,index)=>(
                          <Tab   sx={{color:"white",fontSize:"1.5rem"}}
                          key={item.name}
                          label= {item.name.toUpperCase()}
                           {...a11yProps(index)}
                          />
                         ))}
                        </Tabs>
             </Box>
              <Box>
                <Typography 
                  sx={{m:"15px",textTransform:"uppercase",fontFamily:"Bellefair"}}
                variant='h1'>{current.name}</Typography>
              </Box>
                  {destinations.map((item,index)=>(
                <CustomTabPanel value={value} index={index} key={item.name} >
                   <Typography sx={{ color: "white",opacity:"0.7", fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.6,maxWidth: { xs: "100%", md: "80%" } }}>
                     {item.description}
                   </Typography>
                </CustomTabPanel>
                ))}
            </Box>
                  {/* date and distance */}
         <Box sx={{display:"flex", 
          justifyContent:{ xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
           p:{ xs: 2, md: 3 },width:"100%",
           gap: { xs: 3, md: 0 }
           }}>
            <Box sx={{textAlign:{ xs: "center", md: "left" }}}>
                <Typography sx={{color:"gray", letterSpacing:2,fontSize: { xs: "0.75rem", md: "0.9rem" }}}>AVG. DISTANCE</Typography>
                <Typography sx={{color:"white", fontSize: { xs: "1rem", md: "1.5rem" }, mt:2}}>{current.distance}</Typography>
            </Box>
            <Box sx={{textAlign:{ xs: "center", md: "right" }}}>
                <Typography sx={{color:"gray", letterSpacing:2,fontSize: { xs: "0.75rem", md: "0.9rem" }}}>EST. TRAVEL TIME</Typography>
                <Typography sx={{color:"white", fontSize:{ xs: "1rem", md: "1.5rem" }, mt:2}}>{current.travel}</Typography>
            </Box> 
         </Box>

            </Box>
            </Box>
         </Container>  
        </Box>
    )
}
