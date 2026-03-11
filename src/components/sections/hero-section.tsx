import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-24 text-center md:py-32">
      <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
        🚀 Next.js + Tailwind CSS + shadcn/ui
      </div>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        빠르게 시작하는
        <br />
        <span className="text-primary">모던 웹 개발</span>
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
        Next.js, TypeScript, Tailwind CSS, shadcn/ui로 구성된 스타터킷입니다.
        설정 없이 바로 개발을 시작하세요.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub에서 보기
          </Link>
        </Button>
      </div>
    </section>
  );
}
