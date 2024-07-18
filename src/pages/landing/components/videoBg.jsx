import heroVideo from "../../../assets/videos/heroVideo.mov"

const VideoBg = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden brightness-50">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={heroVideo}
      autoPlay
      loop
      muted
    />
   
  </div>

  )
}

export default VideoBg