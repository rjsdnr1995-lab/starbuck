// 유츕, 아이프래임 apifmf 비동기로 로드
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 함수 이름은 유튜브 아이프레임 api에서 사용하는 이름이기 때문에,
//다르게 지정하면 동작하지 않는다
var player;
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "szBtxUaYVJ4", //최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "szBtxUaYVJ4", //반복 재생할 유튜브 영상 id 목록
    },
    events: {
      // 영상이 준비 되었을 때
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
