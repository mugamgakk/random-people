
let 정답 = ''

function randomArr(){
    let 랜덤순서 = Math.floor(Math.random() * 연예인이름.length);


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

    let arr = []
    arr.push(정답);
    for(let i = 0; i < 3; i++){
        let 랜덤순서 = Math.floor(Math.random() * copy.length);
        arr.push(copy[랜덤순서]);
    }

    let render = ''
    for(let i = 0; i < 4; i++){
        let 랜덤순서 = Math.floor(Math.random() * arr.length);
        render+= `<button class="btn btn-secondary mr-2" onclick="isTrue('${arr[랜덤순서]}')">${arr[랜덤순서]}</button>`;
        arr.splice(랜덤순서,1);
    }

    document.querySelector('.btn-box').innerHTML = render;

}

function isTrue(이름){
    if(정답 == 이름){
        alert('정답입니다');
        randomArr()
    }else{
        alert('떙~ ' + 정답 + '입니다.');
        randomArr()
    }
}