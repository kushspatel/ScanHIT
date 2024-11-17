import { CalendarIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';

export function HoverCardDemo() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">@optimoz</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/optimoz.png" />
                        <AvatarFallback>OP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@optimoz</h4>
                        <p className="text-sm">super cool company </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                            <span className="text-xs text-muted-foreground">2017 </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
