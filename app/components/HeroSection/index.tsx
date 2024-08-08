import { OctagonIcon } from "lucide-react";

export default function HeroSection() {
    return (
        <section className=" bg-zinc-950 text-white py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col items-center justify-center text-center space-y-4">
                <OctagonIcon className="w-16 h-16" />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to the Olympics</h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                    Discover the latest updates, events, and athlete profiles for the upcoming Olympic Games.
                </p>
            </div>
        </section>
    )
}
