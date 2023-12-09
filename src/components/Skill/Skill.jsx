import React, { useEffect, useRef } from 'react';
import "./Skill.scss";

const Skill = ({ logoSrc, altText, title }) => {
    const logoRef = useRef();
    const titleRef = useRef();

    // ------------ Animate with setTimeout(only happens once)
    // useEffect(() => {
    //     const timer = Math.random() * 5000; // Random time up to 5 seconds
    //     const wiggleTimeout = setTimeout(() => {
    //         if (logoRef.current) {
    //             logoRef.current.classList.add('wiggle');

    //             const removeWiggleClass = setTimeout(() => {
    //                 if (logoRef.current) {
    //                     logoRef.current.classList.remove('wiggle');
    //                 }
    //             }, 500); // Remove the class after 0.5s (the duration of the wiggle animation)

    //             return () => clearTimeout(removeWiggleClass);
    //         }
    //     }, timer);

    //     return () => clearTimeout(wiggleTimeout);
    // }, []);


    // ------------ Animate with setInterval - add titles
    // useEffect(() => {
    //     const wiggleInterval = setInterval(() => {
    //         [logoRef, titleRef].forEach(ref => {
    //             if (ref.current) {
    //                 ref.current.classList.add('wiggle');

    //                 const removeWiggleClass = setTimeout(() => {
    //                     if (ref.current) {
    //                         ref.current.classList.remove('wiggle');
    //                     }
    //                 }, 500); // Remove the class after 0.5s (the duration of the wiggle animation)

    //                 return () => clearTimeout(removeWiggleClass);
    //             }
    //         });
    //     }, Math.random() * 18000 + 500); // Random time up to 5 seconds plus the duration of the wiggle animation

    //     return () => clearInterval(wiggleInterval);
    // }, [])


    // ------------ Animate with setInterval - make img and title refs wiggle independently
    useEffect(() => {
        const setWiggleInterval = (ref) => {
            return setInterval(() => {
                if (ref.current) {
                    ref.current.classList.add('wiggle');

                    const removeWiggleClass = setTimeout(() => {
                        if (ref.current) {
                            ref.current.classList.remove('wiggle');
                        }
                    }, 500); // Remove the class after 0.5s (the duration of the wiggle animation)

                    return () => clearTimeout(removeWiggleClass);
                }
            }, Math.random() * 20000 + 500); // Random time up to 5 seconds plus the duration of the wiggle animation
        };

        const logoWiggleInterval = setWiggleInterval(logoRef);
        const titleWiggleInterval = setWiggleInterval(titleRef);

        return () => {
            clearInterval(logoWiggleInterval);
            clearInterval(titleWiggleInterval);
        };
    }, []);


    return (
        <article className='skills__container--logo-wrap'>
            {logoSrc ? <img ref={logoRef} className="skills__container--logo" src={logoSrc} alt={altText} /> : null}
            {title ? <p ref={titleRef} className="skills__container--logo-title">{title}</p> : null}
        </article>
    );
}

export default Skill
