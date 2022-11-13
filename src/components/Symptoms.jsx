import { Box, Button, Input, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../utils/firebase/firebase.utils";

export default function Symptoms({ patient }) {
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

  const register = () => {
    const postD = async () => {
      const docRef = collection(db, "Patient");
      await addDoc(docRef, {
        firstName: fn,
        middleName: mn,
        lastName: ln,
        age: age,
        gender: gender,
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
        <TextField
          id="outlined-name"
          label="Temperature"
          value={fn}
          onChange={fnCH}
        />
        <TextField
          id="outlined-name"
          label="Pulse Rate"
          value={mn}
          onChange={mnCH}
        />
        <TextField id="outlined-name" label="BP" value={ln} onChange={lnCH} />
        <Input type="file"></Input>
        <Button onClick={register}>Register</Button>
      </Box>
    </>
  );
}
