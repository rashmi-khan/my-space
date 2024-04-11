import ReactPlayer from "react-player";

export default function VideoPlayer({url,title,description}){
    return(
        <div key={url}>
        <ReactPlayer
          url={url}
          width="100%"
          height="400px"
          controls={true}
          key={url}
        />
        <div className="text-center ">
          <h1 className="text-white font-light text-2xl pb-10 pt-10 ">
            {title}
          </h1>
          <p className="text-white opacity-75 line-clamp-3  ">
            {description}
          </p>
        </div>
      </div>

    )
}