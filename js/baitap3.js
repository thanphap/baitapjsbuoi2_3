/**
 * Bài 3
 * Quy đổi USD sang VND
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * soUSD (số USD cần quy đổi)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến giaUSD, soUSD, quydoiVND
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * quydoiVND = giaUSD * soUSD;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * quydoiVND
 */

function tinhQuyDoi(){
    var soUSD = document.getElementById("soUSD").value;
    var giaUSD = 23500;
    var quydoiVND = 0;
    quydoiVND = giaUSD * soUSD;
    document.getElementById("txtResult3").innerHTML = quydoiVND;
}
   
document.getElementById("btnTinh3").onclick = tinhQuyDoi;