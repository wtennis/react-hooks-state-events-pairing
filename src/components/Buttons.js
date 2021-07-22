function Buttons({ upVotes, downVotes }) {
return (
    <>
    <span>
        <button>{`👍 ${upVotes}`}</button>
        <button>{`👎 ${downVotes}`}</button>
    </span>
    </>
)
}

export default Buttons;