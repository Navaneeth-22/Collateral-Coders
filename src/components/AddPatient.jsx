import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../utils/firebase/firebase.utils";

export default function AddPatient({ patient }) {
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
          label="firstName"
          value={patient ? patient?.firstName : fn}
          onChange={fnCH}
        />
        <TextField
          id="outlined-name"
          label="secondName"
          value={patient ? patient?.middleName : mn}
          onChange={mnCH}
        />
        <TextField
          id="outlined-name"
          label="middleName"
          value={patient ? patient?.lastName : ln}
          onChange={lnCH}
        />
        <TextField
          id="outlined-name"
          label="age"
          value={patient ? patient?.age : age}
          onChange={ageCH}
        />
        <TextField
          id="outlined-name"
          label="Gender"
          value={patient ? patient?.gender : gender}
          onChange={genderCH}
        />
        <Button onClick={register}>Register</Button>
      </Box>
    </>
  );
}
