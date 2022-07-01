function factory_movie(title){
    return {        // return 안에 함수들은 내부함수
        get_title : function(){     // get_title, set_title : 메소드
            return title;
        },
        set_title : function(_title){
            if(typeof _title === 'String'){
                title = _title
            } else {
                alert('제목은 문자열이어야 합니다.')
            }
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');
alert(ghost.get_title());
alert(matrix.get_title());


var arr = []
for(var i = 0; i < 5; i++){
    // arr[i] = function(){
    //     return i;
    // }    > 오류
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}