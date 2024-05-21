import React from "react";

const PictureComponent: React.FC<{
  id?: string;
  src: string;
  mediumSrc?: string;
  smallSrc?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  ariaHidden?: boolean;
  loadingPriority?: string;
}> = ({ id, src, mediumSrc = "", smallSrc = "", alt, className, width, height, ariaHidden, loadingPriority }) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");
  const webpMediumSrc = mediumSrc ? mediumSrc.replace(/\.\w+$/, ".webp") : "";
  const webpSmallSrc = smallSrc ? smallSrc.replace(/\.\w+$/, ".webp") : "";

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} media="(min-width: 1920px)" />
      <source
        type="image/webp"
        srcSet={mediumSrc ? webpMediumSrc : webpSrc}
        // media="(max-width: 1200px)"
        media="(min-width: 500px) and (max-width: 1920px)"
      />
      <source type="image/webp" srcSet={smallSrc ? webpSmallSrc : webpSrc} media="(max-width: 500px)" />
      {/* <source
        type="image/webp"
        srcSet={mediumSrc ? webpMediumSrc : webpSrc}
        media="(min-width: 768px) and (max-width: 1200px)"
      />
      <source
        type="image/webp"
        srcSet={mediumSrc ? webpMediumSrc : webpSrc}
        media="(max-width: 768px)"
      /> */}
      <img
        id={id}
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        aria-hidden={ariaHidden}
        // data-src={src}
        loading="lazy"
        {...(loadingPriority ? { loading: loadingPriority === "eager" ? "eager" : "lazy" } : false)}
      />
    </picture>
  );
};

export default PictureComponent;
