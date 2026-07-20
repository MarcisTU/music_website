
export const Home = () => {
    return (
        <section
            id="profile"
            className="relative grow flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1"> Mārcis</span>
                        <span className="opacity-0 ml-2 animate-fade-in-delay-2"> Upenieks</span>
                    </h1>

                    <div className="flex flex-col">
                        <p>Soundtrack and music compositions</p>
                        <a href="https://www.marcisupenieksmusic.com" className="text-primary hover:underline">
                            www.marcisupenieksmusic.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}