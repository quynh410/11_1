let nhap = prompt(" Nhập số bất kì :");
let number = parseFloat(nhap);

if(!isNaN(number)){
    if(number % 2 === 0){
        alert(number + " là số chẵn.");
    }else{
        alert(number + " là số lẻ.");
    }
}else{
    alert("Không hợp lệ.");
}

