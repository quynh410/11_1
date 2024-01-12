let toan = +prompt("Nhập điểm môn Toán:");
let van = +prompt("Nhập điểm môn Văn:");
let anh = +prompt("Nhập điểm môn Anh:");

let diemTrungBinh = (toan + van + anh) / 3;

console.log("Điểm trung bình: " + diemTrungBinh);

    let xepLoai = " "; 

    if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
      xepLoai = "Giỏi";
    } else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
      xepLoai = "Khá";
    } else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
      xepLoai = "Trung Bình";
    } else {
      xepLoai = "Yếu";
    }
    
    console.log("Xếp loại: " + xepLoai);
    alert("Xếp loại " + xepLoai);
