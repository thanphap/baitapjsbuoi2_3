/**
 * Bài 4
 * Tính diện tích, chu vi hình chữ nhật
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * chieuDai, chieuRong (chiều dài, chiều rộng HCN)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến chieuDai, chieuRong, dienTich, chuVi
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * dienTich = chieuDai*chieuRong;
 * chuVi = (chieuDai+chieuRong)*2;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * dienTich, chuVi
 * 
 */

function tinhDienTich(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = chieuDai*chieuRong;
    chuVi = (Number(chieuDai) + Number(chieuRong))*2;
    document.getElementById("txtResult4").innerHTML = "Diện tích HCN: " + dienTich +"<br>Chu vi HCN: " + chuVi;
}
   
document.getElementById("btnTinh4").onclick = tinhDienTich;