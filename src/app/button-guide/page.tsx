"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const variants = [
  { key: "default", label: "Primary" },
  { key: "outline", label: "Outline" },
  { key: "secondary", label: "Secondary" },
  { key: "dark", label: "Dark" },
  { key: "ghost", label: "Ghost" },
  { key: "destructive", label: "Destructive" },
  { key: "link", label: "Link" },
] as const

const sizes = [
  { key: "xl", label: "XL (64px)" },
  { key: "lg", label: "LG (56px)" },
  { key: "default", label: "MD (48px)" },
  { key: "sm", label: "SM (40px)" },
  { key: "xs", label: "XS (32px)" },
] as const

type VariantKey = (typeof variants)[number]["key"]
type SizeKey = (typeof sizes)[number]["key"]

type TabType = "pc" | "mobile"

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[24px] font-bold text-foreground">{children}</h2>
  )
}

function TabButtons({
  active,
  onChange,
}: {
  active: TabType
  onChange: (tab: TabType) => void
}) {
  return (
    <div className="flex gap-1">
      <button
        className={cn(
          "rounded-[6px] px-3 py-1 text-[13px] font-medium transition-colors",
          active === "pc"
            ? "bg-foreground text-background"
            : "border border-border bg-background text-foreground"
        )}
        onClick={() => onChange("pc")}
      >
        PC
      </button>
      <button
        className={cn(
          "rounded-[6px] px-3 py-1 text-[13px] font-medium transition-colors",
          active === "mobile"
            ? "bg-foreground text-background"
            : "border border-border bg-background text-foreground"
        )}
        onClick={() => onChange("mobile")}
      >
        Mobile
      </button>
    </div>
  )
}

function StateLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[13px] text-muted-foreground">{children}</span>
  )
}

function ButtonRow({
  variant,
  size,
}: {
  variant: VariantKey
  size: SizeKey
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button variant={variant} size={size}>
        버튼
      </Button>
      <Button variant={variant} size={size} className="pseudo-hover">
        버튼
      </Button>
      <Button variant={variant} size={size} className="pseudo-active">
        버튼
      </Button>
      <Button variant={variant} size={size} disabled>
        버튼
      </Button>
    </div>
  )
}

function VariantSection({
  variant,
  label,
}: {
  variant: VariantKey
  label: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold text-foreground">{label}</h3>
      {/* 상태 라벨 헤더 */}
      <div className="grid grid-cols-4 gap-4">
        <StateLabel>Default</StateLabel>
        <StateLabel>Hover</StateLabel>
        <StateLabel>Active</StateLabel>
        <StateLabel>Disabled</StateLabel>
      </div>
      {/* 각 사이즈별 버튼 행 */}
      {sizes.map((s) => (
        <ButtonRow key={s.key} variant={variant} size={s.key} />
      ))}
    </div>
  )
}

function ButtonTextSection() {
  const textSizes = [
    { label: "Large", className: "text-[17px] px-2 py-1" },
    { label: "Medium", className: "text-[15px] px-2 py-0.5" },
    { label: "Small", className: "text-[13px] px-1.5 py-0.5" },
    { label: "XSmall", className: "text-[13px] px-1 py-0" },
  ]

  const states = ["Default", "Hover", "Active", "Disabled"] as const

  return (
    <div className="flex flex-col gap-3">
      {/* 상태 라벨 헤더 */}
      <div className="grid grid-cols-4 gap-4">
        {states.map((state) => (
          <StateLabel key={state}>{state}</StateLabel>
        ))}
      </div>
      {textSizes.map((s) => (
        <div key={s.label} className="grid grid-cols-4 gap-4">
          {states.map((state) => (
            <button
              key={state}
              disabled={state === "Disabled"}
              className={cn(
                "inline-flex w-fit items-center justify-center rounded-[4px] font-medium text-text-subtle transition-colors",
                s.className,
                state === "Hover" && "bg-grayscale-50",
                state === "Active" && "bg-grayscale-200",
                state === "Disabled" && "text-btn-disabled-text"
              )}
            >
              버튼
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function ButtonGuidePage() {
  const [buttonTab, setButtonTab] = useState<TabType>("pc")
  const [textTab, setTextTab] = useState<TabType>("pc")

  return (
    <div className="min-h-screen bg-background px-10 py-16">
      {/* 페이지 헤더 */}
      <div className="mb-12 flex flex-col gap-3">
        <h1 className="text-[40px] font-bold text-foreground">
          <span className="text-primary">❖</span> Component
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          컴포넌트는 재사용 가능한 디자인 요소로, 일관성을 유지하며 효율적으로
          디자인 작업을 수행할 수 있도록 합니다.
        </p>
      </div>

      {/* Button 섹션 */}
      <section className="mb-16 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <SectionTitle>Button</SectionTitle>
          <TabButtons active={buttonTab} onChange={setButtonTab} />
        </div>

        <div
          className={cn(
            "flex flex-col gap-10 rounded-[12px] border border-border p-8",
            buttonTab === "mobile" && "max-w-[480px]"
          )}
        >
          {variants
            .filter((v) => v.key !== "link")
            .map((v) => (
              <VariantSection
                key={v.key}
                variant={v.key}
                label={v.label}
              />
            ))}
        </div>
      </section>

      {/* 구분선 */}
      <hr className="mb-16 border-border" />

      {/* Button_text 섹션 */}
      <section className="mb-16 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <SectionTitle>Button_text</SectionTitle>
          <TabButtons active={textTab} onChange={setTextTab} />
        </div>

        <div
          className={cn(
            "flex flex-col gap-6 rounded-[12px] border border-border p-8",
            textTab === "mobile" && "max-w-[480px]"
          )}
        >
          <ButtonTextSection />
        </div>
      </section>

      {/* Link 버튼 섹션 */}
      <section className="mb-16 flex flex-col gap-8">
        <SectionTitle>Link</SectionTitle>
        <div className="flex flex-col gap-4 rounded-[12px] border border-border p-8">
          <div className="grid grid-cols-4 gap-4">
            <StateLabel>Default</StateLabel>
            <StateLabel>Hover</StateLabel>
            <StateLabel>Active</StateLabel>
            <StateLabel>Disabled</StateLabel>
          </div>
          {sizes.map((s) => (
            <div key={s.key} className="grid grid-cols-4 gap-4">
              <Button variant="link" size={s.key}>
                버튼
              </Button>
              <Button variant="link" size={s.key} className="underline">
                버튼
              </Button>
              <Button variant="link" size={s.key} className="underline">
                버튼
              </Button>
              <Button variant="link" size={s.key} disabled>
                버튼
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
