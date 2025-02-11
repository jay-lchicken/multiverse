import ComicButton from "@/components/ComicButton/ComicButton";
import { HelpUs } from "@/components/HelpUs";
import { Register } from "@/components/Register";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis();

  return (
    <ReactLenis root>
      <main className="overflow-x-hidden">
        <div className="clouds-container"></div>
        <div className="dramatic-overlay"></div>
        <div className="background-container h-[95vh] md:h-auto">
          <section className="cityscape">
            <img src="/city.svg" className="city-piece" alt="City" />
            <img src="/city.svg" className="city-piece" alt="City" />
            <img src="/city.svg" className="city-piece" alt="City" />
          </section>
          <div className="hakkun h-0 md:h-[120vh]" style={{ zIndex: 4 }}></div>

          <div className="absolute top-[20vh] md:top-[5vh] content-wrapper">
            <div className="header pt-[0vh] mx-auto px-2 md:p-auto">
              <img src="/multiversevector.svg" className="header-logo" />
            </div>

            <p className="px-6 md:p-auto text-center text-xl md:text-4xl max-w-xl mx-auto mt-6 mb-8 text-blue-50">
              Calling all club leaders—we need your help to save the multiverse!
            </p>

            <div className="flex w-full justify-center">
              <ComicButton
                buttonName="Register"
                hoverBtnName="Join Us"
                btnClassName="font-bold z-99 py-6"
                textClassName="text-xl md:text-3xl py-3 px-6"
                handleButtonClick={function (): void {
                  lenis?.scrollTo("#register");
                }}
              />
            </div>

            <img
              src="/comic-intro-1.png"
              alt="A raccoon is loose..."
              className="lore-text ml-0 md:ml-[30vw] mt-0 md:mt-[40vh] opacity-0 md:opacity-100"
            />

            <div className="pop-container">
              <img src="/pop.png" alt="Pop" className="pop-image hidden" />
            </div>
          </div>
        </div>

        <div className="lore-section-container  md:clip-properly pt-0 md:pt-[12vh]">
          <section className="border-t-[8px] border-black mx-auto lore-section md:clip-properly pt-[25vh] pb-[10vh] mt-[-100px]">
            <div className="panels-container pt-0 md:pt-[170px]">
              <div className="panel">
                <div className="flex justify-center items-center h-full ">
                  <p className="graveyard text-4xl max-w-xl text-center">
                    We need your help, superleaders. Here are the steps to
                    proceed with your mission.
                  </p>
                </div>
              </div>
              <div className="panel">
                <div className="flex flex-col justify-center items-center h-full ">
                  <div className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full graveyard text-3xl mb-3">
                    <p className="number">1</p>
                  </div>
                  <p className="graveyard text-4xl max-w-xl mb-3">
                    Register Here!
                  </p>
                </div>
              </div>
              <div className="panel">
                <div className="flex flex-col justify-center items-center h-full ">
                  <div className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full graveyard text-3xl mb-3">
                    <p className="number">2</p>
                  </div>
                  <p className="graveyard text-4xl max-w-xl text-center">
                    Add your project to{" "}
                    <a
                      className="underline hover:text-blue-500"
                      target="_blank"
                      href="https://github.com/hackclub/multiverse"
                    >
                      this repo
                    </a>
                  </p>

                  <p className="graveyard text-base -rotate-3 mt-6">
                    *(don't worry, we have instructions to help you!)
                  </p>
                </div>
              </div>
              <div className="panel">
                <div className="flex flex-col justify-center items-center h-full ">
                  <div className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full graveyard text-3xl mb-3">
                    <p className="number">3</p>
                  </div>
                  <p className="graveyard mx-auto text-4xl max-w-xl text-center">
                    Work on and pitch a YSWS/workshop idea!
                  </p>

                  {/* <p className="graveyard text-base -rotate-2 mt-6">
                  *(we'll review these and give feedback as you go)
                </p> */}
                </div>
              </div>
            </div>
          </section>
        </div>

        <Register />
        <HelpUs />

        <footer>
          <p>join #multiverse on slack 🦸</p>
        </footer>
      </main>
    </ReactLenis>
  );
}
