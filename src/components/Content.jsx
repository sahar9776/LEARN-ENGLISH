function Content({ children, ...props }) {
  return (
    <p className="max-w-xl text-[16px] text-lg text-white/75 mt-2.5 lg:mt-5" {...props}>
      {children}
    </p>
  )
}

export default Content
