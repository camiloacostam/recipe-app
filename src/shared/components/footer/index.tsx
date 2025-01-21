import './styles.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">Con el Patrocinio de</div>
      <div className="footer__sponsors">
        <img
          src="/images/products.png"
          alt="Patrocinadores"
          className="footer__image"
        />
      </div>
    </footer>
  )
}
