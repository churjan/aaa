  document.addEventListener(
    "touchmove",
    function(event) {
      event.preventDefault();
    },
    false
  );

  let previewLayer = document.getElementById("previewLayer");
  let previewTemplate = document.getElementById("previewTemplate");
  let previewImage = document.getElementById("previewImage");
  let like = document.getElementById("like");
  let line = document.getElementById("line");
  let previewBtn = document.getElementById("previewBtn");
  let saveBtn = document.getElementById("saveBtn");

  let resultLayer = document.getElementById("resultLayer");
  let resultImage = document.getElementById("resultImage");
  let orientation = null;
  let changeImgRotate = null;

  let compoundLayer = document.getElementById("compoundLayer");

  /**
   * loading
   */

  let count = 0;
  let imgArr = [];
  for (let i = 1; i <= 29; i++) {
    (function(i) {
      let img = new Image();
      img.onload = function() {
        img.onload = null;
        count++;
        imgArr.push(img);
        if (count == 29) {
          keyFramesHandler(imgArr);
        }
      };
      img.onerror = function() {};
      let j = i < 10 ? "0" + i : i;
      img.src = "../images/ball-jump/qiutiao_000" + j + ".png";
    })(i);
  }

    function keyFramesHandler(imgArr) {
        let keyFrames;
        keyFrames = new CanvasKeyFrames(
        document.querySelector("#loading"),
        "array",
        imgArr,
        {
            fps: 15,
            width: "100%",
            height: "100%"
        }
        );
        keyFrames.play();
    }
    
    // let imgArr = [

    //   ];
    //   let loading = document.getElementById("loading");
    //   let loadingSpan = document.getElementById("loadingSpan");
    //   let imgIndex = 0;
    //   for (let i = 0, len = imgArr.length; i < len; i++) {
    //     let img = new Image();
    //     img.src = "./images/" + imgArr[i];
    //     img.onload = function() {
    //       imgIndex++;
    //       let percent = parseInt(imgIndex / imgArr.length * 100);
    //       loadingSpan.innerHTML = percent + "%";

    like.ontouchstart = function() {
      // console.log(12);
      like.value = "";
      line.style.display = "none";
    };
    like.onchange = function(e) {
      console.log(e.target.value);
    };
    //选择照片
    previewBtn.addEventListener("change", function(e) {
      let file = e.target.files[0];
      if (!/image\/\w+/.test(file.type)) {
        alert("看清楚哦，这个需要图片！");
      } else {
        //获取ios下图片旋转方向角（exif.js插件）
        EXIF.getData(file, function() {
          EXIF.getAllTags(this);
          orientation = EXIF.getTag(this, "Orientation");
          // alert(orientation)
          if (orientation == 6) {
            changeImgRotate = 90;
          } else if (orientation == 8) {
            changeImgRotate = 270;
          } else if (orientation == 3) {
            changeImgRotate = 180;
          } else {
            changeImgRotate = 0;
          }
        });

        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function(e) {
          previewImage.style.transform = `rotate(${changeImgRotate}deg)`;
          previewImage.style.backgroundImage = `url("${e.target.result}")`;
          // previewImage.src=e.target.result;
          resultImage.style.transform = `rotate(${changeImgRotate}deg)`;
          resultImage.style.backgroundImage = `url("${e.target.result}")`;
          // resultImage.src=e.target.result;
        };
      }
    });

    saveBtn.addEventListener("click", function(e) {
      resultLayer.style.display = "block";
      html2canvas(resultLayer, {
        useCORS: true, //图片是否跨域
        taintTest: true,
        backgroundColor: "#000",
        onrendered: function(canvas) {
          // compoundLayer.appendChild(canvas);
          compoundLayer.innerHTML = "";
          let dataUrl = canvas.toDataURL();
          let newImg = document.createElement("img");
          newImg.src = dataUrl;
          compoundLayer.appendChild(newImg);
          compoundLayer.style.display = "block";
        }
      });
    });
  
