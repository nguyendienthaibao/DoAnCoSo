function btn_OpenTab(){
    let params = ' position=absolute,top=50%, left=80%,width=500,height=500, menubar=no, toolbar=no,location=no,status=no,resizable=no,scrollbars=no';
    open('https://tailwindcss.com/', 'test', params);
};
like =0;
dislike =0;
function btnLike_Click(){
    like++;
    document.getElementsByClassName("btnLike")
    document.getElementById("count-like").innerHTML  = like;
}
function btnDislike_Click(){
    dislike++;
    document.getElementById("count-dislike").innerHTML  = dislike;
}
