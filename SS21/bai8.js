let chieuCao = prompt("Nhập chiều cao <m>:");
let canNang = prompt("Nhập cân nặng <kg>:");

let bmi = canNang / ( chieuCao ^ 2 );

if (bmi < 18.5) {
    console.log("Gầy - BMI: " + bmi);
  } else if (bmi >= 18.5 && bmi < 24,9) {
    console.log("Bình thường - BMI: " + bmi);
  }else if (bmi >= 25) {
    console.log("Thừa cân - BMI: " + bmi);
  } else if(bmi >= 25 && bmi < 29.9){
    console.log("Tiền béo phì - BMI: " + bmi);
  }else if (bmi >= 30 && bmi < 34,4){
    console.log("Béo phì cấp độ I" + bmi);  
  }else if (bmi >= 35 && bmi <  39,9){
    console.log("Béo phì cấp độ II" + bmi);
  }else {
    console.log("Béo phì cấp độ III" + bmi);
  }

  
  
