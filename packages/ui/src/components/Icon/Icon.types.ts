import * as React from 'react';
import { IconSize, IconVariant } from './Icon.styles';

export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: IconSize;
    variant?: IconVariant;
}