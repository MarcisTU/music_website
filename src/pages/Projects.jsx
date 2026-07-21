import {ExternalLink} from "lucide-react";
import SpotifyIconIcon from "@/components/icons/SpotifyIcon.tsx";
import YoutubeIcon from "@/components/icons/YoutubeIcon.tsx";


const projects = [
    {
        id: 1,
        title: "Temple Of Compositions (Volume I)",
        description: "Instrumental soundtrack inspired music featuring various organic and synthesized instruments and sound sources like (synths, strings, guitar, church organ, woodwinds, brass etc..)",
        spotifyUrl: "https://open.spotify.com/album/4z0VSy0K6gBIwj0YqVIsSq",
        youtubeUrl: "https://www.youtube.com/",
        image: "/projects/instrumental_album_art_1.png",
        tags: ["Synthesizers", "Strings", "Brass", "Woodwinds", "Church Organ", "FXs", "Percussion"],
    },
    {
        id: 2,
        title: "Temple Of Compositions (Volume II)",
        description: "Instrumental soundtrack inspired music featuring various organic and synthesized instruments and sound sources like (synths, strings, guitar, church organ, woodwinds, brass etc..)",
        spotifyUrl: "https://open.spotify.com/album/3iztlsQyInTx6Rj5nQHJza",
        youtubeUrl: "https://www.youtube.com/",
        image: "/projects/instrumental_album_art_1.png",
        tags: ["Synthesizers", "Strings", "Brass", "Woodwinds", "Church Organ", "FXs", "Percussion"],
    },
    {
        id: 3,
        title: "Temple Of Compositions (Volume III)",
        description: "Instrumental soundtrack inspired music featuring various organic and synthesized instruments and sound sources like (synths, strings, guitar, church organ, woodwinds, brass etc..)",
        spotifyUrl: "https://open.spotify.com/album/6DesFZ7WXVuVQmTZXY1vyS",
        youtubeUrl: "https://www.youtube.com/",
        image: "/projects/instrumental_album_art_1.png",
        tags: ["Synthesizers", "Strings", "Brass", "Woodwinds", "Church Organ", "FXs", "Percussion"],
    },
];


export const Projects = () => {
    return <section className="py-24 px-4 relative">
        <div className="container mx-auto mt-32 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center pb-24">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <p className="font-bold">Listen in:</p>
                                    <a
                                        href={project.spotifyUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <SpotifyIconIcon size={26} />
                                    </a>
                                    <a
                                        href={project.youtubeUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <YoutubeIcon size={26} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}