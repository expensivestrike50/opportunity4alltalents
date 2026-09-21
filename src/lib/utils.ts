import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves a root-relative path (e.g. "/images/foo.svg") against Vite's
 * configured base path, so public assets still load when the app is hosted
 * under a subpath (e.g. GitHub Pages' /opportunity4alltalents/).
 */
export function publicUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
