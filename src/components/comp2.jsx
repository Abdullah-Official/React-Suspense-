import { useEffect, useState } from "react";

const Comp2 = () => {
  const [data,setData] = useState()
    useEffect(() => {
        function fetchUserData(){
            fetch('https://jsonplaceholder.typicode.com/users/2')
                .then(response => response.json())
                .then(json => setData(json))
        }
        fetchUserData()
    },[])
  return (
      <>
      <h1>{data?.name}</h1>
      </>
  )
};

export default Comp2;
