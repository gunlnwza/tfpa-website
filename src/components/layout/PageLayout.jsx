import Header from './Header'
import Footer from './Footer'
import MemberHeader from './MemberHeader'

function PageLayout({ children, loggedIn = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      { loggedIn ? <MemberHeader /> : <Header /> } 
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
