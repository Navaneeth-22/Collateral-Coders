import { Button, Input } from "@mui/material";
import { useState } from "react";

const AddPatient = (props) => {
  const addPatientHandler = async () => {
    const getPatientData = async () => {};
  };

  const [patientId, setPatientId] = useState("");

  return (
    <>
      <input
        type="text"
        placeHolder="patient id.."
        onClick={(e) => {
          setPatientId(e.target.value);
        }}
      />
      <Button onClick={addPatientHandler}>Patient Id</Button>
    </>
  );
};

export default AddPatient;
