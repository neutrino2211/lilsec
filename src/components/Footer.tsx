export const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black py-4">
            <div className="container mx-auto px-4">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Mainasara Tsowa. All rights reserved.
                </p>
            </div>
        </footer>
    )
}