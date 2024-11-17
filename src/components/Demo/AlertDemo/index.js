import { RocketIcon } from '@radix-ui/react-icons';

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from '@/components/ui/alert';

export function AlertDemo() {
    return (
        <Alert>
            <RocketIcon className="w-4 h-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
        You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    );
}
