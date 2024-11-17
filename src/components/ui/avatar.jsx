
// React import
import React from 'react';

// Radix UI Avatar primitive import
import * as AvatarPrimitive from '@radix-ui/react-avatar';

// Utility function import
import { cn } from '@/lib/utils';

// Avatar component definition
const Avatar = React.forwardRef((props, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
            props.className
        )}
        {...props}
    />
));
Avatar.displayName = 'Avatar';

// AvatarImage component definition
const AvatarImage = React.forwardRef((props, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn('aspect-square h-full w-full', props.className)}
        {...props}
    />
));
AvatarImage.displayName = 'AvatarImage';

// AvatarFallback component definition
const AvatarFallback = React.forwardRef((props, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            props.className
        )}
        {...props}
    />
));
AvatarFallback.displayName = 'AvatarFallback';

// Export statement
export { Avatar, AvatarImage, AvatarFallback };
