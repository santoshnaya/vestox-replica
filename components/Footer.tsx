'use client'

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white">vestox</span>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">©</span>
              </div>
              <span>2022 halo lab</span>
              <span>© All rights reserved</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                Public Offering Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer