"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/Footer/Footer';

const FooterWrapper = () => {

  const pathName = usePathname()
  const footerPages = ["/","/destinations","/packages"]
  const showFooter = footerPages.includes(pathName)

  return showFooter ? <Footer/> : null;
}

export default FooterWrapper