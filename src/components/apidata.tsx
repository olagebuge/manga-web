
export const ApiData = async() => {
  const response = await fetch(process.env.URL+"/api",{
    headers:{
        Accept:"application/json",
        method:"GET",
    }
  });
  if(response) {
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <div>看一下主控台</div>
  )
}

