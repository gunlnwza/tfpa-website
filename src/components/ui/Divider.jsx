// components/ui/Divider.jsx
export default function Divider({ 
  className = '' 
}) {
  // Standard Horizontal Divider
  return <hr className={`border-t border-gray-200 my-6 ${className}`} />;
}
