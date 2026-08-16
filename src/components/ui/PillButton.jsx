import { Link } from "react-router-dom";

const variants = {
  solid: "bg-brandred text-white hover:bg-brandreddark border border-brandred",
  outline: "bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy hover:text-white",
  teal: "bg-teal text-white hover:opacity-90 border border-teal",
};

export default function PillButton({
  children,
  variant = "solid",
  icon,
  className = "",
  to,
  href,
  onClick,
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold font-body transition-colors ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
