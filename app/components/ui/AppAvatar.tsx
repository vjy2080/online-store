interface AppAvatarProps {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    initials?: string;
    className?: string;
}

const sizeStyles: Record<string, string> = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
};

export const AppAvatar: React.FC<AppAvatarProps> = ({
    src,
    alt = "avatar",
    size = "md",
    initials,
    className,
}) => {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                className={`${sizeStyles[size]} rounded-full object-cover ${className || ""}`}
            />
        );
    }

    return (
        <div
            className={`${sizeStyles[size]} rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold ${className || ""}`}
        >
            {initials || "U"}
        </div>
    );
};
