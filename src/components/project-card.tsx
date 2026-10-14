/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

function ProjectMedia({
  video,
  image,
  alt,
}: {
  video?: string;
  image?: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy-load: only attach/load media when container enters or gets close to viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isGif = image?.endsWith(".gif");

  return (
    <div ref={containerRef} className="relative w-full h-40 overflow-hidden bg-muted/40">
      {/* Sleek Skeleton Placeholder while video / image is buffering or waiting to load */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 bg-muted/60 dark:bg-muted/30 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-muted-foreground/15" />
            <div className="h-3 w-8 rounded-full bg-muted-foreground/15" />
          </div>
          <div className="flex items-center justify-center">
            <div className="size-8 rounded-full bg-muted-foreground/15 flex items-center justify-center">
              <div className="size-2 rounded-full bg-muted-foreground/25 animate-ping" />
            </div>
          </div>
          <div className="h-2 w-24 rounded bg-muted-foreground/15" />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground bg-muted">
          Preview unavailable
        </div>
      ) : video ? (
        isInView ? (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            onPlaying={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              "w-full h-40 object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
          />
        ) : null
      ) : image ? (
        isInView ? (
          <Image
            src={image}
            alt={alt}
            width={400}
            height={160}
            unoptimized={isGif}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              "w-full h-40 object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
          />
        ) : null
      ) : (
        <div className="w-full h-40 bg-muted" />
      )}
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className,
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <ProjectMedia video={video} image={image} alt={title} />
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
