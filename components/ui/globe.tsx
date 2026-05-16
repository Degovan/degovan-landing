"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,

  phi: 0,
  theta: 0.2,

  dark: 1,
  diffuse: 0.9,
  mapSamples: 40000,
  mapBrightness: 8,

  baseColor: [0.08, 0.22, 0.42],
  markerColor: [0.22, 0.74, 0.97],
  glowColor: [0.05, 0.45, 0.75],

  markers: [
    { location: [-7.9135, 113.8213], size: 0.05 },
    { location: [-8.1737, 113.7009], size: 0.05 },
    { location: [-7.7956, 110.3695], size: 0.05 },
    { location: [-6.2088, 106.8456], size: 0.06 },
    { location: [-0.5022, 117.1536], size: 0.06 },
  ],
  arcs: [
    { from: [-7.9135, 113.8213], to: [-8.1737, 113.7009] },
    { from: [-8.1737, 113.7009], to: [-7.7956, 110.3695] },
    { from: [-7.7956, 110.3695], to: [-6.2088, 106.8456] },
    { from: [-6.2088, 106.8456], to: [-0.5022, 117.1536] },
  ],
  arcColor: [0.22, 0.74, 0.97],
  arcWidth: 0.35,
  arcHeight: 0.2,
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,

      phi: 0,
      theta: 0.2,

      dark: 1,
      diffuse: 0.9,
      mapSamples: 40000,
      mapBrightness: 8,

      baseColor: [0.08, 0.22, 0.42],
      markerColor: [0.22, 0.74, 0.97],
      glowColor: [0.05, 0.45, 0.75],

      markers: [
        { location: [-7.9135, 113.8213], size: 0.03 },
        { location: [-8.1737, 113.7009], size: 0.03 },
        { location: [-7.7956, 110.3695], size: 0.03 },
        { location: [-6.2088, 106.8456], size: 0.03 },
        { location: [-0.5022, 117.1536], size: 0.03 },
      ],
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
