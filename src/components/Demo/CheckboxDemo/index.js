// React
import React from 'react';

// Components
import { Checkbox } from '@/components/ui/checkbox';

const CheckboxDemo = () => {
    return (
        <div className="grid gap-6">

            <div>
                <h4 className="text-md font-semibold mb-2">Checkbox with Label</h4>
                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                                Accept terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                                You agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Disabled Checkbox</h4>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms2" disabled />
                    <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                            Accept terms and conditions
                    </label>
                </div>
            </div>

        </div>
    );
};

export default CheckboxDemo;
