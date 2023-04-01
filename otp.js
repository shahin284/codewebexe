function otp()
{
    let digits="0123456789";
    let generate_otp='';
    for(let i =0;i<6;i++)
    {
        generate_otp+=digits[Math.floor(Math.random()*10)];
    }
    var span = document.querySelector('.box span');
    span.innerHTML =generate_otp;
    
}