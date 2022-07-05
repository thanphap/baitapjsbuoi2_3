/**
 * Bài 2
 * Tính trung bình 5 số
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * number1, number2, number3, number4, number5 (các số cần tính)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến number1, number2, number3, number4, number5, trungbinh
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * trungbinh
 * 
 */

function tinhTrungBinh() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    var trungbinh = 0;
    trungbinh = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5;
    document.getElementById("txtResult2").innerHTML = trungbinh;
}

document.getElementById("btnTinh2").onclick = tinhTrungBinh;
