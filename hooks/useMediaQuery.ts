'use client'
import { getWindowWidth } from '@/lib/utils/common'
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  // Исходное состояние ширины
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  // Функиця которая на событие resize обновляет состояние ширины
  const handleResize = () => setWindowWidth(getWindowWidth())

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)

    return () => window.removeEventListener('resize', handleResize, true)
  }, [])

  // Возвращается обновленное состояние ширины и сама функция
  return { windowWidth, handleResize }
}

export const useMediaQuery = (maxWidth: number) => {
  // Использование вспомогательного хука
  const {
    windowWidth: { windowWidth }, handleResize } = useWindowWidth()
    // Состояние которое меняется если входящий параметр ширины меньше или больше 
  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    if (windowWidth <= maxWidth) {
      setIsMedia(true)
    } else {
      setIsMedia(false)
    }
  }, [handleResize, maxWidth, windowWidth])

  return isMedia
}
