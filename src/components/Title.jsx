function Title({ children, ...props }) {
  return (
    <h3
      className="text-2xl lg:text-4xl font-semibold"
      {...props}
    >
      {children}
    </h3>
  );
}

export default Title;
