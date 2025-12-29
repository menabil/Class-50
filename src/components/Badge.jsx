const Badge = ({ className, badgeText }) => {
  return (
    <div
      className={`${className} w-[92px] py-2.25 px-7.5 bg-[#262626] text-white font-bold font-dmSan text-sm`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
