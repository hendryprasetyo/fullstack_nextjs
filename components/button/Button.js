export default function ButtonLog({ className, children, variant, onClick }) {
  const addClassName = className ? `${className}` : "";
  const addOnClick = onClick ? `${onClick}` : "";
  const variants = {
    "outline-green": `border border-green-500 text-green-400`,
    green: "bg-green-500 text-black",
  };
  const pickVariant = variants[variant];
  return (
    <button
      onClick={`${addOnClick}`}
      className={`rounded-full py-2 px-5 font-semibold ${pickVariant} ${addClassName}`}
    >
      {children}
    </button>
  );
}
