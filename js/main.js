window.onload = function() {
  document.addEventListener(
    "touchmove",
    function(event) {
      event.preventDefault();
    },
    false
  );

  let pengyouquanLayer = document.getElementById("pengyouquanLayer"); //朋友圈层
  let pengyouquanVideo = document.getElementById("pengyouquanVideo"); //朋友圈视频
  let pengyouquanLoading = document.getElementById("pengyouquanLoading"); //朋友圈视频loading

  let posterLayer = document.getElementById("posterLayer"); //海报图层
  let playBtn = document.getElementById("playBtn"); //海报播放按钮
  let playBtnText = document.getElementById("playBtnText"); //海报播放按钮
  let uploadBtn = document.getElementById("uploadBtn"); //海报上传按钮
  let mainvideoLayer = document.getElementById("mainvideoLayer");
  let mainVideoLoading = document.getElementById("mainVideoLoading");
  let mainvideo = document.getElementById("mainvideo");
  let tiaoguo = document.getElementById("tiaoguo");
  let tiaoguo2 = document.getElementById("tiaoguo2");

  let playMainPlayBtn=document.getElementById("playMainPlayBtn");
  // let yishuzi1=document.getElementById("yishuzi1");
  let yishuzi2=document.getElementById("yishuzi2");
  let initBtn=document.getElementById("initBtn");
  
  let themeImgArr=[
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png'
  ];


  let previewLayer = document.getElementById("previewLayer");
  let previewTemplate = document.getElementById("previewTemplate");
  let previewImage = document.getElementById("previewImage");
  let like = document.getElementById("like");
  let line = document.getElementById("line");
  let previewBtn = document.getElementById("previewBtn");
  let previewBtn2 = document.getElementById("previewBtn2");

  let saveBtn = document.getElementById("saveBtn");

  let themeLayer=document.getElementById('themeLayer');
  // let selectedThemeBtn=document.getElementById('selectedThemeBtn');
  let themeSelected=1;


  let resultLayer = document.getElementById("resultLayer");
  let resultImage = document.getElementById("resultImage");
  let orientation = null;
  let changeImgRotate = null;

  let compoundLayer = document.getElementById("compoundLayer");

  /**
   * loading
   */
  let loadingLayer = document.getElementById("loadingLayer");
  let decorationAnimation1 = document.getElementById("decorationAnimation1");
  let decorationAnimation2 = document.getElementById("decorationAnimation2");
  let keyFrames1;
  let keyFrames2;
  let keyFrames3;
  let keyFrames4;
  let keyFramesText;
  let isDestroy=false;
  function animation1() {
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
        img.src = "./images/ball-jump/qiutiao_000" + j + ".png";
      })(i);
    }

    function keyFramesHandler(imgArr) {
      keyFrames1 = new CanvasKeyFrames(loadingLayer, "array", imgArr, {
        fps: 12,
        width: "100%",
        height: "100%"
      });
      keyFrames1.play();
    }
  }
  // animation1();
  function animation2() {
    let count = -1;
    let imgArr = [];
    for (let i = 0; i <= 46; i++) {
      (function(i) {
        let img = new Image();
        img.onload = function() {
          img.onload = null;
          count++;
          imgArr.push(img);
          if (count == 46) {
            keyFramesHandler(imgArr);
          }
        };
        img.onerror = function() {};
        let j = i < 10 ? "0" + i : i;
        img.src = "./images/loading-finish2/shibukedang_000" + j + ".png";
      })(i);
    }

    function keyFramesHandler(imgArr) {
      keyFrames2 = new CanvasKeyFrames(loadingLayer, "array", imgArr, {
        fps: 15,
        loop: 1,
        width: "100%",
        height: "100%"
      });
      keyFrames2.play(function() {
        if (keyFrames2.state == "stop") {
            loadingLayer.style.display = "none";
            // $(loadingLayer).fadeOut(0);
            // keyFrames2.destroy();
            playPengyouquanVideo();
        }
      });
    }
  }
  function loading() {
    let imgArr = [
      "loading.gif",
      // "ball-jump/qiutiao_00001.png",
      // "ball-jump/qiutiao_00002.png",
      // "ball-jump/qiutiao_00003.png",
      // "ball-jump/qiutiao_00004.png",
      // "ball-jump/qiutiao_00005.png",
      // "ball-jump/qiutiao_00006.png",
      // "ball-jump/qiutiao_00007.png",
      // "ball-jump/qiutiao_00008.png",
      // "ball-jump/qiutiao_00009.png",
      // "ball-jump/qiutiao_00010.png",
      // "ball-jump/qiutiao_00011.png",
      // "ball-jump/qiutiao_00012.png",
      // "ball-jump/qiutiao_00013.png",
      // "ball-jump/qiutiao_00014.png",
      // "ball-jump/qiutiao_00015.png",
      // "ball-jump/qiutiao_00016.png",
      // "ball-jump/qiutiao_00017.png",
      // "ball-jump/qiutiao_00018.png",
      // "ball-jump/qiutiao_00019.png",
      // "ball-jump/qiutiao_00020.png",
      // "ball-jump/qiutiao_00021.png",
      // "ball-jump/qiutiao_00022.png",
      // "ball-jump/qiutiao_00023.png",
      // "ball-jump/qiutiao_00024.png",
      // "ball-jump/qiutiao_00025.png",
      // "ball-jump/qiutiao_00026.png",
      // "ball-jump/qiutiao_00027.png",
      // "ball-jump/qiutiao_00028.png",
      // "ball-jump/qiutiao_00029.png",
      
      "bubble-jump/qipao_00000.png",
      "bubble-jump/qipao_00001.png",
      "bubble-jump/qipao_00002.png",
      "bubble-jump/qipao_00003.png",
      "bubble-jump/qipao_00004.png",
      "bubble-jump/qipao_00005.png",
      "bubble-jump/qipao_00006.png",
      "bubble-jump/qipao_00007.png",
      "bubble-jump/qipao_00008.png",
      "bubble-jump/qipao_00009.png",
      "bubble-jump/qipao_00010.png",
      "bubble-jump/qipao_00011.png",
      "bubble-jump/qipao_00012.png",
     
      "loading-finish2/shibukedang_00000.png",
      "loading-finish2/shibukedang_00001.png",
      "loading-finish2/shibukedang_00002.png",
      "loading-finish2/shibukedang_00003.png",
      "loading-finish2/shibukedang_00004.png",
      "loading-finish2/shibukedang_00005.png",
      "loading-finish2/shibukedang_00006.png",
      "loading-finish2/shibukedang_00007.png",
      "loading-finish2/shibukedang_00008.png",
      "loading-finish2/shibukedang_00008.png",
      "loading-finish2/shibukedang_00010.png",
      "loading-finish2/shibukedang_00010.png",
      "loading-finish2/shibukedang_00011.png",
      "loading-finish2/shibukedang_00012.png",
      "loading-finish2/shibukedang_00013.png",
      "loading-finish2/shibukedang_00014.png",
      "loading-finish2/shibukedang_00015.png",
      "loading-finish2/shibukedang_00016.png",
      "loading-finish2/shibukedang_00017.png",
      "loading-finish2/shibukedang_00018.png",
      "loading-finish2/shibukedang_00018.png",
      "loading-finish2/shibukedang_00010.png",
      "loading-finish2/shibukedang_00030.png",
      "loading-finish2/shibukedang_00031.png",
      "loading-finish2/shibukedang_00032.png",
      "loading-finish2/shibukedang_00033.png",
      "loading-finish2/shibukedang_00034.png",
      "loading-finish2/shibukedang_00035.png",
      "loading-finish2/shibukedang_00036.png",
      "loading-finish2/shibukedang_00037.png",
      "loading-finish2/shibukedang_00038.png",
      "loading-finish2/shibukedang_00038.png",
      "loading-finish2/shibukedang_00030.png",
      "loading-finish2/shibukedang_00040.png",
      "loading-finish2/shibukedang_00041.png",
      "loading-finish2/shibukedang_00042.png",
      "loading-finish2/shibukedang_00043.png",
      "loading-finish2/shibukedang_00044.png",
      "loading-finish2/shibukedang_00045.png",
      "loading-finish2/shibukedang_00046.png",
      "reaizhe/woshireaizhe_00006.png",
      "reaizhe/woshireaizhe_00007.png",
      "reaizhe/woshireaizhe_00008.png",
      "reaizhe/woshireaizhe_00009.png",
      "reaizhe/woshireaizhe_00010.png",
      "reaizhe/woshireaizhe_00011.png",
      "reaizhe/woshireaizhe_00012.png",
      "reaizhe/woshireaizhe_00013.png",
      "reaizhe/woshireaizhe_00014.png",
      "reaizhe/woshireaizhe_00015.png",
      "reaizhe/woshireaizhe_00016.png",
      "reaizhe/woshireaizhe_00017.png",
      "reaizhe/woshireaizhe_00018.png",
      "reaizhe/woshireaizhe_00019.png",
      "tag/1.png",
      "tag/2.png",
      "tag/3.png",
      "tag/4.png",
      "tag/5.png",
      "tag/6.png",
      "tag/7.png",
      "tag/8.png",
      "tag/9.png",
      "tag/1_active.png",
      "tag/2_active.png",
      "tag/3_active.png",
      "tag/4_active.png",
      "tag/5_active.png",
      "tag/6_active.png",
      "tag/7_active.png",
      "tag/8_active.png",
      "tag/9_active.png",
      
      
      "hobby-bg.png",
      "layer-bg.png",
      "like-text.png",
      "poster-layer-logo.png",
      "poster-layer-people.png",
      "poster-layer-play-btn.png",
      "poster-layer-upload-btn.png",
      "preview-layer-text.png",
      "qrcode.png",
      "reselect-btn.png",
      // "result-default.png",
      "save-btn.png",
      "zanzhu-logo.png",
      "zuijia.png"
    ];
    let loadingSpan = document.getElementById("loadingSpan");
    let imgIndex = 0;
    for (let i = 0, len = imgArr.length; i < len; i++) {
      let img = new Image();
      img.src = "./images/" + imgArr[i];
      img.onload = function() {
        imgIndex++;
        let percent = parseInt(imgIndex / imgArr.length * 100);
        loadingSpan.innerHTML = percent + "%";
        if (imgIndex == imgArr.length) {
          // keyFrames1.destroy();
          loadingSpan.style.display = "none";
          loadingSprite.style.display="none";
          animation2();
        }
      };
    }
  }
  loading();


  function animationText() {
    isDestroy=false;
    var imgUrl='./images/text-animation/';
    var count=-1;
    switch (themeSelected){
      case 0:
      imgUrl+='1/yundong_000';
        break;
      case 1:
        imgUrl+='2/meishi_000';
        break;
      case 2:
        imgUrl+='3/yingyue_000';
        break;
      case 3:
        imgUrl+='4/wudao_000';
        break;
      case 4:
        imgUrl+='5/keji_000';
        break;
      case 5:
        imgUrl+='6/sheying_000';
        break;
      case 6:
        imgUrl+='7/yuedu_000';
        break;
      case 7:
        imgUrl+='8/youxi_000';
        break;
      case 8:
        imgUrl+='9/lvxing_000';
        break;
    }


    var imgArr = [];
    for (var i = 0; i <= 28; i++) {
      (function(i) {
        var img = new Image();
        img.onload = function() {
          img.onload = null;
          count++;
          imgArr.push(img);
          if (count == 28) {
            keyFramesHandler(imgArr);
          }
        };
        img.onerror = function() {};
        var j = i < 10 ? "0" + i : i;
        img.src = imgUrl + j + ".png";
      })(i);
    }

    function keyFramesHandler(imgArr) {
      keyFramesText = new CanvasKeyFrames(decorationAnimation1, "array", imgArr, {
        fps: 10,
        loop:1,
        width: "100%",
        height: "100%"
      });
        keyFramesText.play(function () {
          isDestroy=true;
        });
        
    
      
    }
  }


  //气泡运动
  function animation3() {
    let count = -1;
    let imgArr = [];
    for (let i = 0; i <= 12; i++) {
      (function(i) {
        let img = new Image();
        img.onload = function() {
          img.onload = null;
          count++;
          imgArr.push(img);
          if (count == 12) {
            keyFramesHandler(imgArr);
          }
        };
        img.onerror = function() {};
        let j = i < 10 ? "0" + i : i;
        img.src = "./images/bubble-jump/qipao_000" + j + ".png";
      })(i);
    }

    function keyFramesHandler(imgArr) {
      keyFrames3 = new CanvasKeyFrames(decorationAnimation2, "array", imgArr, {
        fps: 10,
        width: "100%",
        height: "100%"
      });
      keyFrames3.play();
    
      
    }
  }

  function animation4() {
    let count = 5;
    let imgArr = [];
    for (let i = 6; i <= 19; i++) {
      (function(i) {
        let img = new Image();
        img.onload = function() {
          img.onload = null;
          count++;
          imgArr.push(img);
          if (count == 19) {
            keyFramesHandler(imgArr);
          }
        };
        img.onerror = function() {};
        let j = i < 10 ? "0" + i : i;
        img.src = "./images/reaizhe/woshireaizhe_000" + j + ".png";
      })(i);
    }

    function keyFramesHandler(imgArr) {
      keyFrames4 = new CanvasKeyFrames(decorationAnimation2, "array", imgArr, {
        fps: 10,
        loop:1,
        width: "100%",
        height: "100%"
      });
      keyFrames4.play();
      // keyFrames4.stop(function(a) {
      //   console.log(a);
      //   if (keyFrames4.state == "stop") {
      //     keyFrames4.goto(19);
      //   }
      // });
    }
  }

  /**
   * 朋友圈视频
   */
  function playPengyouquanVideo() {
    pengyouquanLayer.style.display = "block";
    // var msgTxt = document.getElementById('msgTxt');
    var video = document.getElementById("video-ios");
    var canvas = document.getElementById("video-android");
    if (window.WeixinJSBridge) {
      WeixinJSBridge.invoke(
        "getNetworkType",
        {},
        function(e) {
          video.play();
        },
        false
      );
    } else {
      document.addEventListener(
        "WeixinJSBridgeReady",
        function() {
          WeixinJSBridge.invoke("getNetworkType", {}, function(e) {
            video.play();
          });
        },
        false
      );
    }
    //检测是否为非安卓浏览器并作处理
    var check = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if (check) {
      // msgTxt.innerHTML = "not Android mode"
      video.style.display = "block";
      video.play();
      //监听video加载完成

      video.addEventListener("waiting", function() {
        pengyouquanLoading.style.opacity = 1;
      });
      video.addEventListener("playing", function() {
        console.log("playing");
        pengyouquanLoading.style.opacity = 0;
      });
      video.addEventListener("canplaythrough", function() {
        console.log("canplaythrough");
        pengyouquanLoading.style.opacity = 0;
      });
      video.addEventListener("canplay", function() {
        console.log("canplay");
        pengyouquanLoading.style.opacity = 0;
      });

      //监听video播放结束
      video.addEventListener("ended", function() {
        console.log("ended");
        // playMainPlayBtn.style.display="block";
        pengyouquanLayer.style.display = "none";
        playBtn.style.display="none";
        playBtnText.style.display="none";
        uploadBtn.style.opacity=0;
        // posterLayer.style.display = "block";
        
      });
    } else {
      jsmpegPlay(canvas, "./mp4/pengyouquan.ts", startCallBack, endCallBack);
    }

    function jsmpegPlay(Vcanvas, vVideo, startFun, endFun) {
      var player = new JSMpeg.Player(vVideo, {
        canvas: Vcanvas,
        loop: false,
        autoplay: true,
        startSign: true,
        startCallBack: startFun,
        endCallBack: endFun
      });
    }

    //视频开始播放（解码完成）执行
    function startCallBack() {
      canvas.style.display = "block";
    }
    //视频播放完成执行
    function endCallBack() {
      console.log("endCallBack");
      // playMainPlayBtn.style.display="block";
      // posterLayer.style.display = "block";
      pengyouquanLayer.style.display = "none";
      playBtn.style.display="none";
      playBtnText.style.display="none";
      uploadBtn.style.opacity=0;
    }
  }
 
  initBtn.addEventListener('click',function () {
    mainvideoLayer.style.display = "block";
    playBtnText.innerText = "重新播放";
    playPengyouquanVideo2()
    // playBtn.click();
    // posterLayer.style.display = "block";
    // pengyouquanLayer.style.display = "none";
    // playBtn.style.display="none";
    // playBtnText.style.display="none";
    // uploadBtn.style.opacity=0;
  })

  function playPengyouquanVideo2() {
    mainvideoLayer.style.display = "block";
    // var msgTxt = document.getElementById('msgTxt');
    var video2 = document.getElementById("video-ios2");
    var canvas2 = document.getElementById("video-android2");
    if (window.WeixinJSBridge) {
      WeixinJSBridge.invoke(
        "getNetworkType",
        {},
        function(e) {
          video2.play();
        },
        false
      );
    } else {
      document.addEventListener(
        "WeixinJSBridgeReady",
        function() {
          WeixinJSBridge.invoke("getNetworkType", {}, function(e) {
            video2.play();
          });
        },
        false
      );
    }


   
    //检测是否为非安卓浏览器并作处理
    var check = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if (check) {
      // msgTxt.innerHTML = "not Android mode"
      video2.style.display = "block";
      video2.play();
      //监听video加载完成

      video2.addEventListener("waiting", function() {
        mainVideoLoading.style.opacity = 1;
      });
      video2.addEventListener("playing", function() {
        console.log("playing");
        mainVideoLoading.style.opacity = 0;
      });
      video2.addEventListener("canplaythrough", function() {
        console.log("canplaythrough");
        mainVideoLoading.style.opacity = 0;
      });
      video2.addEventListener("canplay", function() {
        console.log("canplay");
        mainVideoLoading.style.opacity = 0;
      });


      tiaoguo.style.display="block";
      tiaoguo.addEventListener("touchstart", function(e) {
        video2.pause();
        mainvideoLayer.style.display = "none";
        playBtn.style.display="block";
      playBtnText.style.display="block";
      uploadBtn.style.opacity=1;;
      initBtn.style.display="none";
      });
  

      //监听video播放结束
      video2.addEventListener("ended", function() {
        console.log("ended");
        mainvideoLayer.style.display = "none";
        playBtn.style.display="block";
      playBtnText.style.display="block";
      uploadBtn.style.opacity=1;;
      initBtn.style.display="none";
      });
    } else {
      jsmpegPlay(canvas2, "./mp4/video.ts", startCallBack, endCallBack);
      tiaoguo2.style.display="block";
      var player;
      tiaoguo2.addEventListener("touchstart", function(e) {
        mainvideoLayer.style.display = "none";
        playBtn.style.display="block";
      playBtnText.style.display="block";
      uploadBtn.style.opacity=1;;
      initBtn.style.display="none";
        player.destroy();
      });
    }

    function jsmpegPlay(Vcanvas, vVideo, startFun, endFun) {
      player = new JSMpeg.Player(vVideo, {
        canvas: Vcanvas,
        loop: false,
        autoplay: true,
        startSign: true,
        startCallBack: startFun,
        endCallBack: endFun
      });
    }
    
    //视频开始播放（解码完成）执行
    function startCallBack() {
      canvas2.style.display = "block";
    }
    //视频播放完成执行
    function endCallBack() {
      console.log("endCallBack");
      mainvideoLayer.style.display = "none";
      playBtn.style.display="block";
      playBtnText.style.display="block";
      uploadBtn.style.opacity=1;;
      initBtn.style.display="none";
    }

    

  }
  // function playPengyouquanVideo2(){

  //     pengyouquanLayer.style.display="block";
  //     pengyouquanVideo.play();
  //     pengyouquanVideo.addEventListener('playing',function(e){
  //       console.log('playing',444);
  //       // pengyouquanLoading.style.opacity=0;
  //     })
  //     pengyouquanVideo.addEventListener('canplay',function(e){
  //       console.log('playing',444);
  //       // pengyouquanLoading.style.opacity=0;
  //     })

  //     pengyouquanVideo.addEventListener('canplaythrough',function(e){
  //       console.log('canplaythrough',333);
  //       pengyouquanLoading.style.opacity=0;
  //     })

  //     pengyouquanVideo.addEventListener('ended', function (e) {
  //             console.log('ended');
  //             posterLayer.style.display="block";
  //             pengyouquanLayer.style.display="none";

  //       })

  //     pengyouquanVideo.addEventListener('waiting', function (e) {
  //       console.log('waiting',666);
  //       pengyouquanLoading.style.opacity=1;
  //     })

  // }
  // document.addEventListener("WeixinJSBridgeReady", function() {
  //   pengyouquanVideo.play();
  // });

  /**
   * 视频播放
   */
  playBtn.addEventListener("click", function(e) {
    mainvideoLayer.style.display = "block";
    playBtnText.innerText = "重新播放";
    playPengyouquanVideo2();
  });
  // mainvideo.addEventListener("ended", function(e) {
  //   mainvideoLayer.style.display = "none";
  // });
  // tiaoguo.addEventListener("touchstart", function(e) {
  //   mainvideo.pause();
  //   mainvideoLayer.style.display = "none";
  // });














  /**
   * 裁剪图片的base64
   */

  var pc = new bjj.PhotoClip("#clipLayer", {
    size: [300, 400],
    outputSize: [0, 0],
    // adaptive: ['60%', '80%'],
    file: previewBtn,
    view: "#imgArea",
    ok: "#clipBtn",
    //img: 'img/mm.jpg',
    loadStart: function() {
      console.log("开始读取照片");
    },
    loadComplete: function() {
      console.log("照片读取完成");
      clipLayer.style.display = "block";
    },
    clipFinish: function(dataURL) {
      let imgURL = dataURL;
      // clipLayer.style.display = "none";
      $(clipLayer).fadeOut(0);
      // posterLayer.style.display = "none";
      $(posterLayer).fadeOut(0);
      // pc.destroy();

      // previewImage.style.backgroundImage = `url("${imgURL}")`;
      // resultImage.style.backgroundImage = `url("${imgURL}")`;
      previewImage.src = imgURL;
      resultImage.src = imgURL;

      // yishuzi1.src='./images/text/'+themeImgArr[themeSelected];
      yishuzi2.src='./images/text/'+themeImgArr[themeSelected];
      if(isDestroy){
        keyFramesText.destroy();
      }
      animationText();
      animation3();
      // animation4();
    },
    fail: function(msg) {
      alert("失败", msg);
    }
  });

  // let hobbyText = document.getElementById("hobbyText");

  // like.ontouchstart = function() {
  //   // console.log(12);
  //   like.value = "";
  //   line.style.display = "none";
  // };
  // like.onchange = function(e) { 
  //   console.log(e.target.value);
  //   hobbyText.innerText = e.target.value;
  // };

  //选择照片
  // previewBtn.addEventListener("change", function(e) {
  //   let file = e.target.files[0];
  //   if (!/image\/\w+/.test(file.type)) {
  //     alert("看清楚哦，这个需要图片！");
  //   } else {
  //     //获取ios下图片旋转方向角（exif.js插件）
  //     EXIF.getData(file, function() {
  //       EXIF.getAllTags(this);
  //       orientation = EXIF.getTag(this, "Orientation");
  //       // alert(orientation)
  //       if (orientation == 6) {
  //         changeImgRotate = 90;
  //       } else if (orientation == 8) {
  //         changeImgRotate = 270;
  //       } else if (orientation == 3) {
  //         changeImgRotate = 180;
  //       } else {
  //         changeImgRotate = 0;
  //       }
  //     });

  //     let fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = function(e) {
  //       previewImage.style.transform = `rotate(${changeImgRotate}deg)`;
  //       previewImage.style.backgroundImage = `url("${e.target.result}")`;
  //       // previewImage.src=e.target.result;
  //       resultImage.style.transform = `rotate(${changeImgRotate}deg)`;
  //       resultImage.style.backgroundImage = `url("${e.target.result}")`;
  //       // resultImage.src=e.target.result;
  //     };
  //   }
  // });

  previewBtn2.addEventListener('click',function () {
    themeLayer.style.display="block";
  })
  console.log(themeSelected);
  let themeArr=document.querySelectorAll('.theme');
  themeArr.forEach(function(ele,index){
    // console.log(index);
      // ele.addEventListener('change',function (e) {
      //     themeSelected=e.target.value;
      //     console.log(themeSelected);
      //     themeLayer.style.display="none";
      //     previewBtn.click();
      // })
      ele.addEventListener('click',(e)=> {
        themeSelected=index;
        console.log(themeSelected);
        themeLayer.style.display="none";
          previewBtn.click();
      })
  })
  uploadBtn.addEventListener("click", function() {
    themeLayer.style.display="block";
    
  });
  
 
  // selectedThemeBtn.addEventListener("click",function () {
  //   themeLayer.style.display="none";
  //   previewBtn.click();
  // })


  saveBtn.addEventListener("click", function(e) {
    // if (like.value == "") {
    //   alert("请输入文本内容");
    //   return;
    // }
    resultLayer.style.display = "block";
    // console.log(resultImage.src);

    convert2canvas();

    // html2canvas(resultLayer, {
    //   useCORS: true, //图片是否跨域
    //   allowTaint: true,//允许加载跨域的图片
    //   backgroundColor: "#fff",
    //   onrendered: function(canvas) {
    //     compoundLayer.innerHTML = "";
    //     // compoundLayer.appendChild(canvas);
    //     compoundLayer.style.display = "block";
    //     let dataUrl = canvas.toDataURL("image/png");
    //     let newImg = document.createElement("img");
    //     newImg.src = dataUrl;
    //     compoundLayer.appendChild(newImg);

    //   }
    // });
  });

  function convert2canvas() {
    let width = resultLayer.offsetWidth;
    let height = resultLayer.offsetHeight;
    let canvas = document.createElement("canvas");
    let scale = 2;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.getContext("2d").scale(scale, scale);

    var opts = {
      scale: scale,
      canvas: canvas,
      // logging: true,
      width: width,
      height: height
    };
    html2canvas(resultLayer, opts).then(function(canvas) {
      // compoundLayer.innerHTML = "";
      let img = Canvas2Image.convertToImage(
        canvas,
        canvas.width,
        canvas.height
      );

      // compoundLayer.appendChild(canvas);

      
      // let dataUrl = canvas.toDataURL("image/png");
      // let newImg = document.createElement("img");
      // newImg.src = dataUrl;
      img.style.width = canvas.width / 2 + "px";
      img.style.height = canvas.height / 2 + "px";
      compoundLayer.appendChild(img);
      compoundLayer.style.display = "block";
    });
  }
};
