import { Swiper } from "swiper/react";


export default function CategoryPage() {
  return (
    <main className="relative mx-auto flex w-full max-w-[640px] flex-col gap-[30px] overflow-x-hidden bg-white pb-[112px]">
      <div id="Background" className="absolute left-0 right-0 top-0">
        <img
          src="/assets/images/backgrounds/orange.png"
          alt="image"
          className="w-full h-[345px] object-cover object-bottom"
        />
      </div>
      <section
        id="NavTop"
        className="fixed left-0 right-0 top-[16px] z-30 transition-all duration-300"
      >
        <div className="relative mx-auto max-w-[640px] px-5">
          <div
            id="ContainerNav"
            className="flex items-center justify-between py-[14px] transition-all duration-300"
          >
            <a href="index.html">
              <div
                id="Back"
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white"
              >
                <img
                  src="/assets/images/icons/back.svg"
                  alt="icon"
                  className="h-[22px] w-[22px] shrink-0"
                />
              </div>
            </a>
            <h2
              id="Title"
              className="font-semibold text-white transition-all duration-300"
            >
              Explore
            </h2>
            <a href="#">
              <div
                id="Cart"
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white"
              >
                <img
                  src="/assets/images/icons/cart.svg"
                  alt="icon"
                  className="h-[22px] w-[22px] shrink-0"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <header className="relative mx-auto mt-[100px] flex items-center gap-4">
        <img
          src="/assets/images/icons/living-room-header.svg"
          alt="icon"
          className="h-[70px] w-[70px] shrink-0"
        />
        <div>
          <h1 className="text-[26px] font-extrabold leading-[39px] text-white">
            Living Room
          </h1>
          <p className="text-white">189,394 Services</p>
        </div>
      </header>
      <section id="mostOrdered" className="relative space-y-[14px]">
        <h3 className="pl-5 text-[18px] font-bold leading-[27px] text-white">
          Most Ordered
        </h3>
        <div id="MostOrderedSlider" className="swiper w-full overflow-x-hidden">
          <Swiper className="swiper-wrapper">
            <div className="swiper-slide !w-fit">
              <a href="service-details.html" className="card">
                <div className="relative flex w-[230px] shrink-0 flex-col gap-[12px] overflow-hidden rounded-[24px] border border-shujia-graylight bg-white p-4 transition-all duration-300 hover:border-shujia-orange">
                  <span className="absolute right-[26px] top-[26px] shrink-0 rounded-full bg-white px-2 py-[7px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="/assets/images/icons/star.svg" alt="icon" />
                      <p className="text-xs font-semibold leading-[18px]">
                        4.8
                      </p>
                    </div>
                  </span>
                  <div className="flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                    <img
                      src="/assets/images/thumbnails/cleaning-medium.png"
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="line-clamp-2 min-h-[48px] font-semibold">
                    Mini Swim Pool and Kids Soccer Fields Grass
                  </h4>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/icons/date.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-shujia-gray">
                        Living Room
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/icons/clock.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-shujia-gray">
                        15 Hours
                      </p>
                    </div>
                    <strong className="font-semibold text-shujia-orange">
                      Rp 8.560.392
                    </strong>
                    <img
                      className="absolute bottom-0 right-0"
                      src="/assets/images/backgrounds/decoration.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </a>
            </div>
          </Swiper>
        </div>
      </section>
      <section
        id="LatestServices"
        className="relative flex flex-col gap-[40px]"
      >
        <div className="flex flex-col gap-[14px]">
          <h3 className="pl-5 text-[18px] font-bold leading-[27px]">
            Latest Services
          </h3>
          <a href="service-details.html">
            <div className="mx-5 flex gap-3 rounded-[24px] border border-shujia-graylight bg-white p-4 transition-all duration-300 hover:border-shujia-orange">
              <div className="flex h-[101px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/thumbnails/write-mini.png"
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="line-clamp-2 min-h-[48px] font-semibold">
                  Home Family Theater Best Lights Installation
                </h4>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/clock.svg"
                    alt="icon"
                    className="h-5 w-5 shrink-0"
                  />
                  <p className="text-sm leading-[21px] text-shujia-gray">
                    15 Hours
                  </p>
                </div>
                <strong className="font-semibold text-shujia-orange">
                  Rp 8.560.392
                </strong>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section
        id="Filter"
        className="fixed bottom-5 left-0 right-0 z-30 mx-auto w-full"
      >
        <div className="mx-auto flex max-w-[640px] justify-center">
          <button type="button">
            <div className="mx-auto flex !w-fit shrink-0 items-center gap-2 rounded-full bg-shujia-orange px-[18px] py-[14px] transition-all duration-300 hover:shadow-[0px_4px_10px_0px_#D04B1E80]">
              <img src="/assets/images/icons/filter.svg" alt="icon" />
              <p className="font-semibold text-white">Filter (12)</p>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
