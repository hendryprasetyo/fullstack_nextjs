import Link from "next/link";
export default function ButtonLog({ className, children, variant, href }) {
  const addClassName = className ? `${className}` : "";
  const addHref = href ? `${href}` : "";
  const variants = {
    "outline-green": `border-[1px] border-[#1f1f38] text-[#1f1f38] hover:bg-[#1f1f38] hover:text-opacity-60 hover:text-white`,
    green:
      "bg-[#1f1f38] text-opacity-60 text-white hover:border-[#1f1f38] hover:border-[1px] hover:bg-transparent hover:text-[#1f1f38]",
  };
  const pickVariant = variants[variant];
  return (
    <Link
      href={`${addHref}`}
      className={`rounded-full py-2 px-4 transition font-semibold max-[639px]:hidden ${pickVariant} ${addClassName}`}
    >
      {children}
    </Link>
  );
}
