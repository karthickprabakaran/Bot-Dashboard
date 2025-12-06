const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 mr-4 font-medium border-b-2
        ${active ? "border-[#ED1C24] text-[#ED1C24]" : "border-transparent text-gray-600"}
        hover:text-[#ED1C24] transition
      `}
    >
      {label}
    </button>
  );
};

export default TabButton;