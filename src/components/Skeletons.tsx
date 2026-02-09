import { Skeleton } from "@heroui/skeleton";
import { Card } from "@heroui/card";

export function SkeletonCard() {
  return (
    <Card className="w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

export function SkeletonWhyChooseCard() {
  return (
    <Card className="w-full h-[300px] border-none" radius="lg">
      <Skeleton className="rounded-lg w-full h-full">
        <div className="h-full w-full bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}

export function SkeletonHero() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="rounded-none w-full h-[600px] md:h-[800px]">
        <div className="h-full w-full bg-default-300"></div>
      </Skeleton>
    </div>
  );
}

export function SkeletonAbout() {
  return (
    <div className="py-16 md:py-24 bg-neutral-off-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-6">
          <Skeleton className="w-1/3 h-10 rounded-lg mx-auto" />
          <div className="space-y-3">
             <Skeleton className="w-full h-4 rounded-lg" />
             <Skeleton className="w-5/6 h-4 rounded-lg mx-auto" />
             <Skeleton className="w-4/6 h-4 rounded-lg mx-auto" />
          </div>
          <Skeleton className="w-32 h-6 rounded-lg mx-auto mt-8" />
        </div>
    </div>
  )
}

export function SkeletonSection({ titleWidth = "w-1/3", cardCount = 3, Component = SkeletonCard, bgClass = "bg-white" }: { titleWidth?: string, cardCount?: number, Component?: any, bgClass?: string }) {
  return (
    <div className={`py-16 md:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="space-y-4 mb-12 md:mb-16">
          <Skeleton className={`${titleWidth} h-10 rounded-lg mx-auto`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: cardCount }).map((_, i) => (
                <Component key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

