import { closeSearchModal } from "@/context/modals"

// Функция для удаления класса overflow-hidden c body
export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}

// Функция для добавления класс overflow-hidden на body
export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
  // Если есть padding то его и устанвливаем для body
  paddingRight && (body.style.paddingRight = paddingRight)
}

// Получение ширины экрана и возвращение ее
export const getWindowWidth = () => {
  const { innerWidth: windowWidth} = 
  typeof window !== 'undefined' ? window : { innerWidth: 0} 

  return { windowWidth }
}

export const handleCloseSearchModal = () => {
  closeSearchModal();
  removeOverflowHiddenFromBody()
}