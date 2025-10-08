import { ReactNode } from "react";

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
      // className={clsx(
      //   "min-h-screen text-foreground bg-background font-sans antialiased",
      //   fontSans.variable
      // )}
      >
        {/* <Providers
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
          locale={locale}
        > */}
        {/* <div className="relative flex flex-col h-screen">
          <Navbar /> */}
        {children}
        {/* <footer className="w-full flex items-center justify-center py-3">
            <Link
              // isExternal
              className="flex items-center gap-1 text-current"
              href="https://heroui.com?utm_source=next-app-template"
              title="heroui.com homepage"
            >
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">HeroUI</p>
            </Link>
          </footer>
        </div> */}
        {/* </Providers> */}
      </body>
    </html>
  );
}
