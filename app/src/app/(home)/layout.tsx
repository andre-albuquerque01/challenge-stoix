import HeaderNav from "@/components/nav/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HeaderNav />
            {children}
        </div>
    );
}