import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageTemplate from "@/components/page-template";

export default function FaqPage() {
  return (
    <PageTemplate
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about TRFX trading challenges, funded accounts, and profit sharing."
    >
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, evaluation process, and funded accounts
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is TRFX?</AccordionTrigger>
              <AccordionContent>
                TRFX is a proprietary trading firm that provides capital to skilled traders. We offer trading challenges to evaluate traders' skills, and successful traders receive funded accounts with our capital to trade on financial markets.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the evaluation process work?</AccordionTrigger>
              <AccordionContent>
                Our evaluation process consists of two phases: the Challenge Phase and the Verification Phase. In the Challenge Phase, you need to achieve an 8% profit target within 30 days while respecting risk management rules. The Verification Phase requires a 5% profit target within 60 days to confirm your consistency. After successfully passing both phases, you receive a funded account.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the trading objectives I need to meet?</AccordionTrigger>
              <AccordionContent>
                The main trading objectives include reaching profit targets (8% in Challenge Phase, 5% in Verification Phase), respecting maximum daily drawdown of 5%, maximum total drawdown of 10%, and trading for a minimum of 5 days in each phase. There are also restrictions on certain trading practices like martingale strategies and trading during news events without proper risk management.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>What is the profit split for funded traders?</AccordionTrigger>
              <AccordionContent>
                Our profit sharing structure offers up to 80% profit split to traders. Standard accounts start with a 70% profit split, while traders with scaled accounts can earn up to 80% of profits. Payouts are processed monthly for standard accounts, bi-weekly for scaled accounts, and weekly for elite accounts above $150,000.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What financial instruments can I trade?</AccordionTrigger>
              <AccordionContent>
                You can trade forex pairs, commodities, indices, and cryptocurrencies. We provide access to over 70 instruments across different markets to give you diverse trading opportunities.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>What happens if I breach the trading rules?</AccordionTrigger>
              <AccordionContent>
                If you breach the trading rules (such as exceeding maximum drawdown limits), your challenge or funded account may be terminated. For minor breaches, we may issue warnings. We recommend thoroughly understanding all trading rules before starting your challenge.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>How is the account scaling program structured?</AccordionTrigger>
              <AccordionContent>
                Our account scaling program rewards consistent performance. After 3 consecutive profitable months, your account size increases by 25%. After 6 months, it increases by 50%, and after 12 months, it doubles. Each scaling level also comes with improved profit split percentages.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger>What is the minimum investment to start a challenge?</AccordionTrigger>
              <AccordionContent>
                The minimum investment depends on the account size you choose. Our challenges start at $10,000 account size, with prices varying based on the account size and type of challenge (Standard, Aggressive, or Evaluation). The exact pricing can be found on our Challenges page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger>Do you offer refunds if I can't meet the challenge targets?</AccordionTrigger>
              <AccordionContent>
                No, we do not offer refunds if you fail to meet the challenge targets. The fee you pay is for the opportunity to be evaluated and potentially receive a funded account. However, we do offer free retakes under certain conditions for some of our challenge plans.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger>Which trading platforms do you support?</AccordionTrigger>
              <AccordionContent>
                We support MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms, which are industry-standard platforms for forex and CFD trading. We provide access to our servers directly through these platforms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </PageTemplate>
  );
}