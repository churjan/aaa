document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);


let upLoadInput = document.getElementById('upLoadInput');
let imagePreview = document.getElementById('imagePreview');
// let ctx = canvas.getContext("2d");
let orientation = null;
let changeImgRotate = null;

//选择照片
upLoadInput.addEventListener('change', function (e) {
    let file = e.target.files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("看清楚哦，这个需要图片！");
    } else {
        //获取ios下图片旋转方向角（exif.js插件）
        EXIF.getData(file, function () {
            EXIF.getAllTags(this);
            orientation = EXIF.getTag(this, 'Orientation');
            if (orientation == 6) {
                changeImgRotate = 90
            } else if (orientation == 8) {
                changeImgRotate = 270
            } else if (orientation == 3) {
                changeImgRotate = 180
            } else {
                changeImgRotate = 0
            }
        });

        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            imagePreview.style.transform = `rotate(${changeImgRotate}deg)`;
            imagePreview.style.background = `url("${e.target.result}") center/cover no-repeat`;
        }
    }
})
