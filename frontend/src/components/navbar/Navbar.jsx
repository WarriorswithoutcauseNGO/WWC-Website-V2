import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbar_logo from "../../assets/navbar_logo.svg";
import "./Navbar.css";

const pages = [
  { name: "About Us", path: "/aboutus" },
  { name: "Projects", path: "/projects" },
  { name: "Become a Warrior", path: "/howtohelp" },
  { name: "Newsletter", path: "/newsletter" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const isDonatePage = location.pathname === "/donate";

  return (
    <AppBar
      position="fixed"
      sx={{
        background: { xs: "#fff", md: "rgba(255, 255, 255, 0.09)" },
        borderBottom: isDonatePage
          ? "1px solid rgba(77, 77, 77, 1)"
          : { xs: "1px solid rgba(200, 200, 200, 1)", md: "1px solid rgba(226, 226, 226, 1)" },
        backdropFilter: { xs: "none", md: "blur(27.4px)" },
        boxShadow: { xs: "0 1px 4px rgba(0,0,0,0.08)", md: "none" },
        paddingX: { xs: 2, md: 0 },
        zIndex: 5,
        height: "68px",
      }}
    >
      <Container disableGutters maxWidth="xl" sx={{ height: "68px" }}>
        <Toolbar
          disableGutters
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            alignItems: "center",
            height: "68px",
            ml: { md: 2, xs: 0 },
          }}
        >
          <Box
            component="button"
            type="button"
            onClick={handleGoHome}
            aria-label="WarriorsWithoutCause home"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.25, md: 2 },
              cursor: "pointer",
              minWidth: 0,
              flexShrink: 1,
              border: "none",
              background: "none",
              padding: 0,
              font: "inherit",
              textAlign: "left",
            }}
          >
            <Box
              component="img"
              src={navbar_logo}
              alt=""
              aria-hidden
              sx={{
                display: "block",
                height: { xs: "48px", md: "56px" },
                width: "auto",
                flexShrink: 0,
              }}
            />
            <Typography
              component="span"
              aria-hidden
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "15px", md: "17px" },
                letterSpacing: { xs: "0.02em", md: "0.04em" },
                color: "#0a0a0a",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "min(52vw, 200px)", sm: "none" },
                minWidth: 0,
              }}
            >
              Warriorswithoutcause
            </Typography>
          </Box>

          {/* Screen-reader only nav for SEO/sitelinks */}
          <Box component="nav" className="sr-only" aria-label="Quick links">
            <Link to="/aboutus">About Us</Link>
            <Link to="/donate">Donate Now</Link>
          </Box>

          {/* pushes actions (Donate + hamburger) to far right */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }} />

          {/* Right actions cluster: Donate (desktop) + hamburger (all sizes) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              ml: "auto",
              pr: { xs: 0, md: 0 },
              gap: { xs: 0, md: 2 },
              flexShrink: 0,
            }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/donate");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              sx={{
                backgroundColor: "white",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 1,
                px: 5,
                borderRadius: 0,
                alignItems: "center",
                height: "100%",
                textDecoration: "none",
                borderBottom: isDonatePage
                  ? "1px solid rgba(77, 77, 77, 1)"
                  : "none",
                borderLeft: isDonatePage
                  ? "1px solid rgba(77, 77, 77, 1)"
                  : "none",
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
                className=".heart-icon"
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

            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              aria-label="Open menu"
              sx={{
                p: { xs: 1.5, md: 1 },
                color: "#0a0a0a",
                minWidth: 44,
                minHeight: 44,
                "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 28, md: 24 }, color: "inherit" }} />
            </IconButton>
          </Box>

          {/* Shared menu (opens from the hamburger icon) */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.12)",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "none",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
                borderRadius: 0,
                mt: 1,
                pt: 1,
                width: "min(320px, calc(100vw - 24px))",
                color: "#fff",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  py: { xs: 2, md: 1.25 },
                  minHeight: { xs: 48, md: "auto" },
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                }}
              >
                <Typography
                  component={Link}
                  to={page.path}
                  sx={{
                    fontFamily: "Sora",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}

            <Box sx={{ display: { xs: "flex", md: "none" }, m: 2 }}>
              <Button
                fullWidth
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/donate");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  px: 5,
                  py: 2,
                  borderRadius: 0,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
