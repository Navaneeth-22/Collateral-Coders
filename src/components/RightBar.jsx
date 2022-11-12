import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "../utils/firebase/firebase.utils";
const RightBar = (props) => {
  const [doctor, setDoctor] = useState(null);
  const userId = localStorage.getItem("doctorId");
  const userRef = doc(db, "User", userId);
  useEffect(() => {
    const getDoctor = async () => {
      const doc = await getDoc(userRef);
      setDoctor(doc.data());
    };
    getDoctor();
  });

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography>{doctor ? doctor?.name : null}</Typography>
        <Typography>{doctor ? doctor?.specialist : null}</Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
