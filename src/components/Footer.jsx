

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Mārcis Upenieks
            </p>
        </footer>
    );
}