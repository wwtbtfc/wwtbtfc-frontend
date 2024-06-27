import { ImgHTMLAttributes } from 'react';
import smallImg from './assets/NavButtonSmall.svg';
import smallImgHover from './assets/NavButtonSmallHover.svg';
import medImg from './assets/NavButtonMedium.svg';
import medImgHover from './assets/NavButtonMediumHover.svg';
import largeImg from './assets/NavButtonLarge.svg';
import largeImgHover from './assets/NavButtonLargeHover.svg';

interface NavigationButtonImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  word: string;
  hover: boolean;
}

export const NavigationButtonImage = ({
  word,
  hover,
}: NavigationButtonImageProps) => {
  // short button text
  if (word.length < 10 && !hover) {
    return (
      <img
        src={smallImg}
        style={{
          width: '100%',
        }}
      ></img>
    );
  } else if (word.length < 10 && hover) {
    return (
      <img
        src={smallImgHover}
        style={{
          width: '100%',
        }}
      ></img>
    );
  }
  // medium button text
  else if (word.length <= 20 && !hover) {
    return (
      <img
        src={medImg}
        style={{
          width: '100%',
        }}
      ></img>
    );
  } else if (word.length <= 20 && hover) {
    return (
      <img
        src={medImgHover}
        // style={{
        //   // width: '100%',
        // }}
      ></img>
    );
  }
  // long button text
  else if (word.length > 24 && !hover) {
    return (
      <img
        src={largeImg}
        style={{
          width: '100%',
        }}
      ></img>
    );
  } else if (word.length > 24 && hover) {
    return (
      <img
        src={largeImgHover}
        style={{
          width: '100%',
        }}
      ></img>
    );
  }
};
