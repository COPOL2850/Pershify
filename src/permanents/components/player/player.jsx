import "../player/player.scss";

export const Player = (livePlayerData) => {
    console.log(livePlayerData)
    return (
        <div className="player bg-green-700 h-full ">
            <div className="player-container w-full h-full">
                <div className="player-component-controller bg-red-600 w-full "></div>
                <div className="album-art-container w-full bg-blue-700 flex items-center justify-center">
                    <img src={(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.album.cover_big : ""} className="album-art  "></img>
                </div>
                <div className="title-artist-container w-full bg-yellow-500">
                    <div className="title" >{(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.title : ""}</div>
                    <div className="artist">{(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.artist.name : ""}</div>
                </div>
                <div className="player-controll">
                    <audio src={(livePlayerData.livePlayerData !== undefined && livePlayerData.livePlayerData !== null) ? livePlayerData.livePlayerData.preview : ""} controls></audio>
                </div>
            </div>
        </div>
    )
}