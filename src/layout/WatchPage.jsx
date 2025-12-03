import { useState } from "react";
import Tabs from "../components/Tabs";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/20/solid";

const WatchPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="my-28 px-12 space-y-10">
      <div className="space-y-8">
        <h1 className="text-accent text-2xl font-bold">What to watch</h1>
        <p className="relative px-4 py-1 font-medium before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
          Top picks just for you
        </p>
      </div>
      <Tabs active={activeTab} onChange={setActiveTab} />
      <div className="scrollbar scroll-no-arrow pb-8 flex gap-8 items-center overflow-x-auto">
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
        <article className="shrink-0 w-48 min-h-[420px] bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
          <div className="h-64">
            <img
              src="/assets/images/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 pb-4 space-y-2">
            <div className="flex justify-between items-start gap-4">
              <h2 className="font-medium">Dune: A New Hope </h2>
              <InformationCircleIcon className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-400">Advanture</p>
            <p className="text-xs flex items-center gap-1">
              <span className="text-sm">⭐</span> 8.2
            </p>
            <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
              <PlayIcon className="h-5 w-5" />
              <span>Watch Trailer</span>
            </button>
            <h5 className="text-[10px] font-light mx-auto text-center">
              Watch on: 🎬
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WatchPage;
