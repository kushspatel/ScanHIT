import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

const ChatActionButtonWrapper = React.forwardRef(
    ({ onClick, className = '', children, ...props }, ref) => {
    // Wrapper classes for the div around ChatActionButton
        const wrapperClasses =
      'flex w-5 h-5 justify-center items-center flex-shrink-0 text-foreground/50 rounded-sm cursor-pointer hover:scale-90' +
      className;

        return (
            <div className={wrapperClasses} onClick={onClick} ref={ref} {...props}>
                {children}
            </div>
        );
    }
);

ChatActionButtonWrapper.displayName = 'ChatActionButtonWrapper';

// Usage example
export const ChatActionButton = React.forwardRef(
    ({ asChild = false, className = '', ...props }, ref) => {
        const ChatActionButtonClasses = 'text-foreground/90' + className; // Classes specifically for the ChatActionButton

        const Comp = asChild ? Slot : 'button';

        return (
            <ChatActionButtonWrapper {...props} ref={ref}>
                <Comp className={ChatActionButtonClasses} {...props}>
                    {props.children}
                </Comp>
            </ChatActionButtonWrapper>
        );
    }
);

ChatActionButton.displayName = 'ChatActionButton';

// Example usage
/*
<ChatActionButton
    onClick={() => {
        if (onNewSessionClick) onNewSessionClick(true);
    }}
>
    <Pencil2Icon />
</ChatActionButton>
*/
