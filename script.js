let btn=document.querySelector(".btn");
let input=document.querySelector(".input-box input");
let img=document.querySelector("#qrimg");


btn.addEventListener("click" ,(e)=>{
          e.preventDefault();
          let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
          img.src=url+input.value;
          img.style.height="120px"
          img.style.marginLeft="70px"
          img.style.padding="20px"
          setTimeout(()=>{
                   
                    input.value=""

          } , 1000)
        
       

})
