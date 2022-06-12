import {
    StyledCallout,
    StyledCalloutIconWrapper,
    StyledCalloutLabelWrapper
} from './Callout.styles';
import { getVariantIcon } from './utils';
import type { CalloutProps } from './Callout.types';

const Callout: React.FC<CalloutProps> = (props) => {
    const { children, label, variant, ...rest } = props;

    const icon = label ? null : getVariantIcon(variant);

    return (
        <StyledCallout variant={variant} {...rest}>
            {icon && (
                <StyledCalloutIconWrapper variant={variant}>
                    {icon}
                </StyledCalloutIconWrapper>
            )}
            {label && (
                <StyledCalloutLabelWrapper variant={variant}>
                    {label}
                </StyledCalloutLabelWrapper>
            )}
            {children}
        </StyledCallout>
    );
};

export default Callout;