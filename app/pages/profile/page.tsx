import BottomNavbar from '@/app/components/BottomBar';

const UserProfile: React.FC = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-end">
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#0e141b] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div
                className="text-[#0e141b]"
                data-icon="ArrowLeft"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/stability/de234575-2b33-42fc-93a2-118632adc331.png")',
                }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  Cathy
                </p>
                <p className="text-[#4e7397] text-base font-normal leading-normal text-center">Age 26</p>
                <p className="text-[#4e7397] text-base font-normal leading-normal text-center">Joined in 2018</p>
              </div>
            </div>
            <div className="flex w-full max-w-[480px] gap-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] flex-1">
                <span className="truncate">Follow</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] flex-1">
                <span className="truncate">Message</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {['Interior Design', 'Website Design', 'Art', 'Drawing', 'Illustration'].map((tag) => (
            <div
              key={tag}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf3] pl-4 pr-4"
            >
              <p className="text-[#0e141b] text-sm font-medium leading-normal">{tag}</p>
            </div>
          ))}
        </div>
        <div className="pb-3">
          <div className="flex border-b border-[#d0dbe7] px-4 justify-between">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#1980e6] text-[#0e141b] pb-[13px] pt-4 flex-1" href="#">
              <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">Palettes</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7397] pb-[13px] pt-4 flex-1" href="#">
              <p className="text-[#4e7397] text-sm font-bold leading-normal tracking-[0.015em]">Mood Stories</p>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            {
              image: 'https://cdn.usegalileo.ai/stability/07e6eb4e-5d13-4884-b748-e67a7b198c7a.png',
              title: 'Color Palette 1',
            },
            {
              image: 'https://cdn.usegalileo.ai/stability/8318f0e4-028c-433a-b677-f89f3b56b577.png',
              title: 'Color Palette 2',
            },
            {
              image: 'https://cdn.usegalileo.ai/stability/c4b597f0-2c24-40bc-b759-85ee6f254ba3.png',
              title: 'Color Palette 3',
            },
          ].map(({ image, title }) => (
            <div key={title} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url("${image}")` }}
              ></div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#e7edf3] bg-slate-50 px-4 pb-3 pt-2">
          {['House', 'MagnifyingGlass', 'Plus'].map((icon) => (
            <a key={icon} className="flex flex-1 flex-col items-center justify-end gap-1 text-[#4e7397]" href="#">
              <div className="flex h-8 items-center justify-center" data-icon={icon} data-size="24px" data-weight="fill">
                {/* Replace the below SVGs with respective icons based on the icon name */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M0 0h256v256H0z" fill="none" />
                  {/* Add SVG paths based on icon name */}
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
      <BottomNavbar/>
    </div>
  );
};

export default UserProfile;
