import React, { useState, useEffect } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMode } from "state";
import profileImage from "assets/Profile.jpg";
import axios from "axios";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  // const [userData, setUserData] = useState({});

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleLogout = () => {
    navigate("/");
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    handleLogout();
  };
  const handleCloseDropdown = () => {
    handleCloseDialog();
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token"); // get JWT token from local storage

  //   axios
  //     .get(`http://localhost:5000/login/64626d95208980a54e6bdd56`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // include JWT token in headers
  //       },
  //     })
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "#191F45",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon
              sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
            />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="20rem"
            p="0.1rem 1.5rem"
            ml="10rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined
                sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
              />
            ) : (
              <DarkModeOutlined
                sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
              />
            )}
          </IconButton>
          <IconButton>
            <NotificationsActiveOutlinedIcon
              sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
            />
          </IconButton>
          <IconButton>
            <SettingsOutlined
              sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
            />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.grey[100] }}
                >
                  {user.username}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.grey[100] }}
                >
                  {user.email}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.grey[100], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleOpenDialog}>Log Out</MenuItem>
              <MenuItem>Client Page</MenuItem>
            </Menu>
            <Dialog open={open} onClose={handleCloseDialog}>
              <DialogTitle>Sign Out From Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to Sign Out from your account?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDropdown}>Cancel</Button>
                <Button onClick={handleClose} color="error" autoFocus>
                  Sign Out
                </Button>
              </DialogActions>
            </Dialog>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
