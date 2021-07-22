import video from "../data/video.js";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

      <VideoInfo />
      <Comments />
    </div>
  );
}

export default App;
