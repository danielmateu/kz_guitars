import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h2>
                404 - Page Not Found
            </h2>
            <p>
                Ooops! The page you are looking for does not exist.
            </p>
            <Link href="/">
                Go back home
            </Link>
        </main>
    )
}