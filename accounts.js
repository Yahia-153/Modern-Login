let siBtn = document.getElementById('siBtn');
let siEmail = document.getElementById('siEmail');
let siPass = document.getElementById('siPass');
let suBtn = document.getElementById('suBtn');
let suEmail = document.getElementById('suEmail');
let suPass = document.getElementById('suPass');
const acconts= [
    {
        "email": "user1@gmail.com",
        "password": "12345"

    },
    {
        "email": "user2@gmail.com",
        "password": "67890"
    },
    {
        "email": "user3@gmail.com",
        "password": "11111"
    },
    {
        "email": "user4@gmail.com",
        "password": "22222"
    }
];
siBtn.addEventListener('click',()=>{
    let email = siEmail.value;
    let pass = siPass.value;
    if(email !=""){
        for(var num= 0 ; num < acconts.length ; num++){
            if(email === acconts[num].email){
                break
            }
        }
        if(num !== acconts.length){
            if(pass === acconts[num].password){
                siEmail.value=""
                siPass.value=""
                alert("login success");
            }else{
                alert("wrong password");
            }
        }else{
            alert('wrong Email')
        }
    }else{
        alert('inter email')
    }

})
suBtn.addEventListener('click',()=>{
    let email = suEmail.value;
    let pass = suPass.value;
    if(email !== ""){
        if(pass !== ""){
            var newAccont = {
                "email": email,
                "password": pass
            }
            acconts.push(newAccont)
            suEmail.value=""
            suPass.value=""
            alert('sign-up success ')
        }else{
            alert('inter password')
        }
    }else{
        alert('inter email')
    }
    suEmail.value=""
    suPass.value=""
})