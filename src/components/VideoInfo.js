import Buttons from "./Buttons";

function VideoInfo({title, views, uploadDate}) {
    return (
        <>
        <h2>{title}</h2>
        <p>{views} Views | Uploaded {uploadDate}</p>

        <Buttons />
        </>
    )
}

export default VideoInfo;