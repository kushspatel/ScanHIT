'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export function ToastDemo() {
    const { toast } = useToast();

    return (
        <div className=" p-4 rounded ">
            <div className="grid gap-6 grid-cols-2">

                <div>
                    <h4 className="text-md font-semibold mb-2">Simple Toast</h4>
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                description: 'Your message has been sent.',
                            });
                        }}
                    >
                        Show Toast
                    </Button>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2">Toast with Title</h4>
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                title: 'Uh oh! Something went wrong.',
                                description: 'There was a problem with your request.',
                            });
                        }}
                    >
                        Show Toast
                    </Button>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2">Toast with Action</h4>
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                title: 'Uh oh! Something went wrong.',
                                description: 'There was a problem with your request.',
                                action: <ToastAction altText="Try again">Try again</ToastAction>,
                            });
                        }}
                    >
                        Show Action Toast
                    </Button>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2">Destructive Toast</h4>
                    <Button
                        variant="destructive"
                        onClick={() => {
                            toast({
                                variant: 'destructive',
                                title: 'Uh oh! Something went wrong.',
                                description: 'There was a problem with your request.',
                                action: <ToastAction altText="Try again">Try again</ToastAction>,
                            });
                        }}
                    >
                        Destructive
                    </Button>
                </div>

            </div>
        </div>
    );
}
