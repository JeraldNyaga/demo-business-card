export default function Button({ img, logo_name, href, className = "", children }) {
    return (
        <a className={`${className}`} href={href}>
            <img
                src={img}
                alt={`This is a logo in a button for ${logo_name}`}
            />
            {children}
        </a>
    );
}