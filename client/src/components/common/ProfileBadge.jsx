const LocationBadge = ({
  name,
  location,
  icon: Icon = null,
  onClick,
  className = "",
}) => {
  const isClickable = typeof onClick === "function";

  return (
    <div
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={`
        flex items-center gap-2 border border-primary rounded-full pl-1 pr-3 py-1
         text-primary max-w-fit shadow-sm
        ${isClickable ? "cursor-pointer hover:shadow-md transition-all" : ""}
        ${className}
      `}
      aria-label={
        isClickable ? `View profile of ${name} in ${location}` : undefined
      }
    >
      {Icon && (
        <div className="bg-primary text-white rounded-full p-2 flex items-center justify-center">
          <Icon className="w-4 h-4" aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight">{name}</span>
        <span className="text-[10px] text-gray-600 leading-none">
          {location}
        </span>
      </div>
    </div>
  );
};

export default LocationBadge;
