function login(credentials){
  return fetch("http://localhost:3030/auth",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response=>{
    return response.json();
  })
}

function signUp(credentials){
  return fetch("http://localhost:3030/users",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response=>{
    return response.json();
  })
}


export { login, signUp };
