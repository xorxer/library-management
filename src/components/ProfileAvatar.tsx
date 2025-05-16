import Image from "next/image";

type ProfileAvatarProps = {
    name: string;
    imageUrl?: string;
    size?: number;
}

export default function ProfileAvatar({ name, imageUrl, size=40 }: ProfileAvatarProps) {
    const initial = name?.charAt(0).toUpperCase() || "?";
    return imageUrl ? (
        <Image 
            src={imageUrl} 
            alt={name}
            width={size}
            height={size}
            className="rounded-full object-cover"        
        />
    ) : (
        <div
            className="bg-gray-200 text-gray-700 font-bold flex items-center justify-center rounded-full"
            style={{
                width: size,
                height: size,
                fontSize: size * 0.5,
            }}
        >
            {initial}
        </div>
    );
}