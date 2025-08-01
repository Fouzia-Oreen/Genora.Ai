import { PricingTable } from '@clerk/clerk-react'

const PricePlan = () => {
  return (
    <div className='max-w-7xl mx-auto z-20 my-32 p-6'>
      <div className="text-center">
        <h2 className='text-[42px] font-semibold text-color_4'>Choose Your Plan</h2>
        <p className='mx-auto max-w-lg text-color_2/60 font-medium'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs</p>
      </div>
      <div className='mt-12 '>
        <PricingTable
          appearance={{
            variables: {
              colorPrimary: '#1D4ED8',
              colorText: '#172554',
              colorTitle: '#1D357B',
              fontWeight: '600',
            },
            elements: {
              card: 'bg-color_6 rounded-2xl shadow-lg border border-gray-200 p-6 hover:scale-105 transition-transform',
              title: 'text-xl font-semibold text-colorText',
              description: 'text-sm text-gray-500 mb-2',
              price: 'text-3xl font-bold text-color_5',
              button: ' mt-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] rounded-full border-none outline-none',
              footerAction: 'bg-transparent text-colorText underline font-normal hover:text-blue-600',
            },
          }}
        />
        </div>
    </div>
  )
}

export default PricePlan
