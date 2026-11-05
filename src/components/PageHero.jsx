export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Kuliah Islam Abu Dzar</span>
        <h1>{title}</h1>
        {children ? <p>{children}</p> : null}
      </div>
    </section>
  )
}
