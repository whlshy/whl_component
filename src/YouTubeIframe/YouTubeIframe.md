[YouTube Iframe API 官方文件](https://developers.google.com/youtube/iframe_api_reference?hl=zh-TW)

```js
let player = null;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const [videoid, setVideoid] = React.useState("m3jtcV9yMDk");

const onPlayerReady = async(event) => {
  player.playVideo();
  player.mute();
  await sleep(1000 * 5);
  player.pauseVideo();
  player.loadVideoById("ZycbRzRxN8U");
  player.pauseVideo();
};

<div>
  <YouTubeIframe
    videoid={videoid}
    playerid="player"
    setPlayer={(obj) => {
      player = obj;
    }}
    onPlayerReady={onPlayerReady}
    player={player}
  ></YouTubeIframe>

  <div id="player"></div>
</div>;
```
