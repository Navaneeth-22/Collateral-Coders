import { Box, Stack } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase/firebase.utils";
import DoctorComp from "./DoctorComp";
import LeftBar from "./LeftBar";
import NavBar from "./NavBar";
import PatientComp from "./PatientComp";
import ReportsComp from "./ReportsComp";
export default function Home() {
  const [sp, setsp] = useState(true);
  const [sd, setsd] = useState(false);
  const [sr, setsr] = useState(false);
  const [id, setId] = useState("");
  const [patient, setPatient] = useState(null);
  const pvhandler = (showPatient) => {
    setsp(true);
    setsd(false);
    setsr(false);
    // setsp(showPatient);
  };
  const dvhandler = (showDoctor) => {
    setsp(false);
    setsd(true);
    setsr(false);
    // setsd(showDoctor);
  };
  const rvhandler = (showReports) => {
    setsp(false);
    setsd(false);
    setsr(true);
    // setsr(showReports);
  };
  const getPatient = async () => {
    const patientRef = doc(db, "Patient", id);
    const da = await getDoc(patientRef);
    if (!da.exists()) {
      return;
    }
    const data = da.data();
    setPatient(data);
  };

  return (
    <>
      <NavBar />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {/* <LeftBar/> */}

          <LeftBar
            pvisible={pvhandler}
            dvisible={dvhandler}
            rvisible={rvhandler}
          />
          {/* <AddPatient /> */}
          {/* <RightBar /> */}
          {sp && <PatientComp />}
          {sd && <DoctorComp />}
          {sr && <ReportsComp />}
          {/* <Input type="text" onChange={(e) => setId(e.target.value)}></Input>
          <Button onClick={getPatient}>Search Patient</Button> */}
        </Stack>
      </Box>
    </>
  );
}
