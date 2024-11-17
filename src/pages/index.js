import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HitLogo from '../../public/hit';
import OpenHit from '../../public/openhit';

export default function Component() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
            <header className="w-full p-4 text-center">
                <h1 className="text-3xl font-bold text-primary">ScanHIT Mobile App</h1>
            </header>

            <main className="flex-grow w-full max-w-2xl p-6 mx-auto space-y-10">
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Card className="w-32 h-32 overflow-hidden bg-white border-0 shadow-lg rounded-3xl">
                        <div className="flex items-center justify-center w-full h-full p-4">
                            <HitLogo />
                        </div>
                    </Card>

                    <Card className="w-48 h-24 overflow-hidden bg-white border-0 shadow-lg rounded-3xl">
                        <div className="flex items-center justify-center w-full h-full p-4">
                            <OpenHit />
                        </div>
                    </Card>
                </div>

                <div className="space-y-6 text-center">
                    <p className="text-lg text-primary">
            OpenHit is a Health IT Platform that provides a comprehensive
            solution for healthcare providers to manage their practice. ScanHIT
            is a companion mobile app that allows medical practitioners to
            access their patient's health records rapidly and securely.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-[#00B0F0] text-white font-medium shadow-lg hover:bg-[#00B0F0]/90 transition-colors"
                    >
                        <Link
                            href="https://drive.usercontent.google.com/download?id=1m4KvFzWWoHq5VhYSXEJ5UlFqLYY396zB&export=download&authuser=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
              Download APK
                        </Link>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                        >
                            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                            <polygon points="12 15 17 21 7 21 12 15" />
                        </svg>
            Available on Android
                    </div>
                </div>
            </main>

            <footer className="w-full p-4 text-sm text-center text-muted-foreground">
                <p>
          &copy; {new Date().getFullYear()} Optimoz Inc. Rockville, MD. All
          rights reserved.
                </p>
            </footer>
        </div>
    );
}
