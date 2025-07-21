import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_1_phn from "../../assets/our_drives_1_phn.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_2_phn from "../../assets/our_drives_2_phn.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_3_phn from "../../assets/our_drives_3_phn.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import our_drives_4_phn from "../../assets/our_drives_4_phn.png";

const OurDrives = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when component is at least 20% visible
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        root: null, // viewport
        threshold: 0.2 // 20% visibility
      }
    );

    const currentElement = document.querySelector('[data-component="OurDrives"]');
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const data = [
    {
      id: 1,
      head: "Beat the heat campaign",
      text: "We distributed <b>1200 umbrellas</b> in the extreme climate all over india collaborating with colgate india and better india.",
      img: our_drives_1,
      imgPhn: our_drives_1_phn,
    },
    {
      id: 2,
      head: "Project Vidyaksha",
      text: "We teach over <b>500 students in 10+ slums</b> essential subjects and skills, and conduct workshops on financial literacy, self-defense, and human rights.",
      img: our_drives_2,
      imgPhn: our_drives_2_phn,
    },
    {
      id: 3,
      head: "Project Swasthya Raksha",
      text: "We enhance health by providing healthcare access, sanitary pads, biodegradable washrooms, and menstrual health advocacy, with <b>over 10 lakh pads distributed</b> and <b>150+ drives</b> conducted.",
      img: our_drives_3,
      imgPhn: our_drives_3_phn,
    },
    {
      id: 4,
      head: "Project Rozgar",
      text: "Our initiative teaches artisanal skills like knitting and embroidery to empower adults and youth, especially women in slums, with the <b>skills for financial independence</b> and <b>sustainable income.</b>",
      img: our_drives_4,
      imgPhn: our_drives_4_phn,
    },
  ];

  return (
    <Box
    data-component="OurDrives"
      sx={{
        bgcolor: isVisible ? "#ffb8e0" : "#FFD4E4", //FF54BD, #FFD4E4
        transition: "background-color 0.5s ease-in-out",
        p: { md: 7, xs: 1.5 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "20px" },
          fontWeight: "700",
          color: "#373737",
          mb: 2,
          pt: { xs: "40px" },
        }}
      >
        Our Drives in Action
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        gap={{ md: 5, xs: 1 }}
      >
        <Box flex={1}>
          <List>
            {data.map((item, index) => (
              <ListItem
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  isMobile
                    ? setSelectedIndex(selectedIndex === index ? null : index)
                    : null
                }
                button
                sx={{
                  borderBottom:
                    index === data.length - 1
                      ? "none"
                      : isMobile
                      ? "1px solid #434343"
                      : "1px solid #FF3AB3",
                  py: { md: 2, xs: 0 },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Sora",
                        fontSize: { md: "24px", xs: "20px" },
                        fontWeight: "700",
                        lineHeight: "30.24px",
                        textAlign: "left",
                        color: isMobile
                          ? "#434343"
                          : hoveredIndex === index
                          ? "#373737"
                          : hoveredIndex !== null
                          ? "#ff8ad2"  //FF76CB
                          : "#ff24ac", //FFD4E4
                        mb: 1,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.head}
                    </Typography>
                  }
                  secondary={
                    <Box
                      sx={{
                        maxHeight:
                          selectedIndex === index || !isMobile
                            ? "500px"
                            : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: { md: "20px", xs: "16px" },
                          fontWeight: "400",
                          lineHeight: "25.2px",
                          textAlign: "left",
                          color: isMobile
                            ? "#434343"
                            : hoveredIndex === index
                            ? "#434343"
                            : hoveredIndex !== null
                            ? "#ff8ad2"  //FF76CB
                            : "#fc47b7", //FFD4E4
                          transition: "color 0.3s ease",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: item.text }} />
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={
              isMobile
                ? data[hoveredIndex ?? 0].imgPhn
                : data[hoveredIndex ?? 0].img
            }
            alt={data[hoveredIndex ?? 0].head}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurDrives;
