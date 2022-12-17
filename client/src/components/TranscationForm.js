
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState,useEffect } from "react";
import { Autocomplete } from "@mui/material";

const InitialForm = {
  amount: "",
  description: "",
  date: new Date(),
  
};

export default function TransactionForm({ fetchTransctions,editTransaction}) {
  
  const [form, setForm] = useState(InitialForm);
  
  useEffect(() => {
    if (editTransaction.amount !== undefined) {
      setForm(editTransaction);
    }
  }, [editTransaction]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleDate(newValue) {
    setForm({ ...form, date: newValue });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    editTransaction.amount === undefined ? create() : update(); 
  }

  function reload(res) {
    if (res.ok) {
      setForm(InitialForm);
      fetchTransctions();
    }
  }
   

      async function update() {
        const res = await fetch(
          `http://localhost:4000/transcation/${editTransaction._id}`,
          {
            method: "PATCH",
            body: JSON.stringify(form),
            headers: {
              "content-type": "application/json",
             
            },
          }
        );
        reload(res);
      }
    
    
  
  const create = async()=>{
    try {
      const res = await fetch('http://localhost:4000/transcation',{
        method:"POST",
        headers:{
          'Content-type': 'application/json'
  
        },
        body:JSON.stringify(form)
  
      })
      reload(res);
          
        } catch (error) {
          console.log(error)
        }
         
     
    }

  
 

 

 

 
  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
        
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            type="number"
            size="small"
            name="amount"
            variant="outlined"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Description"
            size="small"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              value={form.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} size="small" {...params} />
              )}
            />
          </LocalizationProvider>

      
          {editTransaction.amount !== undefined && (
            <Button type="submit" variant="secondary">
              Update
            </Button>
          )}

          {editTransaction.amount === undefined && (
            <Button type="submit" variant="contained">
              Submit
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  ); 
}