const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignmentClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0057FF]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-inherit sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
