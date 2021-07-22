function Comments({comments}) {
    const commentList = comments.map((commentObj)=> {
        return (
            <>
            <strong>{commentObj.user}</strong>
            <p>{commentObj.comment}</p>
            </>
        )
    })
    return (
       <>
        <h2>{`${comments.length} Comments`}</h2>
        {commentList}
        </>
    )
}

export default Comments;