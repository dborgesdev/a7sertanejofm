import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Radio, Volume2, VolumeX } from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";
import heroEstrada from "@/assets/hero-estrada.jpg";
import heroDanca from "@/assets/hero-danca.jpg";
import heroFestival from "@/assets/hero-festival.jpg";
import heroPalco from "@/assets/hero-palco.jpg";
import heroPublico from "@/assets/hero-publico.jpg";

const streamUrl = "https://s04.svrdedicado.org:7916/stream";
const statsUrl = "/api/now-playing";

const images = [
  heroArena,
  heroEstrada,
  heroDanca,
  heroFestival,
  heroPalco,
  heroPublico,
];

const PlayerSection = () => {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(100);
  const [songTitle, setSongTitle] = useState("A7 Sertanejo — Ao Vivo");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playing = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    const stopped = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };

    audio.addEventListener("playing", playing);
    audio.addEventListener("pause", stopped);
    audio.addEventListener("error", stopped);

    return () => {
      audio.removeEventListener("playing", playing);
      audio.removeEventListener("pause", stopped);
      audio.removeEventListener("error", stopped);
    };
  }, []);

  useEffect(() => {
    let active = true;

    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(statsUrl, { cache: "no-store" });
        if (!response.ok) return;

        const data = (await response.json()) as { songtitle?: string };
        if (active && data.songtitle) setSongTitle(data.songtitle);
      } catch {
        // Metadata is optional; the stream must keep working if stats are unavailable.
      }
    };

    fetchNowPlaying();
    const interval = window.setInterval(fetchNowPlaying, 10000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    setIsLoading(true);
    try {
      await audio.play();
    } catch {
      setIsLoading(false);
    }
  };

  const changeVolume = (nextVolume: number) => {
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume / 100;
    }
  };

  return (
    <section id="player" className="py-20 md:py-32 bg-[hsl(20_14%_8%)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio size={20} className="text-primary" strokeWidth={1.5} />
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
              No Ar
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter">
            Nossa Playlist
            <br />
            Você ouve e ama
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-texas-dark/30 max-w-5xl mx-auto"
        >
          {/* Slideshow background */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                width={1920}
                height={1080}
              />
            ))}
            {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent z-10" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10" />

            {/* Equalizer bars */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1 z-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-[#FF5100]"
                  animate={{
                    height: [8, Math.random() * 30 + 10, 8],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player nativo — mantém intactos slideshow e equalizador */}
          <div className="relative bg-texas-dark text-white">
            <audio ref={audioRef} src={streamUrl} preload="none" />
            <div className="flex min-h-20 items-center gap-3 px-3 py-3 sm:gap-4 sm:px-5">
              <button
                type="button"
                onClick={togglePlayback}
                disabled={isLoading}
                aria-label={isPlaying ? "Pausar transmissão" : "Ouvir A7 Sertanejo"}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 disabled:cursor-wait disabled:opacity-70 sm:h-14 sm:w-14"
              >
                {isLoading ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                ) : isPlaying ? (
                  <Pause className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
                ) : (
                  <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  A7 Sertanejo
                </p>
                <p className="truncate text-sm font-semibold text-white sm:text-lg">
                  {isLoading ? "Conectando..." : songTitle}
                </p>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5100] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5100]" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  Live
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeVolume(volume === 0 ? 100 : 0)}
                  aria-label={volume === 0 ? "Ativar som" : "Silenciar"}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {volume === 0 ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>

                <input
                  aria-label="Volume"
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(event) => changeVolume(Number(event.target.value))}
                  className="hidden w-20 accent-white md:block lg:w-28"
                />

                <span className="hidden w-8 text-right text-[10px] font-semibold text-white/50 lg:block">
                  {volume}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayerSection;
