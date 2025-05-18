import PageTemplate from "@/components/page-template";

export default function MetaTrader5Page() {
  return (
    <PageTemplate
      title="TRFX - MetaTrader 5"
      description="Learn about the MetaTrader 5 trading platform and how to use it with your TRFX funded account."
    >
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-3">MetaTrader 5</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Information about the MetaTrader 5 platform for your TRFX funded account.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}