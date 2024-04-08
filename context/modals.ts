// import { $searchModal } from '@/context/modals';
import { createDomain } from "effector";

const modals = createDomain()

// Events
export const openMenu = modals.createEvent()
export const closeMenu = modals.createEvent()
export const openCatalogMenu = modals.createEvent()
export const closeCatalogMenu = modals.createEvent()
export const openSearchModal = modals.createEvent()
export const closeSearchModal = modals.createEvent()

// Subscriptions
export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);


export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false);

// состояния модального поиска
export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false)

  // новое состояние
   



  