import { Shield, TrendingUp, DollarSign, Calendar } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "Reviews Imparciais",
    },
    {
      icon: Calendar,
      text: "Atualizadas Semanalmente",
    },
    {
      icon: DollarSign,
      text: "Comparação de Preços",
    },
    {
      icon: TrendingUp,
      text: "+1.500 Modelos Analisados",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
        >
          <div className="p-2 rounded-lg bg-primary/10">
            <badge.icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">
            ✓ {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};
