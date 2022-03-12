
let 정답 = ''

function randomArr(){
    let 랜덤순서 = Math.floor(Math.random() * 연예인이름.length);

    console.log(연예인이름.length)

    정답 = 연예인이름[랜덤순서];
    getImage()
    getButton()
}

randomArr()


function getImage(){
    let url = new URL('https://dapi.kakao.com/v2/search/image?query=' + 정답 + '&size=50');
    let header = new Headers({"Authorization": "KakaoAK 303d0bec2f125cb557f855905208c012"})

    fetch(url,{headers: header})
        .then(res => res.json())
        .then(function(data){
            let image = data.documents;
            let 랜덤순서 = Math.floor(Math.random() * image.length);


            let 랜덤어레이 = image[랜덤순서];

            let render = ``;
                render += `<div class="col-md-12">
                                <img src="${랜덤어레이.image_url}" alt="" onerror="randomArr()">
                            </div>`
            document.querySelector('.box.row').innerHTML = render;
        })
        .catch(function(){
            randomArr()
        })
}

function getButton(){
    console.log(정답)
    let copy = [...연예인이름];
    copy.splice(copy.indexOf(정답), 1);


    
    let render = `<button class="btn btn-primary mr-2" onclick="collect()">${정답}</button>`
    for(let i = 0; i < 3; i++){
        let 랜덤순서 = Math.floor(Math.random() * copy.length);
        render+= `<button class="btn btn-primary mr-2" onclick="wrong()">${copy[랜덤순서]}</button>`;
        copy.splice(랜덤순서,1);
    }
    document.querySelector('.btn-box').innerHTML = render;

}

function collect(){
    alert('정답입니다');
    randomArr()
}

function wrong(){
    alert('틀렸음 \"' + 정답 + '\" 이지롱~');
    randomArr()
}