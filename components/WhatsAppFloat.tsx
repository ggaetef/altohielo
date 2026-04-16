import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      aria-label="Escríbenos por WhatsApp"
      href={waLink("Hola Alto Hielo, quiero pedir hielo.")}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.64 6.05L0 24l6.09-1.6A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.82a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.62.95.97-3.52-.23-.37A9.79 9.79 0 1 1 21.82 12c0 5.42-4.4 9.82-9.82 9.82Zm5.36-7.34c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14s-.77.95-.94 1.14c-.17.2-.35.22-.64.07-.29-.14-1.22-.45-2.32-1.44a8.67 8.67 0 0 1-1.6-1.99c-.17-.29-.02-.44.13-.59.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.86 1.21 3.06.14.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34Z" />
      </svg>
    </a>
  );
}
