// File: components/ui/alert.js
export function Alert({ variant = "default", className = "", children }) {
    const variants = {
      default: "bg-gray-100 text-gray-800 border-gray-300",
      success: "bg-green-100 text-green-800 border-green-300",
      destructive: "bg-red-100 text-red-800 border-red-300",
    };
  
    return (
      <div
        className={`border rounded-lg px-4 py-3 ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  }
  