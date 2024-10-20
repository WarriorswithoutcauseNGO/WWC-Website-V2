import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Navbar.css";
import navbar_logo from "../../assets/navbar_logo.svg";

const pages = [
  { name: "About Us", path: "/aboutus" },
  { name: "How to help", path: "/howtohelp" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isSmallScreen = useMediaQuery("(max-width:1100px)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.09)",
        borderBottom: "1px solid rgba(226, 226, 226, 1)",
        backdropFilter: "blur(27.399999618530273px)",
        paddingX: { xs: 2, md: 0 },
        zIndex: 1,
        height: "68px",
        zIndex: 3,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ paddingLeft: 0, paddingRight: 0, height: "68px" }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            alignItems: "center",
            height: "68px",
          }}
        >
          <Link to="/">
            <img
              src={navbar_logo}
              alt="NGO Logo"
              style={{
                display: "flex",
                height: "40px",
              }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Sora",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "20px",
              color: "rgba(226, 226, 226, 1)",
            }}
          >
            {isSmallScreen ? "WWC NGO" : "WARRIORSWITHOUTCAUSE NGO"}
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ml: 1,
            }}
          >
            WWC NGO
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  background: "rgba(255, 255, 255, 0.09)",
                  borderBottom: "1px solid rgba(226, 226, 226, 1)",
                  backdropFilter: "blur(27.399999618530273px)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 0,
                  marginTop: 2.7,
                  p: 1,
                  width: "100%",
                  pt: 2,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ py: 0, height: "10px" }}
                >
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textAlign: "center",
                      fontFamily: "Sora",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "rgba(226, 226, 226, 1)",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  flexGrow: 0,
                  height: "100%",
                  display: { xs: "flex", md: "none" },
                  m: 2,
                }}
              >
                <Button
                  fullWidth
                  component={Link}
                  to="/donate"
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    px: 5,
                    py: 2,
                    borderRadius: 0,
                    position: "relative",
                    marginRight: 0,
                    alignItems: "center",
                    height: "100%",
                    textDecoration: "none",
                  }}
                  className="donation-button"
                >
                  <svg
                    className="heart-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="black"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                  </svg>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Make a donation
                  </Typography>
                </Button>
              </Box>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Sora",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "rgba(226, 226, 226, 1)",
                  textTransform: "capitalize",
                  textDecoration: "none",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              height: "100%",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              component={Link}
              to="/donate"
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                gap: 1,
                px: 5,
                borderRadius: 0,
                position: "relative",
                marginRight: 0,
                alignItems: "center",
                height: "100%",
                textDecoration: "none",
              }}
              className="donation-button"
            >
              <svg
                className="heart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="black"
                fill="none"
                strokeWidth="2"
              >
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                Make a donation
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
