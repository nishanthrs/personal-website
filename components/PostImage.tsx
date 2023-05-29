type PostImageProps = {
  imageSrc: string;
}

function PostImage({imageSrc}: PostImageProps) {
  return (
    <img src={imageSrc} width="100" height="100" />
  );
}

export default PostImage;
