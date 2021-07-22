// import CommentsButton from "./CommentsButton"
import {useState} from "react"
function Comments({comments}) {
    const commentList = comments.map((commentObj)=> {
        return (
            <>
            <strong>{commentObj.user}</strong>
            <p>{commentObj.comment}</p>
            </>
        )
    })

    const [showComment, setComment] = useState(true)
    function showComments(){
        setComment(!showComment)
    }

    return (
       <>
        <br></br>
        <button onClick = {showComments}>{showComment ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
        {showComment ? <><h2>{`${comments.length} Comments`}</h2>{commentList}</> : null }
        </>
    )
}

export default Comments;