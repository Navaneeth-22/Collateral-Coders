import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicationIcon from "@mui/icons-material/Medication";
import React from "react";
import { useState } from "react";

const LeftBar = (props) => {
  const [showPatient, setShowPatient] = useState(true);
  const [showDoctor, setShowDoctor] = useState(false);
  const [showReports, setShowReports] = useState(false);

  const patientComp = () => {
    setShowPatient(!showPatient);
    props.pvisible(showPatient);
  };

  const doctorComp = () => {
    setShowDoctor(!showDoctor);
    props.dvisible(showDoctor);
  };
  const reportsComp = () => {
    setShowReports(!showReports);
    props.rvisible(showReports);
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={patientComp}>
              <ListItemIcon>
                <ManIcon />
              </ListItemIcon>
              <ListItemText primary="Patient" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={doctorComp}>
              <ListItemIcon>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText primary="Doctor" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" onClick={reportsComp}>
              <ListItemIcon>
                <MedicationIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default LeftBar;
