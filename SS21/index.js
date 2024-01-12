//var person1 = undefined
// console.log("Hello world");
// 1. Quy tắc đặt tên biến - camel case
// 2. Phân biệt biến đc khai báo bởi 3 từ khóa
// var/let/const



// console.log("Person1 có giá trị =",person1); 
// console.log("Person2 có giá trị =",person2);
// console.log("Person3 có giá trị =",person3);

// var person1 = "Đ";
// let person2 = "V";
// const person3 = "L";

// 1.constant - Hằng số
// 2.use biến trước khi khai báo
// -Đối với biến đc khai báo bởi 2 từ khóa let và const
// -Không thể truy cập (use) vào 2 biến đó trc khi khai báo

// -đối với biến đc khai báo bởi từ khóa var
// -Có thể truy cập (use) biên đó 
// -Khi use biến đc khai báo bởi từ kháo var
// -trc khi khai báo sẽ mặc định có 1 gtri đc lưu trữ trong biến đó là undefined

// Cơ chế hoisting trong Javascript
// 3.Phạm vi hoạt động (Scope)

// const - constant (Hằng số)
// person1 = "Đ C";
// console.log("Person1 sau khi đc update",person1);

// person2 = "V R";
// console.log("Person2 sau khi đc update",person2);

// person3 = "L P";
// console.log("Person3 sau khi đc update",person3);



let Beo = true;
const Vui = true;
let Za = false;
const Nhu = false;

// >;>=;<;<=;==;===;!=
console.log(1>1);
console.log(1>=1);
console.log(1<1);
console.log(1<=1);
 1 == "1";// Toán tử so sánh bằng tương đối
 1 === "1";//Toán tử so sánh bằng tuyệt đối
 1 != "1";//false Toán tử so sánh khác tương đối
 1 !== "1"; //Toan tử so sánh khác tuyệt đối
console.log("Kết quả của phép so sánh == là",1 == "1");
console.log("Kết quả của phép so sánh === là",1 === "1");

// && (and)  và || (or)

if (condition) {
    //logic 1
}else if(condition2){
    //logic 2
}else if(condition3){
    //logic 3
}else{
    //logic else
}


