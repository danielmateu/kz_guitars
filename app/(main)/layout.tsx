
export const metadata = {
    title: 'Dashboard page',
    description: 'Dashboard page',
};
export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="grid items-center justify-center">
            {children}
        </main>
    );
}