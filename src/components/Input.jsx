
function Input({ type, placeholder }) {
  return (
    <div className="w-full h-14 mt-2.5 lg:mt-5">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full rounded-lg border-2 border-primary/30
        outline-none p-1.5 lg:p-3 placeholder:text-[16px]" />
    </div>
  )
}

export default Input
