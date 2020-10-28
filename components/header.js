import React, { Component } from 'react'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <nav className="flex items-center justify-between flex-wrap border-b border-gray-300 p-4">
        <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/">
              <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                {CMS_NAME}
              </a>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => this.toggleNav()} className="flex items-center px-3 py-2 border rounded hover">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`w-full ${isOpen ? 'block' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end`}>
            <div className="text-sm">
              <Link href="/blog">
                <a className="block lg:inline-block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded md:mt-0 md:ml-2 hover:underline hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline">
                  Blog
                </a>
              </Link>
              <a href="https://twitter.com/hurtwxlf" rel="noopener noreferrer" className="block lg:inline-block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                Follow
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
