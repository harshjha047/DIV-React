// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles

// const SmoothScrollComponent = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });

//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       <section data-scroll-section>
//         <h1 data-scroll data-scroll-speed="2">Smooth Scroll with Locomotive Scroll</h1>
//         <p data-scroll data-scroll-speed="3">This is an example of smooth scroll using Locomotive Scroll in a React application.</p>
//         {/* Add more content here */}
//       </section>
//     </div>
//   );
// };

// export default SmoothScrollComponent;
