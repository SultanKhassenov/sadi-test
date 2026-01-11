
export default function Logo({ size }: { size: "sm" | "lg" }) {
    return (
        <img 
            src="/assets/images/Sadi-logo.png"
            alt="SADI Logo"
            className={size === "sm" ? "h-8 w-auto" : "h-12 w-auto"}
        />
    );
}