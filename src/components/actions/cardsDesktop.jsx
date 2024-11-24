import React from "react";
import { Box, Typography } from "@mui/material";
import bf_card_bg from "../../assets/bf_card_bg.svg";
import bf_img_1 from "../../assets/bf_img_1.png";
import bf_img_2 from "../../assets/bf_img_2.png";
import bf_img_3 from "../../assets/bf_img_3.png";
import bf_img_4 from "../../assets/bf_img_4.png";
import bf_img_5 from "../../assets/bf_img_5.png";
import "./cardsDesktop.css";

export default function CardsDesktop() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <Box sx={{ display: "flex", gap: 0, justifyContent: "center" }}>
        <Box
          className="card"
          sx={{
            width: "288px",
            height: "380px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "380px",
              backgroundImage: `url(${bf_card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
                pl: 2,
                pt: 3,
                fontFamily: "Sora",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "35.28px",
              }}
              dangerouslySetInnerHTML={{ __html: "Zero<br />Poverty" }}
            />
          </Box>
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              padding: 2,
              zIndex: 3,
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Sora",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              "Charity begins at home," and for us, that means ensuring no one
              in our community suffers the hardships of poverty. Our programs
              focus on fostering self-reliance by providing resources,
              microfinance, and sustainable livelihoods.
            </Typography>
          </Box>
        </Box>

        <img src={bf_img_1} alt="Zero Poverty" />

        <Box
          className="card"
          sx={{
            width: "288px",
            height: "380px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "380px",
              backgroundImage: `url(${bf_card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
                pl: 2,
                pt: 3,
                fontFamily: "Sora",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "35.28px",
              }}
              dangerouslySetInnerHTML={{ __html: "Skill<br />Development" }}
            />
          </Box>
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              padding: 2,
              zIndex: 3,
              pt: 0,
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Sora",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              In today's world, knowledge is power. Our skill development
              initiatives—vocational training, digital literacy, and
              entrepreneurship—equip individuals with tools to succeed.
            </Typography>
          </Box>
        </Box>

        <img src={bf_img_2} alt="Skill Development" />

        <Box
          className="card"
          sx={{
            width: "288px",
            height: "380px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "380px",
              backgroundImage: `url(${bf_card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
                pl: 2,
                pt: 3,
                fontFamily: "Sora",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "35.28px",
              }}
              dangerouslySetInnerHTML={{ __html: "Quality<br />Education" }}
            />
          </Box>
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              padding: 2,
              zIndex: 3,
              pt: 4,
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Sora",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              As Nelson Mandela said, “Education is the most powerful weapon to
              change the world.” We are committed to making quality education a
              reality for every child by supporting schools, offering
              scholarships, nurturing young minds and building a brighter
              tomorrow.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 0, justifyContent: "center" }}>
        <img src={bf_img_3} alt="Quality Education" />

        <Box
          className="card"
          sx={{
            width: "288px",
            height: "380px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "380px",
              backgroundImage: `url(${bf_card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
                pl: 2,
                pt: 3,
                fontFamily: "Sora",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "35.28px",
              }}
              dangerouslySetInnerHTML={{
                __html: "Good health &<b/> Sanitation",
              }}
            />
          </Box>
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              padding: 2,
              zIndex: 3,
              pt: 4,
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Sora",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Health is wealth. Our programs focus on clean water, hygiene, and
              preventive care, building healthier communities. Through clinics,
              awareness programs, and education on menstrual health and
              sanitation, we empower people to live confidently and face the
              future.
            </Typography>
          </Box>
        </Box>

        <img src={bf_img_4} alt="Good Health & Sanitation" />

        <Box
          className="card"
          sx={{
            width: "288px",
            height: "380px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "380px",
              backgroundImage: `url(${bf_card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
                pl: 2,
                pt: 3,
                fontFamily: "Sora",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "35.28px",
              }}
              dangerouslySetInnerHTML={{
                __html: "Raising <b/>awareness & <b/>Literacy",
              }}
            />
          </Box>
          <Box
            className="hover-text"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              padding: 2,
              zIndex: 3,
              pt: 6,
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Sora",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Knowledge is power, and informed communities can move mountains.
              Our awareness campaigns and literacy programs spark change by
              educating on gender equality, sustainability, and human rights.
            </Typography>
          </Box>
        </Box>
        <img src={bf_img_5} alt="Raising Awareness & Literacy" />
      </Box>
    </Box>
  );
}
