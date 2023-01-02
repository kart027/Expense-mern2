import React from 'react'
import  TranscationForm  from "../components/TranscationForm";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


import TransactionsList from "../components/TransactionsList";
import Login from './Login';
import { Container } from '@mui/system';



function Home() {
  const[editTransaction,setEdittranscation] = useState({})
  const [transcation,settranscation] = useState([])

  const    fetchTransctions = async ()=>{
    const token = Cookies.get("token");
    const res =await fetch('http://localhost:4000/getranscation',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
      
    const {data }= await res.json();
   settranscation(data);
   

        
   }

   
  useEffect(()=>{
    fetchTransctions();
  },[])

  
  return (
   <>
   <Container>
    <TranscationForm  fetchTransctions={fetchTransctions}  editTransaction={editTransaction} />
    <TransactionsList transcation={transcation}  fetchTransctions={fetchTransctions} setEdittranscation={setEdittranscation}/>
    </Container>
   </>
  )
}

export default Home
