import LiquidGlass from "@/components/LiquidGlass";
import { GlassElement } from "@/components/GlassElement/GlassElement";
import Image from "next/image";
import background from "@/imgs/bg.jpg";

export default function Home() {
  const SIDEBAR_WIDTH = 300;

  return (
    <main className="h-screen relative flex">
      {/* Sidebar */}
      <aside
        className="fixed h-full z-10 m-2 rounded-3xl"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <GlassElement
          radius={16}
          depth={0}
          strength={25}
          blur={10}
          chromaticAberration={8}
          scrimOpacity={0.15}
          background="rgba(16, 16, 16, 0.65)"
        >
          <div className="space-y-6 p-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-5 h-5 bg-white/20 rounded"></div>
              <span>Landmarks</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-5 h-5 bg-white/20 rounded"></div>
              <span>Map</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-5 h-5 bg-white/20 rounded"></div>
              <span>Collections</span>
            </div>
          </div>
        </GlassElement>
      </aside>

      {/* Button to the right of the aside */}
      <button
        className="fixed z-10 top-2 text-white cursor-pointer w-10 h-10 rounded-full"
        style={{ left: SIDEBAR_WIDTH + 16 }}
      >
        <GlassElement
          radius={99}
          depth={8}
          strength={6}
          blur={1}
          chromaticAberration={3}
          scrimOpacity={0.15}
          background="rgba(255, 255, 255, 0.15)"
        >
          <div className="flex items-center justify-center  w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="lucide lucide-chevron-left-icon lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </GlassElement>
      </button>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top div with background image */}
        <div className="h-1/2 relative">
          <Image
            src={background}
            alt="background"
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            fill
          />
        </div>

        {/* Bottom div */}
        <div
          className="h-1/2 bg-black flex flex-col p-6"
          style={{ marginLeft: SIDEBAR_WIDTH }}
        >
          <article>
            <h1 className="text-white text-3xl font-bold leading-tight">
              Mount Fuji
            </h1>
            <div className="text-neutral-200 text-lg leading-relaxed space-y-4">
              <p>
                When seen at a distance, Mount Fuji presents a beautiful, nearly
                symmetric, often snow-capped profile and is Japan's tallest and
                most iconic mountain. The volcanic cone rises gracefully up to
                slightly more than 12,000 feet. On clear days, the mountain is
                visible as far away as Tokyo. Despite its seemingly peaceful
                distant existence, Mount Fuji is an active volcano. Its last
                eruption was in 1707.
              </p>
              <p>
                Similar to other exceptionally tall mountains, Fuji-san is home
                to many ecological zones from its base to its summit. In the
                lower elevations, deciduous and coniferous trees such as the
                Japanese oak and cedars are common. As you climb in elevation,
                the climate becomes harsher and plant life transitions to alpine
                plants and shrubs that have adapted to colder temperatures. At
                the highest altitudes, a volcanic desert environment exists.
              </p>
              <p>
                Many mammals and birds are found in the forests on Mount Fuji.
                Black bears live there, although squirrels and fox are more
                likely to be seen. The Japanese serow is a rare and protected
                species of goat-antelope that roams secretively through dense
                forests. High altitude birds such as the Iwahibari and
                Hoshigarasu are found above 8,200 feet, while several species of
                warblers, flycatchers, and Ural and scops owls live in lower
                altitudes.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
