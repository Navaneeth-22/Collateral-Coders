import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/material";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../utils/firebase/firebase.utils";

export default function ReportsComp() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const q = query(
        collection(db, "Records"),
        where("patientId", "==", "r4wygdH33GyQ8nBLYwhC")
      );

      const querySnapshot = await getDocs(q);
      let records = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const d = {
          id: doc.id,
          data: doc.data(),
        };
        records.push(d);
      });

      console.log(records);
      setItems(records);
    };

    getRecords();
  }, []);
  return (
    <Box flex={4} p={2}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Medication</TableCell>
              <TableCell align="right">Dosage&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((data) => {
              data.prescription?.map((row) => {
                {
                  console.log(row);
                }
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.med}
                    </TableCell>
                    <TableCell align="right">{row.dos}</TableCell>
                  </TableRow>
                );
              });
            })}
            {/* {items.data?.prescription?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.med}
                </TableCell>
                <TableCell align="right">{row.dos}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
