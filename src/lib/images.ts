import hero from "@/assets/hero-classroom.jpg";
import teacher from "@/assets/teacher-guiding.jpg";
import community from "@/assets/community-learning.jpg";
import digital from "@/assets/digital-learning.jpg";
import seminar from "@/assets/seminar.jpg";
import library from "@/assets/library-resources.jpg";
import science from "@/assets/science-activity.jpg";
import skill from "@/assets/skill-workshop.jpg";

export const ASSETS: Record<string, string> = {
  hero, teacher, community, digital, seminar, library, science, skill,
};

export const FALLBACK = library;

/** Image values are stored as "asset:<key>" for bundled photos or a data/https URL for uploads. */
export function resolveImg(src?: string): string {
  if (!src) return FALLBACK;
  if (src.startsWith("asset:")) return ASSETS[src.slice(6)] ?? FALLBACK;
  return src;
}

/** Downscale an uploaded image so it fits comfortably in LocalStorage. */
export function fileToDataUrl(file: File, maxW = 1400): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) return reject(new Error("Please choose an image file."));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.8));
      };
      img.onerror = () => reject(new Error("Invalid image."));
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
