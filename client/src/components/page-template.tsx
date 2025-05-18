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
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}