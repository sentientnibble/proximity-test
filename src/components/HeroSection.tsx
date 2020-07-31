import React from "react";

interface IProps {
  isPaused: boolean;
  setPaused: (paused: any) => void;
}

const HeroSection: React.FC<IProps> = ({ isPaused, setPaused }) => (
  <main className="lg:relative w-full">
    <div className=" lg:py-48 lg:text-left hero-left-container max-w-7xl">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h2 className="hero-heading-text sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          It is stonks time
          <br className="xl:hidden" />
          <span className="text-indigo-600"> brothers and sisters</span>
        </h2>
        <p className="hero-subtitle-text sm:text-xl md:mt-5 md:max-w-3xl">
          A cool corporate image of a fictional place to lure you into thinking
          this is going to be useful
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <button
              type="button"
              onClick={() => setPaused((paused: boolean) => !paused)}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              {isPaused
                ? "Reignite the wolf of fall street"
                : "Stop the stonks"}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-image-container lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full sm:h-72 md:h-96">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        alt="Stonks"
      />
    </div>
  </main>
);

export default HeroSection;
