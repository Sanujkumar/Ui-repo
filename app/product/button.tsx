interface ButtonProps {
    value: string;
    type: "button" | "submit" | "reset"; 
    color?: string; 
    className?: string; 
  }
  
  export default function Button({ value, type, color = "bg-gray-400", className = "" }: ButtonProps) {
    return (
      <button
        type={type}
        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-4 focus:ring-gray-300 ${color} ${className}`}
      >
        {value}
      </button>
    );
  }
  