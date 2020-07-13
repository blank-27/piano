const kindex = {
    0:65,
    1:87,
    2:83,
    3:69,
    4:68,
    5:70,
    6:82,
    7:71,
    8:84,
    9:72,
    10:89,
    11:74,
    12:75,
    13:85,
    14:76,
    15:73,
    16:186
};

// window.addEventListener("load",() => {
    const audio = document.querySelectorAll('.media');
    const keys = document.querySelectorAll('.key');

    keys.forEach((key,index) => {
        key.addEventListener("click",() => {

            let curClass = document.getElementById(`key-${kindex[index]}`);

            audio[index].currentTime = 0;
            audio[index].play();
            curClass.classList.add("active");
            curClass.addEventListener("transitionend",() => {
                key.classList.remove("active");
            })
        });
    });

    const checkKeycode = (e) => {
        for (var i = 0;i<=17;i++){
            if(kindex[i]===e.keyCode){
                return 1;
                break;
            }
        }
        return -1;
    }

    // 65,87,83,69,68,70,71,71,84,72,85,74,75,79,76,73,186
    const checkKey = (e) =>{
        // console.log(e.keyCode)
        if(checkKeycode(e) === 1){
        const sound = document.querySelector(`#keys-${e.keyCode}`);
        const stylechange = document.querySelector(`#key-${e.keyCode}`);
        sound.currentTime = 0;
        sound.play();
        // console.log(sound)
        stylechange.classList.add("active");
        stylechange.addEventListener("transitionend",() => {
            stylechange.classList.remove("active");
        })
        }
    }

    document.addEventListener("keydown",checkKey,false);

    

// });