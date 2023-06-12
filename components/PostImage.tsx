type PostImageProps = {
  imageSrc: string;
}

function PostImage({imageSrc}: PostImageProps) {
  return (
    <img className="object-cover h-40 w-40 rounded-full" src={imageSrc} alt="Avatar" />
  );
}

export default PostImage;
