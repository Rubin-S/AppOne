import React from 'react';

const LocationBadge = ({
  name,
  location,
  icon: Icon = null,
  onClick,
  className = '',
}) => {
  const isClickable = typeof onClick === 'function';

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center rounded-full border-2 size-fit border-primary p-px pl-1
        ${isClickable ? 'cursor-pointer hover:shadow-md transition-all' : ''}
        ${className}
      `}
    >
      <div className="bg-primary rounded-full size-fit flex items-center justify-center p-1">
        {Icon && <Icon className={`size-5 ${className}`} />}
      </div>
      <div className={`${className}`}>
        <p className="text-[10px] font-semibold">{name}</p>
        <div className="h-0.5 my-0.5 rounded-full bg-primary w-1/3"></div>
            <p className="text-[8px] font-thin">{location}</p>
        </div>
      </div>
  );
};

export default LocationBadge;