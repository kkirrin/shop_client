"use client"

import { TraceEvent } from 'next/dist/trace';
import { useUnit } from 'effector-react'
import { $lang } from '@/context/lang'
import translationsJson from '@/public/translations/translations.json'

const useLang = () => {
  const lang  = useUnit($lang);
  const translations = translationsJson
  
  return { lang, translations};
}

export default useLang