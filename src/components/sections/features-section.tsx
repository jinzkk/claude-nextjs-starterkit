import { Zap, Palette, ShieldCheck } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description:
      "Next.js App Router와 React Server Components로 최적화된 성능을 제공합니다. Turbopack으로 빠른 개발 환경을 경험하세요.",
  },
  {
    icon: Palette,
    title: "모던 스타일링",
    description:
      "Tailwind CSS v4와 shadcn/ui를 활용한 아름다운 UI를 빠르게 구축할 수 있습니다. 커스터마이징도 자유롭습니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전성",
    description:
      "TypeScript를 기본으로 사용하여 안정적인 코드를 작성할 수 있습니다. 런타임 에러를 줄이고 개발 생산성을 높이세요.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          주요 기능
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          개발에 필요한 모든 것이 준비되어 있습니다
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
