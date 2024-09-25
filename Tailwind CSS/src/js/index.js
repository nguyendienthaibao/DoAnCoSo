// Hiển thị ngày giờ trên giao diện
// import{openTabs} from 

function NgayGio(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}
window.onload = function() {
    var now = new Date();
    var strDateTime = [
         [
            NgayGio(now.getDate()),  
            NgayGio(now.getMonth() + 1), 
            now.getFullYear()
        ].join("/"),  
        [
            NgayGio(now.getHours()),  
            NgayGio(now.getMinutes())
        ].join(":"), 
            now.getHours() >= 12 ? "PM" : "AM"
    ].join(" ");

    document.getElementById("giogiac").innerHTML = "Hiện tại là: " + strDateTime;
    
};
// Mở 1 tệp html dưới dạng popup
function Tab_on_Tab(url,w,h) {
    var name        = 'popup';
    var wWin        = window.innerWidth;
    var hWin        = window.innerHeight;
    var top         = (hWin-h)/2;
    var left        = (wWin-w)/2;
    var popupWindow = window.open(url, name, 'width='+ w + ',height=' + h + ', status=no, location=no,  toolbar=no, scrollbars=yes, menubar=no, resizable=no, left=' + left +', top='+top);
    popupWindow.focus();
    return false;
}