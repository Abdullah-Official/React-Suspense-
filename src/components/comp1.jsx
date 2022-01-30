import { useEffect, useState } from "react";

const Comp1 = () => {
    const [data,setData] = useState()
    async function fetchUserData(){
        await fetch('https://jsonplaceholder.typicode.com/users/1')
             .then(response => response.json())
             .then(json => setData(json))
             console.log('FETCHED')
     }
    useEffect(() => {
        
        fetchUserData()
    },[])
  return (
    <>
    <h1>{data?.name}</h1>
    </>
  )
};

export default Comp1;
