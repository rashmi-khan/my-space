
import ReactPlayer from "react-player";

export default function MainImage({ image_data }) {
  const isVideo = image_data?.media_type === "video"

  return (
    <div className=" flex flex-column h-auto max-w-full text-white ">
      {
        isVideo ? renderVideo() : renderImage()
      }
    </div>
  );

  function renderVideo() {
    return <ReactPlayer
      url={image_data?.url}
      width="100%"
      height="400px"
      controls={true}
      key={image_data?.url} />;
  }
  function renderImage() {
    return <img src={image_data?.url} />;
  }

}
