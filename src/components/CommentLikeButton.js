import {useState} from "react"

function CommentLikeButton() {

    const [likeCount, setCount] = useState(0)

function commentLikeHandler() {
    setCount(likeCount + 1)
}



return (
    <>
    <button onClick = {commentLikeHandler}>{`👍 ${likeCount}`}</button>    
    <br></br>
    </>
)
}

export default CommentLikeButton;