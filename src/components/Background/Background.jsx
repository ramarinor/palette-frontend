import "./Background.css";

function Background({ children, className, ...props }) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
}

export default Background;
