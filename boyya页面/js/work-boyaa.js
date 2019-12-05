window.onload = function () {
    var b_imgs = document.getElementsByClassName("banner-img"),
        b_icons = document.getElementsByClassName("icon"),
        hl = document.getElementsByClassName("head-text");
    // 中英文切换
    for (var i = 0; i < hl.length; i++) {
        (function (i) {
            hl[i].onclick = function () {
                hl[i].style.color = "#38C078";
                hl[1 - i].style.color = "#444866";
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
    function b_roll() {
        for (i = 0; i < b_icons.length; i++) {
            if (i == b_icons.length - 1) {
                if (b_icons[i].className == "icon roll-icon-color-light") {
                    b_icons[i].className = "icon roll-icon-color-dark";
                    b_imgs[i].className = "banner-img banner-img-none";
                    b_icons[0].className = "icon roll-icon-color-light";
                    b_imgs[0].className = "banner-img banner-img-block";
                    break;
                }
            } else {
                if (b_icons[i].className == "icon roll-icon-color-light") {
                    b_icons[i].className = "icon roll-icon-color-dark";
                    b_imgs[i].className = "banner-img banner-img-none";
                    b_icons[i + 1].className = "icon roll-icon-color-light";
                    b_imgs[i + 1].className = "banner-img banner-img-block";
                    break;
                }

            }
        }

    }
    var b_roll_time = setInterval(b_roll, 3000);

    // 内容视频轮播
    var line_icons = document.getElementsByClassName("line-icon");
    var img_block = document.getElementsByClassName("img-block"),
        slideWidth = img_block[0].offsetWidth,
        num = 0;
    for (i = 1; i < img_block.length; i++) {
        img_block[i].style.left = slideWidth + 'px';
    }
    img_block[0].style.left = 0 + 'px';

    function loop () {
        img_block[num%2].style.left = -1000 + 'px';
        img_block[num%2].style.zIndex = 1;
        line_icons[num%2].className = "line-icon line-icon-dark";
        img_block[(num+1)%2].style.left = 0 + 'px';
        img_block[(num+1)%2].style.zIndex = 2;
        line_icons[(num+1)%2].className = "line-icon line-icon-light";
        setTimeout(function () {
            img_block[num%2].style.zIndex = 1;
            img_block[num%2].style.left = 1000 + 'px';
            num++;
        }, 400);
    }

    var timer = this.setInterval(loop, 3000);

    // 添加按钮效果
    for (i = 0; i < line_icons.length; i++) {
        (function (i) {
            line_icons[i].onclick = function () {
                clearInterval(timer);
                num = i+1;
                loop();
                timer = setInterval(loop, 3000);

                // if (img_block[0].offsetLeft == 0 || img_block[1].offsetLeft == 0) {
                //     if (line_icons[i].className == "line-icon line-icon-dark") {
                //         for (j = 0; j < line_icons.length; j++) {
                //             if (j == i) {
                //                 clearInterval(c_roll_time);
                //                 timeid = setInterval(c_slide, 10);
                //                 c_roll_time = setInterval(c_roll, 4570);
                //                 line_icons[j].className = "line-icon line-icon-light";
                //             } else {
                //                 line_icons[j].className = "line-icon line-icon-dark";
                //             }
                //         }
                //     }
                // }
            }
        })(i);
    }
}