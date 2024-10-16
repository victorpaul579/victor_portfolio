import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        padding: "50px 0",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ color: "#fff", textAlign: "center" }}
      >
        Contact
      </Typography>
      <List sx={{ maxWidth: "600px", margin: "0 auto", color: "#fff" }}>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <EmailIcon sx={{ color: "#bb86fc" }} />
          </ListItemIcon>
          <ListItemText
            primary="victorpaul579@gmail.com"
            sx={{ textAlign: "left" }}
          />
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <PhoneIcon sx={{ color: "#bb86fc" }} />
          </ListItemIcon>
          <ListItemText
            primary="(+1) 346-638-5221"
            sx={{ textAlign: "left" }}
          />
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <LocationOnIcon sx={{ color: "#bb86fc" }} />
          </ListItemIcon>
          <ListItemText
            primary="2250 Holly Hall St, Houston, TX"
            sx={{ textAlign: "left" }}
          />
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <GitHubIcon sx={{ color: "#bb86fc" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://github.com/victorpaul579"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/victorpaul579
              </a>
            }
            sx={{ textAlign: "left" }}
          />
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <LinkedInIcon sx={{ color: "#bb86fc" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <a
                href="https://www.linkedin.com/in/victorbuddha"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/victorbuddha
              </a>
            }
            sx={{ textAlign: "left" }}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Contact;
