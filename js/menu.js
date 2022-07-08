$(document).ready(function(){
    
    const p_set_arr = [
        {img:"picnic_setA.png", name:"피크닉 세트 A"},
        {img:"picnic_setB.png", name:"피크닉 세트 B"},
    ];
    const sand_arr = [
        {img:"sand_01.png", name:"풀드포크 샌드위치"},
        {img:"sand_02.png", name:"더블 햄치즈 샌드위치"},
        {img:"sand_03.png", name:"베이컨 샌드위치"},
        {img:"sand_04.png", name:"바게트 카츠 샌드위치"},
        {img:"sand_05.png", name:"크로크 무슈"},
        {img:"sand_06.png", name:"클럽 샌드위치"},
        {img:"sand_07.png", name:"베지 샌드위치"},
        {img:"sand_08.png", name:"데리야끼 치킨 샌드위치"},
    ]
    const side_arr = [
        {img:"side_01.png", name:"어니언링"},
        {img:"side_02.png", name:"프렌치 프라이"},
        {img:"side_03.png", name:"멕시칸 나초 플레터"},
    ];
    const drink_arr = [
        {img:"drink_01.png", name:"코카콜라"},
        {img:"drink_02.png", name:"환타 오렌지"},
        {img:"drink_03.png", name:"환타 포도"},
        {img:"drink_04.png", name:"하이네켄"},
        {img:"drink_05.png", name:"버드와이저"},
    ];

    // 초기세팅 - 샌드위치 메뉴 보이기
    for(v of sand_arr){
        const box = `
        <div class="box">
            <div class="img">
                <img src="./img/menu/${v.img}" alt="${v.name}">
            </div>
            <div class="txt">
                <p>${v.name}</p>
            </div>
        </div>
        `;
        $("#menu .food").append(box);
    }

    // 버튼 클릭 시 해당 메뉴 보이기
    $("#menu .btns li").click(function(){
        $("#menu .btns li").removeClass("active");
        $(this).addClass("active");

        var menu = $(this).attr("menu");
        $("#menu .food").empty();

        if(menu == "p_set"){
            console.log("피크닉세트");
            for(v of p_set_arr){
                const box = `
                <div class="box">
                    <div class="img">
                        <img src="./img/menu/${v.img}" alt="${v.name}">
                    </div>
                    <div class="txt">
                        <p>${v.name}</p>
                    </div>
                </div>
                `;
                $("#menu .food").append(box);
            };
        }else if(menu == "sand"){
            for(v of sand_arr){
                const box = `
                <div class="box">
                    <div class="img">
                        <img src="./img/menu/${v.img}" alt="${v.name}">
                    </div>
                    <div class="txt">
                        <p>${v.name}</p>
                    </div>
                </div>
                `;
                $("#menu .food").append(box);
            }
        }else if(menu == "side"){
            for(v of side_arr){
                const box = `
                <div class="box">
                    <div class="img">
                        <img src="./img/menu/${v.img}" alt="${v.name}">
                    </div>
                    <div class="txt">
                        <p>${v.name}</p>
                    </div>
                </div>
                `;
                $("#menu .food").append(box);
            }
        }else if(menu == "drink"){
            for(v of drink_arr){
                const box = `
                <div class="box">
                    <div class="img">
                        <img src="./img/menu/${v.img}" alt="${v.name}">
                    </div>
                    <div class="txt">
                        <p>${v.name}</p>
                    </div>
                </div>
                `;
                $("#menu .food").append(box);
            }
        }

        return false;
    });

    $(document).on("click", "#menu .food .box", function(){
        $(location).attr("href", "./menu_detail.html");
    });
});