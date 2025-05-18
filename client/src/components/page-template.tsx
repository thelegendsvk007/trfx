import React from 'react';
import { Helmet } from 'react-helmet';

interface PageTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <>
      <Helmet>
        <title>{title} | TRFX</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | TRFX`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}