import { Children } from './ChildrenPropTypes';
import { Image } from './ImageTypes';

export interface Hero extends Image, Children {
  title: string;
  className?: string;
}

export interface HeroWithoutImage extends Children {
  title: string;
}
