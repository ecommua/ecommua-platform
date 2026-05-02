/**
 * Tiny className merger — concatenates truthy class strings without external deps.
 * Avoids pulling clsx/tailwind-merge for a pure-tailwind project.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
