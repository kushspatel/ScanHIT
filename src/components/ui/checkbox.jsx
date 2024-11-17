import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Minus } from 'lucide-react';

const Checkbox = React.forwardRef(({ className, indeterminate, ...props }, ref) => {
    // Use a ref to access the checkbox input element directly
    const indeterminateRef = React.useRef(null);

    // Synchronize the indeterminate attribute with the indeterminate prop
    React.useEffect(() => {
        if (indeterminateRef.current) {
            indeterminateRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <CheckboxPrimitive.Root
            ref={(node) => {
                // Pass the node to the forwarded ref
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
                // Also keep a local ref to manage the indeterminate state
                indeterminateRef.current = node;
            }}
            className={cn(
                'peer h-3 w-3 shrink-0 rounded-[3px] border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-10',
                indeterminate ? 'bg-indeterminate' : 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className
            )}
            {...props}
            checked={props.checked || indeterminate}
        >
            <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
                {indeterminate ? (
                    // Optionally customize the indeterminate indicator here, e.g., a dash or smaller icon
                    <Minus weight='bold' className="w-3 h-3 pb-[1.5px]"/>// Example: a horizontal line for indeterminate
                ) : (
                    <CheckIcon className="w-3 h-3 pb-[1.5px]" />
                )}
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
