import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class YouTubeIframe extends Component {
    static propTypes = {
        /** YouTube 的 videoid*/
        videoid: PropTypes.string.isRequired,
        /** 起始秒數*/
        t: PropTypes.number,
        /** 要裝 player iframe 的容器的 id, e.g. `<div id="player"></div>`*/
        playerid: PropTypes.string,
        /** 當播放器準備好時會進入這個 func*/
        onPlayerReady: PropTypes.func,
        /** 當播放器狀態改變時會進入這個 func*/
        onPlayerStateChange: PropTypes.func,
        /** 當播放器畫質改變時會進入這個 func*/
        onPlaybackQualityChange: PropTypes.func,
        /** 回傳 player 控制物件*/
        setPlayer: PropTypes.func,
        /** setPlayer function 所傳的 player*/
        player: PropTypes.object,
    }

    static defaultProps = {
        t: 0,
        playerid: 'player',
        player: null,
        onPlayerReady: (event) => {},
        onPlayerStateChange: (event) => {},
        onPlaybackQualityChange: (event) => {},
        setPlayer: (player) => {},
    }
    
    componentDidMount = async () => {
        this.loadYTApi()
    }

    componentDidUpdate = async (prevProps, prevState) => {
        const { player, t, videoid } = this.props;
        if(prevProps.videoid != videoid && player) {
            player.loadVideoById({
                videoId: videoid,
                startSeconds: parseFloat(t)
            })
        }
        else if(prevProps.t != t && player){
            player.seekTo(t)
        }
    }

    loadYTApi = async () => {
        if(!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            window.onYouTubeIframeAPIReady = this.loadVideo; // onYouTubeIframeAPIReady will load the video after the script is loaded
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else { // If script is already there, load the video directly
            this.loadVideo();
        }
    }

    loadVideo = () => { // the Player object is created uniquely based on the id in props
        const { videoid, onPlayerReady, onPlayerStateChange, onPlaybackQualityChange, setPlayer, t, playerid } = this.props;
        setPlayer(new YT.Player(playerid, {
            videoId: videoid,
            playerVars: {
                'start': parseFloat(t)
              },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onPlaybackQualityChange': onPlaybackQualityChange,
            },
        }))
    };

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}
