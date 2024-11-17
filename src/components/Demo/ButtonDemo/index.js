// React
import React from 'react';

// Components
import { Button } from '@/components/ui/button';
import { HomeIcon } from '@radix-ui/react-icons';

const ButtonDemo = () => {
    return (

        <div className="grid gap-6 grid-cols-2">

            <div>
                <h4 className="text-md font-semibold mb-2">Default Button</h4>
                <Button>Button</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Secondary Button</h4>
                <Button variant="secondary">Secondary</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Destructive Button</h4>
                <Button variant="destructive">Destructive</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Outline Button</h4>
                <Button variant="outline">Outline</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Ghost Button</h4>
                <Button variant="ghost">Ghost</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Link Button</h4>
                <Button variant="link">Link</Button>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Button with Icon</h4>
                <Button>
                    <HomeIcon className="mr-2 h-4 w-4" /> Icon + Text
                </Button>
            </div>

        </div>
    );
};

export default ButtonDemo;
