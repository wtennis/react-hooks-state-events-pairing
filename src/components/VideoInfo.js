import Buttons from "./Buttons";

function VideoInfo({title, views, uploadDate, videoInfo}) {
    return (
        <>
        <h2>{title}</h2>
        <p>{views} Views | Uploaded {uploadDate}</p>

        <Buttons upVotes = {videoInfo.upvotes} downVotes = {videoInfo.downvotes}/>
        </>
    )
}

export default VideoInfo;