import {Mail, MapPin, Phone, Send} from "lucide-react";
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {FaThreads} from "react-icons/fa6";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
import {useState} from "react";


export const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon!",
            });
            setIsSubmitting(false);
        }, 1500);
    }

    return <section className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto mt-32 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In Touch
            </h2>

            <p className="text-center text-muted-foreground mt-12 mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Contact information
                    </h3>

                    {/* Centered container wrapper with a maximum width to keep the layout straight */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="space-y-6 w-full max-w-70 xs:max-w-[320px]">

                            {/* --- Email Item --- */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-sm text-muted-foreground">
                                        Email
                                    </h4>
                                    <a href="mailto:marcisreb@gmail.com" className="text-base font-medium hover:text-primary transition-colors">
                                        marcisreb@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* --- Phone Item --- */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-sm text-muted-foreground">
                                        Phone
                                    </h4>
                                    <a href="tel:+37128782204" className="text-base font-medium hover:text-primary transition-colors">
                                        +371 28782204
                                    </a>
                                </div>
                            </div>

                            {/* --- Location Item --- */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-sm text-muted-foreground">
                                        Location
                                    </h4>
                                    <span className="text-base font-medium block">
                                        Latvia
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/marcis_guitar/"
                                rel="noreferrer"
                            >
                                <FaInstagram size={30} className="hover:text-primary transition-colors" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/marcis.upenieks"
                                rel="noreferrer"
                            >
                                <FaFacebook size={30} className="hover:text-primary transition-colors" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.threads.com/@marcis_guitar"
                                rel="noreferrer"
                            >
                                <FaThreads size={30} className="hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-card p-8 rounded-lg shadow-xs"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Mārcis Upenieks..."
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="john@email.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                            "cosmic-button w-full flex items-center justify-center gp-2",
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>;
}