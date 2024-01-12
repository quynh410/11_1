
let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
let c = +prompt("Nhập số c:");


let min, mid, max;

if (a <= b && a <= c) {
  min = a;
  if (b <= c) {
    mid = b;
    max = c;
  } else {
    mid = c;
    max = b;
  }
} else if (b <= a && b <= c) {
  min = b;
  if (a <= c) {
    mid = a;
    max = c;
  } else {
    mid = c;
    max = a;
  }
} else {
  min = c;
  if (a <= b) {
    mid = a;
    max = b;
  } else {
    mid = b;
    max = a;
  }
}

console.log("Thứ tự tăng dần: " + min + ", " + mid + ", " + max);
alert("Thứ tự tăng dần: " + min + ", " + mid + ", " + max);