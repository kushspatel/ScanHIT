import * as React from 'react';
import { cn } from '@/lib/utils';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
        <div className="relative w-full">
            <input
                type={inputType}
                className={cn(
                    'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                    isPassword ? 'pr-10' : ''
                )}
                ref={ref}
                {...props}
            />
            {isPassword && (
                <button
                    type="button"
                    className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex="-1"
                >
                    {showPassword ? (
                        <EyeOpenIcon className="w-4 h-4" aria-hidden="true" />
                    ) : (
                        <EyeClosedIcon className="w-4 h-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                </button>
            )}
            {/* Hides browser's password toggles */}
            <style>{`
                .hide-password-toggle::-ms-reveal,
                .hide-password-toggle::-ms-clear {
                    visibility: hidden;
                    pointer-events: none;
                    display: none;
                }
            `}</style>
        </div>
    );
});
Input.displayName = 'Input';

export { Input };
