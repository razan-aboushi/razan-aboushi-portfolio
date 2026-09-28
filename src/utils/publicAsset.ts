/**
 * Resolves a file in /public against the deployed base path. The site is served from
 * /razan-aboushi-portfolio/ on GitHub Pages, so root-absolute paths like "/cv.pdf" 404 there.
 */
export function publicAsset(path: string): string {
  return `${process.env.PUBLIC_URL}/${path.replace(/^\//, "")}`;
}

export const RESUME_FILE = "Razan_Aboushi_Full_Stack_Engineer_CV.pdf";
export const RESUME_URL = publicAsset(RESUME_FILE);
