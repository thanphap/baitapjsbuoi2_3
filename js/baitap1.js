/**
 * Bài 1
 * Tính lương nhân viên
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * soNgay (số ngày tính lương)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến soNgay, ngayLuong, luongnv
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * luongnv = soNgay * ngayLuong;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * luongnv
 * 
 */

function tinhNgayLuong(){
    var soNgay = document.getElementById("ngayLuong").value;
    var ngayLuong = 100000;
    luongnv = soNgay * ngayLuong;
    document.getElementById("txtResult1").innerHTML = luongnv;
}
   
document.getElementById("btnTinh1").onclick = tinhNgayLuong;