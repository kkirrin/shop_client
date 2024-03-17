'use client '

const ContactListItems = () => {

  return (
   <>
    <li className='nav-menu__accordion__item'>
        <a href="tel:+899999990"
          className="nav-menu__accordion__item__link nav-menu__accordion__item__title">
            +7 (499) 000 00 00
          </a>
        </li>
        <li className='nav-menu__accordion__item'>
          <a href="mailto:test@mail.ru" className="nav-menu__accordion__item__link">
            test@mail.ru
          </a>
        </li>
        <li className='nav-menu__accordion__item'>
          <a href="mailto:test@mail.ru" className="nav-menu__accordion__item__link">
            Вк
          </a>
        </li>
        <li className='nav-menu__accordion__item'>
          <a href="mailto:test@mail.ru" className="nav-menu__accordion__item__link">
            ТГ
          </a>
      </li>
   </>
  )
}

export default ContactListItems