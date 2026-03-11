import type { NextConfig } from "next";

// GitHub Actions 환경에서는 자동으로 GITHUB_ACTIONS=true 설정됨
// 로컬 개발 환경에서는 이 변수가 없으므로 basePath 미적용
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",                       // 정적 HTML로 내보내기
  basePath: isGithubActions ? "/claude-nextjs-starterkit" : "",  // 환경에 따라 조건부 적용
  images: {
    unoptimized: true,                    // GitHub Pages는 이미지 최적화 미지원
  },
};

export default nextConfig;
