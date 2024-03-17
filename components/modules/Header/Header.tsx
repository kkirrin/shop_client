"use client"
 
import Menu from "./Menu";
import Logo from "@/components/elements/Logo/Logo";
import { openMenu } from "@/context/modals";
import useLang from "@/hooks/useLang";
import { addOverflowHiddenToBody } from "@/lib/utils/common";
import Link from "next/link";

const Header = () => {
  const { lang, translations} = useLang()

  // Обработчик клика по кнопке
  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu();
  }

  return (
    // стили глобальные т.к. header на всех страницах
    <header className='header'>
    <div className='container header__container'>
          <button className="btn-reset header__burger" onClick={handleOpenMenu}>
            {translations[lang].header.menu_btn}
          </button>

          <Menu />

          <div className="header__logo">
            <Logo />
          </div>

          <ul className="header__links list-reset">
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
              <Link
                className='header__links__item__btn header__links__item__btn--cart'
                href='/cart'
              />
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