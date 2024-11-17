import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

const IconButtonWrapper = React.forwardRef(
    ({ onClick, className = '', children, ...props }, ref) => {
        // Wrapper classes for the div around IconButton
        const wrapperClasses = 'flex w-8 h-8 justify-center items-center  flex-shrink-0 bg-InputBG text-foreground border-[1px] border-InputBorder  rounded-lg cursor-pointer ' + className;

        return (
            <div className={wrapperClasses} onClick={onClick} ref={ref} {...props}>
                {children}
            </div>
        );
    }
);

IconButtonWrapper.displayName = 'IconButtonWrapper';

// Usage example
export const IconButton = React.forwardRef(
    ({ asChild = false, className = '', ...props }, ref) => {
        const iconButtonClasses = 'text-foreground' + className; // Classes specifically for the IconButton

        const Comp = asChild ? Slot : 'button';

        return (
            <IconButtonWrapper {...props} ref={ref}>
                <Comp className={iconButtonClasses} {...props}>
                    {props.children}
                </Comp>
            </IconButtonWrapper>
        );
    }
);

IconButton.displayName = 'IconButton';

// Example usage
/*
<IconButton
    onClick={() => {
        if (onNewSessionClick) onNewSessionClick(true);
    }}
>
    <Pencil2Icon />
</IconButton>
*/
