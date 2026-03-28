import React from 'react'
import ScheduleDemo from '../components/ScheduleDemo-component/ScheduleDemo'

import type { Metadata } from "next"
import { getRobots } from '../lib/noseo';

export const metadata = {
  title: "Pricing",
  robots: getRobots(), // ✅ IMPORTANT
};

function page() {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
        <ScheduleDemo/>
    </div>
  )
}

export default page