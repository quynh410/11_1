// Sử dụng câu lệnh if/else để kiểm tra điều kiện
let age = 18;

if (age >= 18) {
  console.log("Bạn đã đủ tuổi để lái xe.");
} else {
  console.log("Bạn chưa đủ tuổi để lái xe.");
}

// -Kết quả: "Bạn đã đủ tuổi để lái xe."
// -Ngược lại nếu ta cho ít số tuổi hơn thì kết qủa t nhận được là "Bạn chưa đủ tuổi để lái xe".
// -Chúng ta sử dụng câu lệnh if/else để kiểm tra tuổi. Nếu age lớn hơn hoặc bằng 18, 
// sẽ được in ra thông báo "Bạn đã đủ tuổi để lái xe"
// -Ngược lại, nếu age nhỏ hơn 18, sẽ được in ra thông báo "Bạn chưa đủ tuổi để lái xe".





let day = "Monday";
let Thu;

switch (day) {
  case "Monday":
    Thu = "Thứ Hai";
    break;
  case "Tuesday":
    Thu = "Thứ Ba";
    break;
  case "Wednesday":
    Thu = "Thứ Tư";
    break;
  case "Thursday":
    Thu = "Thứ Năm";
    break;
  case "Friday":
    Thu = "Thứ Sáu";
    break;
  case "Saturday":
    Thu = "Thứ Bảy";
    break;
  case "Sunday":
    Thu = "Chủ Nhật";
    break;
  default:
    Thu = "Ngày không hợp lệ";
}

console.log(Thu);

// Chúng ta sử dụng câu lệnh switch/case để chuyển đổi ngày trong tiếng Anh thành ngày trong tiếng Việt.
// Biến day được kiểm tra trong câu lệnh switch và tương ứng với từng trường hợp, 
// chúng ta gán giá trị của biến "thu" tương ứng với ngày trong tiếng Việt. Nếu không có trường hợp nào khớp, giá trị mặc định của "thu" là "Ngày không hợp lệ".