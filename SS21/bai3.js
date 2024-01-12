
function cacNgayTrongTuan() {
    let number = +prompt("Nhập vào một số từ 2 đến 8:");
    let dayOfWeek;
  
    switch (number) {
      case 2:
        dayOfWeek = "Monday";
        break;
      case 3:
        dayOfWeek = "Tuesday";
        break;
      case 4:
        dayOfWeek = "Wednesday";
        break;
      case 5:
        dayOfWeek = "Thursday";
        break;
      case 6:
        dayOfWeek = "Friday";
        break;
      case 7:
        dayOfWeek = "Saturday";
        break;
      case 8:
        dayOfWeek = "Sunday";
        break;
      default:
        dayOfWeek = "Không hợp lệ";
    }
    alert("Ngày trong tuần tương ứng với số " + number + " là: " + dayOfWeek);
  }
  
