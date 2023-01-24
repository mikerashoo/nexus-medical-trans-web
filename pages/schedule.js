import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutSection from '../components/About'
import ContactSection from '../components/contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NexusLogo from '../components/NexusLogo'
import HeroSectionForSchedule from '../components/schedule/HeroSectionForSchedule'
import ScheduleForm from '../components/schedule/ScheduleForm'
import ServiceSection from '../components/services'
import styles from '../styles/Home.module.css'
import { Fragment } from "react";

const navigation = [
    { name: 'Home', href: '/' }, 
  ]
  
export default function Schedule() {
  return (
    <div>
      <Head>
        <title>Nexus Non-Emergency Medical Transport - schedule your medical ride</title>
        <meta name="description" content="Nexus non-emergency transport schedule your medical ride" />
        <link rel="icon" href="/nexus.png" />
      </Head>
      <Popover>
      <div className="relative px-4 pt-6 xs:pt-2 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-6 lg:justify-start" aria-label="Global">
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href={"/"}>
                <span className="sr-only">Nexus</span>
                <NexusLogo />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))}

              <a href={"/schedule"} className="font-medium md text-indigo-600 hover:text-indigo-500">
                Book/Schedules
            </a>

            
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <NexusLogo />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <a href={"/schedule"} className="font-medium px-3 md text-indigo-600 hover:text-indigo-500">
                Book/Schedule
            </a>
            </div>
             
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
      <main className="px-4 sm:mt-12 sm:px-6 lg:px-40 xs:px-10 md:px-10 bg-slate-50 py-10">
            <ScheduleForm />
          </main>
  <Footer />
       

      
    </div>
  )
}
