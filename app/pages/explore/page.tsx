import BottomNavbar from '@/app/components/BottomBar';
import React from 'react';

const DiscoverColors: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden">
      <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <div className="text-[#0e141b] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold tracking-tight flex-1 text-center pr-12">
          Discover colors
        </h2>
      </div>

      <div className="px-4 py-3">
        <label className="flex flex-col w-full h-12">
          <div className="flex w-full items-stretch rounded-xl h-full">
            <div className="text-[#4e7397] flex items-center pl-4 bg-[#e7edf3] rounded-l-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="What color are you looking for?"
              className="form-input flex w-full px-4 bg-[#e7edf3] text-[#0e141b] rounded-r-xl border-none focus:ring-0"
            />
          </div>
        </label>
      </div>

      <div className="pb-3">
        <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
          {['For you', 'Trending', 'New', 'Colors', 'People'].map((color) => (
            <a
              key={color}
              href="#"
              className={`flex flex-col items-center justify-center border-b-[3px] ${
                color === 'All'
                  ? 'border-[#1980e6] text-[#0e141b]'
                  : 'border-transparent text-[#4e7397]'
              } pb-[13px] pt-4`}
            >
              <p className="text-sm font-bold tracking-[0.015em]">{color}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {[
          'https://cdn.usegalileo.ai/sdxl10/4dcc23c5-bf35-4587-9be0-a630e8d037f3.png',
          'https://cdn.usegalileo.ai/stability/ceb5d0f6-bbdb-4f36-8bf1-8e5af7e2d704.png',
          'https://cdn.usegalileo.ai/stability/f0938fec-dd12-44b6-b419-d1bea8de0d16.png',
          'https://cdn.usegalileo.ai/stability/ab16448d-efdc-4b11-9854-1afeb6ec61b7.png',
          'https://cdn.usegalileo.ai/stability/1c462f49-eb98-413f-b699-3a820320a9b1.png',
          'https://cdn.usegalileo.ai/stability/a133ac40-23a0-472d-b848-8497480b10fd.png',
          'https://cdn.usegalileo.ai/sdxl10/57a54503-14c6-4820-80b7-a19fa7753d01.png',
          'https://cdn.usegalileo.ai/sdxl10/72867663-d869-40a7-982d-f0d35c70c64a.png',
          'https://cdn.usegalileo.ai/stability/e73af323-9b41-4167-9072-5b63e05aa1c6.png',
          'https://cdn.usegalileo.ai/sdxl10/dbdd6bac-9a34-439d-b970-32a656504519.png',
          'https://cdn.usegalileo.ai/stability/ce6ebac6-333d-409a-a532-9275c47594c6.png',
          'https://cdn.usegalileo.ai/stability/3fe2e997-71b7-4922-ad62-b207c5c1da60.png',
        ].map((imageUrl, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div
              className="w-full aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-[#e7edf3] bg-slate-50 px-4 pb-3 pt-2">
        <a
          href="#"
          className="flex flex-1 flex-col items-center justify-end gap-1 text-[#0e141b]"
        >
          <div className="flex h-8 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
            </svg>
            <BottomNavbar/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DiscoverColors;
