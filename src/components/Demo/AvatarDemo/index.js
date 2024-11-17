import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

export function AvatarDemo() {
    return (
        <div>
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/optimoz.png" alt="@optimoz" />
                </Avatar>
            </div>
            <div>
                <Avatar>
                    <AvatarFallback>OP</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}
