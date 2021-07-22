import {useState} from "react";

function Buttons({ upVotes, downVotes }) {

const [likeCount, setLikeCount] = useState(upVotes)
const [dislikeCount, setDislikeCount] = useState(downVotes)


function likeHandler() {
    setLikeCount(likeCount + 1)
}

function dislikeHandler() {
    setDislikeCount(dislikeCount + 1)
}

return (
    <>
    <span>
        <button onClick = {likeHandler}>{`👍 ${likeCount}`}</button>
        <button onClick = {dislikeHandler}>{`👎 ${dislikeCount}`}</button>
    </span>
    </>
)
}

export default Buttons;