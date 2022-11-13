import {
  Box,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../utils/firebase/firebase.utils";

export default function Prescription({ patient }) {
  const [items, setItems] = useState([]);
  const [fn, setfn] = useState("");
  const [mn, setmn] = useState("");
  const [ln, setln] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const fnCH = (e) => {
    setfn(e.target.value);
  };
  const mnCH = (e) => {
    setmn(e.target.value);
  };
  const lnCH = (e) => {
    setln(e.target.value);
  };
  const ageCH = (e) => {
    setage(e.target.value);
  };
  const genderCH = (e) => {
    setgender(e.target.value);
  };
  const AddItem = () => {
    let data = {
      date: new Date(),
      med: fn,
      dos: mn,
    };
    setItems([...items, data]);
  };
  const Add = () => {
    const postD = async () => {
      const docRef = collection(db, "Records");
      await addDoc(docRef, {
        patientId: "r4wygdH33GyQ8nBLYwhC",
        prescription: items,
      });
    };
    postD();
    setfn("");
    setmn("");
    setln("");
    setage("");
    setgender("");
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input type="date"></Input>
        <TextField
          id="outlined-name"
          label="medication"
          value={fn}
          onChange={fnCH}
        />
        <TextField
          id="outlined-name"
          label="dosage"
          value={mn}
          onChange={mnCH}
        />

        <Button onClick={AddItem}>Add</Button>
      </Box>
      No Of Items:{items.length}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Medication</TableCell>
              <TableCell align="right">Dosage&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.med}
                </TableCell>
                <TableCell align="right">{row.dos}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={Add}>Add Prescription</Button>
    </>
  );
}
