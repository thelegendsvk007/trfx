import { Helmet } from "react-helmet";

interface PageTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <main className="min-h-screen relative overflow-hidden">
        {/* Global decorative background elements for all pages */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        {children}
      </main>
    </>
  );
}