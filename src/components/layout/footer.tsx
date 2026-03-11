import Link from "next/link";
import { Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <span className="text-sm font-semibold">StarterKit</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StarterKit. Next.js와 함께 제작되었습니다.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Next.js
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              shadcn/ui
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
