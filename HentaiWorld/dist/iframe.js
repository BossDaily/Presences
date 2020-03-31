var iframe = new iFrame();
iframe.on("UpdateData", () => {
  if (document.querySelector("#video-player") !== null) {
    var hentai = document.querySelector("#video-player");
    if (hentai != undefined && !isNaN(hentai.duration)) {
      iframe.send({
        iframe_video: {
          iFrameVideo: true,
          currTime: hentai.currentTime,
          duration: hentai.duration,
          paused: hentai.paused,
        },
      });
    }
  }
});
