
export default function MainImage({ image_data}) {
  return (
    <div className="flex flex-column max-w-full object-cover">
      <img src={image_data?.url} />
    </div>
  );
}


