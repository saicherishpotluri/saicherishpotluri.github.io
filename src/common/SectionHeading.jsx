import Reveal from "./Reveal";

function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="mb-2 font-mono text-sm text-accent-green">
        {index ? `${index} //` : "//"} <span className="text-text-muted">{subtitle}</span>
      </p>
      <h2 className="font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default SectionHeading;
