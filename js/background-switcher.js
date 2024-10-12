window.onload = function() {
    var backgrounds = [
        'background/11.jpg',
        'img/background2.jpg',
        'img/background3.jpg',
        // 添加更多背景图片路径
    ];
    var currentBackgroundIndex = 0;

    function changeBackground() {
        var body = document.body;
        body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 120000); // 每5秒切换一次背景
};