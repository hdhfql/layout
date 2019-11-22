window.onload = function () {
    var b_imgs = document.getElementsByClassName("banner-img"),
        b_icons = document.getElementsByClassName("icon"),
        hl = document.getElementsByClassName("head-text");
// 中英文切换
    for(var i=0;i<hl.length;i++){
        (function(i){
            hl[i].onclick = function(){
                hl[i].style.color = "#38C078";
                hl[1-i].style.color = "#444866";
            }
        })(i);
    }   
// 横幅图片轮播
    for (var i = 0; i < b_icons.length; i++) {
        (function (i) {
            b_icons[i].onclick = function () {
                for (var j = 0; j < b_icons.length; j++) {
                    if (j == i) {
                        b_icons[j].className = "icon roll-icon-color-light";
                        b_imgs[j].className = "banner-img banner-img-block";
                    } else {
                        b_icons[j].className = "icon roll-icon-color-dark";
                        b_imgs[j].className = "banner-img banner-img-none";
                    }
                }
            }
        })(i);
    }
    function b_roll(){
        for(i=0;i<b_icons.length;i++){
            if(i==b_icons.length-1){
                if(b_icons[i].className == "icon roll-icon-color-light"){
                    b_icons[i].className = "icon roll-icon-color-dark";
                    b_imgs[i].className = "banner-img banner-img-none";
                    b_icons[0].className = "icon roll-icon-color-light";
                    b_imgs[0].className = "banner-img banner-img-block";
                    break;
                }
            } else{
                if(b_icons[i].className == "icon roll-icon-color-light"){
                    b_icons[i].className = "icon roll-icon-color-dark";
                    b_imgs[i].className = "banner-img banner-img-none";
                    b_icons[i+1].className = "icon roll-icon-color-light";
                    b_imgs[i+1].className = "banner-img banner-img-block";
                    break;
                }
               
            }
        }

    }
    var b_roll_time = setInterval(b_roll,3000);
    
// 内容视频轮播
    var line_icons = document.getElementsByClassName("line-icon");
    var img_block = document.getElementsByClassName("img-block"),
        slideWidth = img_block[0].offsetWidth;
    for(i=1;i<img_block.length;i++){
        img_block[i].style.left = slideWidth + 'px';
    }
    var a=-200/1004/1004,
        b=a*-1004,
        c=0;
    function row(x){
        return a*x*x+b*x+c;
    }
    var timeid;
    k=0;
    
    function c_slide(){
        if(k==0){
            if(img_block[k].offsetLeft + slideWidth > 2){
                img_block[k].style.left = img_block[k].offsetLeft - row(img_block[k].offsetLeft+slideWidth) + 'px';
                img_block[k+1].style.left = img_block[k+1].offsetLeft - row(img_block[k+1].offsetLeft) + 'px';
            } else{
                img_block[k].style.left = slideWidth + 'px';
                img_block[k+1].style.left = 0 +'px';
                k++;
                line_icons[0].className = "line-icon line-icon-dark";
                line_icons[1].className = "line-icon line-icon-light";
                clearInterval(timeid);

                // var time0 = new Date();
                // var time01 = time0.getTime();
                // console.log(time01);
            }
        } else{
            if(img_block[k].offsetLeft + slideWidth > 2){
                img_block[k].style.left = img_block[k].offsetLeft - row(img_block[k].offsetLeft+slideWidth) + 'px';
                img_block[0].style.left = img_block[0].offsetLeft - row(img_block[0].offsetLeft) + 'px';
            } else{
                img_block[k].style.left = slideWidth + 'px';
                img_block[0].style.left = 0 +'px';
                k=0;
                line_icons[0].className = "line-icon line-icon-light";
                line_icons[1].className = "line-icon line-icon-dark";
                clearInterval(timeid);
                // var time1 = new Date();
                // var time11 = time1.getTime();
                // console.log(time11);
            }
            
        }
    }
    function c_roll(){
        timeid = setInterval(c_slide,10);
    }
    var c_roll_time = setInterval(c_roll,4570);

    // 添加按钮效果
    for(i=0;i<line_icons.length;i++){
        (function(i){
            line_icons[i].onclick = function(){
                if(img_block[0].offsetLeft==0 || img_block[1].offsetLeft==0 ){
                    if(line_icons[i].className=="line-icon line-icon-dark"){
                        for(j=0;j<line_icons.length;j++){
                            if(j==i){
                                clearInterval(c_roll_time);
                                timeid = setInterval(c_slide,10);
                                c_roll_time = setInterval(c_roll,4570);
                                line_icons[j].className = "line-icon line-icon-light";
                            } else{
                                line_icons[j].className = "line-icon line-icon-dark";
                            }
                        }
                    }
                }
            }
        })(i);
    }
}