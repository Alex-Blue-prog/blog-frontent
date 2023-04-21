import React from 'react';

export const Image = ({src, ...rest}) => {
  //check if the src is from the aws cloud or localhost
  src = src && src.includes("https://") ? src : process.env.REACT_APP_API + "/" + src;

  return (
    <img {...rest} src={src} alt={rest.alt} />
  )
}
