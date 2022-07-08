$(document).ready(function () {

    //main slider
    let num = 1;
    setInterval(function(){
        $(".slider_frame > div").removeClass("show");
        $(".slider_frame > div").eq(num).addClass("show");
        $(".pager li").removeClass("active");
        $(".pager li").eq(num).addClass("active");
        num++;
        if(num == 3){
            num = 0;
        }
    }, 4000);
    


    //hot menu
    //box
    const hot_arr = [
        {img : "sandwich_01.png", name : "카츠 바게트 샌드위치", info : "바삭바삭한 돈카츠와 담백한 바게트의 맛있는 만남", price : 6400},
        {img : "sandwich_02.png", name : "베이컨 샌드위치", info : "짭짤한 베이컨만 더해져도 샌드위치의 풍미가 한층 업그레이드!", price : 5200},
        {img : "sandwich_03.png", name : "풀드포크 샌드위치", info : "육즙 가득 풀드포크를 샌드위치에 듬뿍 넣었다!", price : 6400},
        {img : "sandwich_04.png", name : "더블 햄치즈 샌드위치", info : "햄과 치즈가 가득한 샌드위치의 정석 햄치즈 샌드위치를 두 배 크기로!", price : 4700},
    ];

    let $num = 0;
    for(v of hot_arr){
        const box_top = `
        <div class="sw_slide" rel="${$num}">
            <img src="./img/${v.img}" alt="${v.name}">
        </div>
        `;
        const box_bottom = `
        <div class="box">
            <h4>${v.name}</h4>
            <p>${v.info}</p>
            <div class="price_wrap">
                <p><span class="price">${v.price}</span> 원</p>
                <div class="cart_icon"></div>
            </div>
        </div>
        `;
        $("#hot .sw_slider").append(box_top);
        $("#hot .bottom").append(box_bottom);
        $num++;
    }

    //slider
    $(".sw_slider").prepend($(".sw_slider .sw_slide").last());
    $(".bottom .box").eq(0).addClass("active");
    setInterval(function(){
        $(".bottom .box").removeClass("active");
        const first = $(".sw_slider .sw_slide").eq(0);
        const index = $(".sw_slider .sw_slide").eq(2).attr("rel");

        $(".sw_slider").stop().animate({left:"-200%"}, 500, function(){
            $(".sw_slider").append(first).css({left:"-100%"});
            $(".bottom .box").eq(index).addClass("active");
        });
    }, 4500);


    //recommand
    const sand_arr = [
        ["sandwich_02.png", "베이컨 샌드위치"],
        ["sandwich_01.png", "카츠바케트 샌드위치"],
        ["sandwich_04.png", "더블 햄치즈 샌드위치"],
        ["sandwich_03.png", "풀드포크 샌드위치"],
    ];

    function roulette(a){
        $("#recommand .cont").addClass("rotate"+a);
        $("#recommand .sandwiches img").eq(a-1).css({display:"block"});
        $("#recommand .roulette img").css({"transform": "rotate("+(337.5 + 45 * a)+"deg)"});
        $(".sandwiches").stop().delay(900).animate({left: "79%"}, 500);
        setTimeout(function(){
            $(".rc_menu").stop().delay(1000).text(sand_arr[a-1][1]);
        }, 1300);
    };

    $("#recommand .start").click(function(){
        console.log("click event");
        random = Math.ceil(Math.random() * 4);  //1~4
            
        console.log(random);

        $(".sandwiches").css({left: "20%"});
        $("#recommand .sandwiches img").css({display:"none"});
        $(".rc_menu").text("두구두구~!");
        $("#recommand .cont").removeClass("rotate1");
        $("#recommand .cont").removeClass("rotate2");
        $("#recommand .cont").removeClass("rotate3");
        $("#recommand .cont").removeClass("rotate4");
        setTimeout(() => {
            roulette(random);
        },500);
        // }
        // $("#recommand .roulette img").css({transform: `rotate(360 + (22.5 * ${random}))deg)`});
    });

    $(document).on("click", "#hot .bottom .box", function(){
        $(location).attr("href", "./menu_detail.html");
    });
});