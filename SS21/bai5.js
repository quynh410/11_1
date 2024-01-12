function cacNgayTrongThang(){
    let month = +prompt("Nhập tháng từ 1 đến 12");
    let dayInMonth;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayInMonth = 31;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayInMonth = 30;
    break;
    case 2 :
        let year = +prompt("Nhập vào năm");
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
}
if (dayInMonth) {
    console.log(`Số ngày trong tháng ${month} là ${daysInMonth}.`);
  }
}























let month = parseInt(prompt("Nhập vào số tháng (từ 1 đến 12): "));

let daysInMonth;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    break;
  case 2:
    let year = parseInt(prompt("Nhập vào năm: "));
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  default:
    console.log("Số tháng không hợp lệ.");
    break;
}

if (daysInMonth) {
  console.log(`Số ngày trong tháng ${month} là ${daysInMonth}.`);
}

