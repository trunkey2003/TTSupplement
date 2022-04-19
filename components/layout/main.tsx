// components/layout.js

import Nav from '../common/nav';
import Footer from '../common/footer';

export function Layout({ children }: any) {
  return (
    <>
      <Nav />
        <main className='h-screen mx-[10%] bg-gray-100  '>{children}</main>
      <Footer />
    </>
  )
}