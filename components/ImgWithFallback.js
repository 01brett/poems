const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
      <style jsx>{`
        picture {
          display: block;
        }
        picture source {
          display: block;
        }
        picture img {
          display: block;
        }
      `}</style>
    </picture>
  )
}

export default ImgWithFallback
