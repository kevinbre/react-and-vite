function App() {
    return (
        <div className="w-screen min-h-[100dvh] bg-neutral-950 text-gray-300 flex flex-col justify-center items-center p-6">
            <div className="flex justify-center items-center flex-col gap-6">
                <h2 className="text-center font-bold text-3xl">Welcome to the ldx react + vite boilerplate</h2>
                <h2 className="text-2xl font-bold text-gray-300/40">DOCS</h2>
                <div className="flex gap-5 justify-center items-center">
                    <div className="flex justify-center items-center gap-4">
                        <a
                            className="flex flex-col justify-center items-center gap-4 hover:scale-105 hover:-translate-y-2 transition-all group"
                            href="https://tailwindcss.com/docs"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                alt="Tailwind logo"
                                className="group-hover:drop-shadow-[0_5px_3px_rgba(138,43,226,0.25)] transition-all"
                                src="/tailwind.svg"
                                width={85}
                            />
                            <span className="group-hover:font-bold text-gray-300/40 group-hover:text-gray-300">
                                Tailwind
                            </span>
                        </a>

                        <a
                            className="flex flex-col justify-center items-center gap-4 hover:scale-105 hover:-translate-y-2 transition-all group"
                            href="https://vitejs.dev/guide/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                alt="Vite logo"
                                className="group-hover:drop-shadow-[0_5px_3px_rgba(138,43,226,0.25)] transition-all"
                                src="/vite.svg"
                                width={50}
                            />
                            <span className="group-hover:font-bold text-gray-300/40 group-hover:text-gray-300">
                                Vite
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <span />
        </div>
    );
}

export default App;
