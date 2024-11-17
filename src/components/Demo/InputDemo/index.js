// React
import React from 'react';

// Components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const InputDemo = () => {
    return (
        <div className="grid gap-6 grid-cols-2">

            <div>
                <h4 className="text-md font-semibold mb-2">Email Input</h4>
                <Input type="email" placeholder="Email" />
            </div>
            <div>
                <h4 className="text-md font-semibold mb-2">Password Input</h4>
                <Input type="password" placeholder="Email" />
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">File Input</h4>
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Disabled Input</h4>
                <Input disabled type="email" placeholder="Disabled Email" />
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Labeled Email Input</h4>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Simple Email Input</h4>
                <Input type="email" placeholder="Email" />
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Email Input with Button</h4>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </div>

        </div>
    );
};

export default InputDemo;
