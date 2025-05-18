import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface RuleItem {
  text: string;
}

interface RuleSection {
  title: string;
  items: RuleItem[];
}

interface ChallengeRulesProps {
  sections: RuleSection[];
}

export function ChallengeRules({ sections }: ChallengeRulesProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Challenge Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
