import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface KeywordCardProps {
  icon: LucideIcon;
  question: string;
  path: string;
  badge?: string;
}

export const KeywordCard = ({ icon: Icon, question, path, badge = "Artigo Completo" }: KeywordCardProps) => {
  return (
    <Link 
      to={path}
      className="group relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {question}
          </h3>
          <span className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
            {badge}
          </span>
        </div>
      </div>
    </Link>
  );
};
