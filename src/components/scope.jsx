const Scope = ({
  children,
  title = "",
  borderColorClass = "border-indigo-600",
  textColorClass = "text-indigo-600",
}) => {
  return (
    <div className={`m-2 border-4 ${borderColorClass}`}>
      <p className={`m-1 text-xs ${textColorClass}`}>Scope: {title}</p>
      <div className="m-2">{children}</div>
    </div>
  );
};

export default Scope;
