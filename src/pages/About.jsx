import profileImg from '../assets/profile.jpg';


export const About = () => {
    return (
        <section className="container py-24 px-4 relative">
            <div className="container mx-auto mt-32 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me
                </h2>

                <div className="flex justify-center mb-12">
                    <img
                        src={profileImg}
                        alt="Mārcis Upenieks"
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
                    />
                </div>

                <div className="max-w-prose mx-auto text-center space-y-6 text-lg">
                    <p>
                        Writing and composing soundtrack inspired music. Whether it is with heavy distorted instruments, soft string melodies or percussive elements.
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </section>
    );
}