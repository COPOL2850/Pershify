import noPlayingMusicCover from "../../../assets/svgs/no-playing-music-cover.svg";
import playButton from "../../../assets/svgs/play-button.svg";
import previuosButton from "../../../assets/svgs/previuos-button.svg";
import nextButton from "../../../assets/svgs/next-button.svg";
import pauseButton from "../../../assets/svgs/pause-button.svg";
import "../player/player.scss";

export const Player = (livePlayerData) => {
    // console.log(livePlayerData)
    return (
        <div className="player  h-full ">
            <div className="player-container w-full h-full">
                <div className="player-component-controller  w-full "></div>
                <div className="album-art-container w-full  flex items-center justify-center">
                    <img src={(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.album.cover_big : noPlayingMusicCover} className="album-art  "></img>
                </div>
                <div className="title-artist-container w-full ">
                    <div className="title text-white" >{(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.title : "یه موزیک پلی کن !!"}</div>
                    <div className="artist text-white">{(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.artist.name : ""}</div>
                </div>
                <div className="player-controll">
                    <audio src={(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.preview : ""} autoPlay></audio>
                    <div className="w-full ">
                        <input className="w-full" id="live-player-music-playback-time" type="range" />
                    </div>
                    <div className="player-control-button-container">

                        <button className="live-player-control-button" id="next-button">
                            <img src={nextButton} alt="" />

                        </button>
                        <button className="live-player-control-button" id="play-pause-button">
                            <img src={(true) ? pauseButton : playButton} alt="" />

                        </button>
                        <button className="live-player-control-button" id="previuos-button">
                            <img src={previuosButton} alt="" />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}