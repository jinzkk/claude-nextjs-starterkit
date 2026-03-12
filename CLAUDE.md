# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

- `npm run dev` — 개발 서버 실행
- `npm run build` — 정적 빌드 (output: export → `out/` 디렉토리)
- `npm run lint` — ESLint 실행
- `npx shadcn@latest add <component>` — shadcn/ui 컴포넌트 추가

## 아키텍처

- **Next.js 16 App Router** + **정적 사이트 생성** (Static Export)
- GitHub Pages 배포: main 브랜치 push 시 자동 배포 (.github/workflows/deploy.yml)
- `next.config.ts`에서 GitHub Actions 환경일 때만 basePath 적용

## 프로젝트 구조

- `src/app/` — 페이지 및 레이아웃 (App Router)
- `src/components/ui/` — shadcn/ui 기반 UI 컴포넌트
- `src/components/layout/` — Header, Footer 등 레이아웃 컴포넌트
- `src/components/sections/` — 페이지 섹션 컴포넌트
- `src/hooks/` — 커스텀 훅
- `src/lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)

## 경로 별칭

`@/*` → `./src/*` (tsconfig.json)

## 스타일링

- Tailwind CSS v4 + CSS 변수 기반 컬러 시스템 (`globals.css`)
- Light/Dark 모드 지원 (OkLCh 색상 공간)
- shadcn/ui 스타일: `new-york`, 아이콘: `lucide`
- 클래스 조합 시 `cn()` 유틸리티 사용 필수
