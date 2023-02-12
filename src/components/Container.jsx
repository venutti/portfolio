export default function Container({ children, ...rest }) {
  return (
    <div {...rest} className={`mx-auto max-w-3xl ${rest.className}`}>
      {children}
    </div>
  );
}
