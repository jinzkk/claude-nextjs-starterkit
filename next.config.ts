import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                       // 정적 HTML로 내보내기
  basePath: "/claude-nextjs-starterkit",  // GitHub 저장소 이름과 일치
  images: {
    unoptimized: true,                    // GitHub Pages는 이미지 최적화 미지원
  },
};

export default nextConfig;
