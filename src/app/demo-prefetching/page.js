import Link from "next/link";

export default function HomePage(){
    return (
        <nav>
            <Link href={"/raise-issue"}>Raise Issue</Link>
            <Link href={"/blog/1"}>Blog page</Link>

        </nav>
    )
}