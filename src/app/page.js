"use client"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'
import {useEffect, useState} from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div>{isClient ?
                <HoverCard>
                    <HoverCardTrigger>Hover</HoverCardTrigger>
                    <HoverCardContent>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard> : "Server Rendered"}
                <br/>
                <Link href="/about">About</Link></div>
        </>
    );
}
