import { useEffect, useRef, useState } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
}
