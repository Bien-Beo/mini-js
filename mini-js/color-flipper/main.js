//Thay đổi màu nền chương trình
const body = document.getElementsByTagName("body")[0]
// Khởi tạo biến cố định body = phương thức lấy phần tử theo tagname
// getElementsByTagName -> là 1 mảng các phần tử và const body là index
// Vì là 1 mảng nên phải gán luôn index [0]

function setColorBackground(name) //Hàm chỉnh sửa lại background theo button
{
    body.style.backgroundColor = name; //Gán giá trị màu cho từng button
}

function randomColor() 
{ //Math.round -> làm tròn
  //Math.random 0->1
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
