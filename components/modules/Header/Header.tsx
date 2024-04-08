"use client"
 
import { useStore, useUnit } from "effector-react";
import Link from "next/link";
import useLang from "@/hooks/useLang";
import Menu from "./Menu";
import Logo from "@/components/elements/Logo/Logo";
import { $searchModal, openMenu, openSearchModal } from "@/context/modals";
import { addOverflowHiddenToBody, handleCloseSearchModal } from "@/lib/utils/common";
import CartPopup from "./CartPopup/CartPopup";


const Header = () => {
  const { lang, translations} = useLang()

  const searchModal = useUnit($searchModal)

  // Обработчик клика по кнопке
  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu();
  }

  // фунция для открытия модалки поиска товаров
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  }

  return (
    // стили глобальные т.к. header на всех страницах
    <header className='header'>
      <div 
        className={`header__search-overlay ${
          searchModal  ? "overlay-active" : ""
        }`}
        onClick={handleCloseSearchModal}
      />
    <div className='container header__container'>
          {/* Каталог меню */}
          <button className="btn-reset header__burger" onClick={handleOpenMenu}>
            {translations[lang].header.menu_btn}
          </button>

          <Menu />

          <div className="header__logo">
            <Logo />
          </div>

          <ul className="header__links list-reset">
            <li className='header__links__item'>
              {/* Кнопка поиска */}
              <button
                  className='btn-reset header__links__item__btn header__links__item__btn--search'
                  onClick={handleOpenSearchModal}
                />
            </li>
            <li className='header__links__item'>
              <Link
                href='/favorites'
                className='header__links__item__btn header__links__item__btn--favorites'
              />
            </li>

            <li className='header__links__item'>
              <Link
                className='header__links__item__btn header__links__item__btn--compare'
                href='/comparison'
              />
            </li>

            <li className='header__links__item'>
              <Link
                href='/favorites'
                className='header__links__item__btn header__links__item__btn--favorites'
              />
            </li>

            <li className='header__links__item'>
              {/* Попап для корзины */}
              <CartPopup />
            </li>

            <li className="header__links__item header__links__item--profile">
            <button
                className='btn-reset header__links__item__btn header__links__item__btn--profile'
              />
            </li>

          </ul>
      </div>
    </header>
  )
}

export default Header