var grades = {
    'list' : {'생활코딩':10,'js':6,'프엔독학':60},
    'show' : function(){
        for (var name in this.list) {
            console.log(name, this.list[name]);
        }
        // console.log(this.list);
    }
}
grades.show();