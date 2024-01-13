import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <Image src="/logo.svg" width={100} height={0} alt="" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-darkGrayishBlue">Pricing</Link>
            <Link href="#" className="hover:text-darkGrayishBlue">Product</Link>
            <Link href="#" className="hover:text-darkGrayishBlue">About Us</Link>
            <Link href="#" className="hover:text-darkGrayishBlue">Careers</Link>
            <Link href="#" className="hover:text-darkGrayishBlue">Community</Link>
          </div>
          {/* Button */}
          <Link href="#" className="hidden md:block text-white bg-brightRed rounded-full p-3 px-6 hover:bg-brightRedLight">Get Started</Link>

          {/* Hamburger Menu */}
          <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div id="menu"
          className="absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 drop-shadow-md">
              <Link href="#">Pricing</Link>
              <Link href="#">Product</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Community</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products</h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="#" className="text-white bg-brightRed rounded-full p-3 px-6 hover:bg-brightRedLight">Get Started</Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image src="/illustration-intro.svg" width={0} height={0} className="w-full h-full" alt='' />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
              Manage provides all the functionality your team needs,
              without the complexity.
              Our software is tailor-made for modern digital product teams.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision.
                  Go from tracking progress at the milestone level all the way
                  done to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision.
                  Go from tracking progress at the milestone level all the way
                  done to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>
            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision.
                  Go from tracking progress at the milestone level all the way
                  done to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          <div className="flex flex-col md:flex-row mt-24 md:space-x-6">
            {/* Testimonial 1 */}
            <div className="hidden flex-col items-center p-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <Image src="/avatar-anisha.png" width={100} height={100} className="w-16 -mt-14" alt='' />
              <h5>Anisha Li</h5>
              <p>
                "Manage has supercharged our team's workflow.
                The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="hidden flex-col items-center p-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <Image src="/avatar-ali.png" width={100} height={100} className="w-16 -mt-14" alt='' />
              <h5>Ali Bravo</h5>
              <p>
                "Manage has supercharged our team's workflow.
                The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="hidden flex-col items-center p-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <Image src="/avatar-richard.png" width={100} height={100} className="w-16 -mt-14" alt='' />
              <h5>Richard Watts</h5>
              <p>
                "Manage has supercharged our team's workflow.
                The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="my-16">
            <Link href="#" className="text-white bg-brightRed rounded-full p-3 px-6 hover:bg-brightRedLight">Get Started</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:text-left md:max-w-xl">
            Simplity how your team works today
          </h2>
          <div>
            <Link href="#" className="text-brightRed bg-white rounded-full shadow-2xl p-3 px-6 hover:bg-gray-300">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            {/* Logo */}
            <div>
              <Image src="/logo-white.svg" width={100} height={100} className="h-8" alt='' />
            </div>
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2024, All Rights Reserved
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <Link href="#">
                <Image src="/icon-facebook.svg" alt='' width={32} height={32} className="h-8" />
              </Link>
              {/* Link 2 */}
              <Link href="#">
                <Image src="/icon-youtube.svg" alt='' width={32} height={32} className="h-8" />
              </Link>
              {/* Link 3 */}
              <Link href="#">
                <Image src="/icon-twitter.svg" alt='' width={32} height={32} className="h-8" />
              </Link>
              {/* Link 4 */}
              <Link href="#">
                <Image src="/icon-pinterest.svg" alt='' width={32} height={32} className="h-8" />
              </Link>
              {/* Link 5 */}
              <Link href="#">
                <Image src="/icon-instagram.svg" alt='' width={32} height={32} className="h-8" />
              </Link>
            </div>
          </div>

          {/* List Container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" className="hover:text-brightRed">Home</Link>
              <Link href="#" className="hover:text-brightRed">Pricing</Link>
              <Link href="#" className="hover:text-brightRed">Products</Link>
              <Link href="#" className="hover:text-brightRed">About</Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" className="hover:text-brightRed">Careers</Link>
              <Link href="#" className="hover:text-brightRed">Community</Link>
              <Link href="#" className="hover:text-brightRed">Privacy Policy</Link>
            </div>
          </div>

          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
