import { useState, useRef, useEffect } from "react";

interface PreviewProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const Preview: React.FC<PreviewProps> = ({
  image,
  title,
  description,
  url,
}) => {
  const [open, setOpen] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const handleEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    hoverTimeout.current = window.setTimeout(() => {
      setOpen(true);
    }, 200); 
  };

  const handleLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    hoverTimeout.current = window.setTimeout(() => {
      setOpen(false);
    }, 150);
  };


  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={image}
        alt={title}
        className="w-300 h-auto mt-10 rounded-lg cursor-pointer"
      />

      {open && (
        <div
          className="
            absolute top-0 left-full ml-4
            w-[320px]
            rounded-xl
            border border-[var(--color-border)]
            bg-[var(--color-surface)]
            shadow-xl
            p-4
            transition-all
          "
        >
          <h3 className="text-lg font-semibold text-[var(--color-text)]">
            {title}
          </h3>

          <p className="text-sm mt-2 text-[var(--color-muted)]">
            {description}
          </p>

          <button
            onClick={() => window.open(url, "_blank")}
            className="mt-4 text-sm font-medium text-white px-3 py-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Read more -&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Preview;