import useLang from "@/hooks/useLang"

export const FooterLinks = () => {
  const { lang, translations } = useLang();
  return (
    <>
    
    <div className="footer__links">
      <span>
        <a href="mailto:<EMAIL>">{translations[lang].footer.full_version}</a>
      </span>
      <span>
        <a href="mailto:<EMAIL>">{translations[lang].footer.full_version}</a>
      </span>
    </div>
    </>
  )
}