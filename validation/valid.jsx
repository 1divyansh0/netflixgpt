

export const valid = (email,password) => {
   const emailv =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//    const passv =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password);
    if(!emailv)return "Email is Wrong!";
    

    return "";

  
}
