export default function MainImage({ image_data }) {
  return (
    <div className=" flex flex-column h-auto max-w-full ">
      <img src={image_data?.url} />
    </div>
  );
}
