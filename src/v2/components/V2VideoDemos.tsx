import { useRef, useState, useEffect } from 'react';
import ellaMob from '../../assets/desk/1_c.mp4';
import ellaDesk from '../../assets/desk/2_c.mp4';

export default function V2VideoDemos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-play once sources are added
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [visible]);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center py-[12vw] md:py-[4vw]">
      <div className="w-[90%] h-[115vw] md:h-[unset] md:aspect-[16/9]">
        <video
          ref={videoRef}
          className="object-cover w-full h-[inherit] md:h-[inherit] rounded-[40px] md:rounded-[100px]"
          playsInline
          muted
          loop
          preload="none"
        >
          {visible && <source className="md:hidden" src={ellaMob} type="video/mp4" />}
          {visible && <source className="hidden md:block" src={ellaDesk} type="video/mp4" />}
        </video>
      </div>
    </div>
  );
}
