export const WHATSAPP_NUMBER = "56950008228";
export const INSTAGRAM_URL = "https://www.instagram.com/altohielochile";

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
