import React, { useEffect } from 'react';
import Head from 'next/head';
import SEOTags from '~/components/SEOTags';
import Lesson, { LessonContributors, LessonCover } from '~/components/lessons';
import { Pava } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';

const contributors = [Pava];
const chapters = [
  { title: '<img> element', id: 'img-element' },
  { title: 'Width & Height', id: 'width-height' },
  { title: 'Lazy loading', id: 'lazy-loading' },
  { title: 'Imagini Responsive', id: 'responsive' },
  { title: '<picture> element', id: 'picture-element' },
];

export default function ImagesLesson() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Imagini | Lecție HTML"
          description="Învață să adaugi și optimizezi imagini în paginile Web."
          url="https://FrontEnd.ro/html/images"
        />
      </Head>
      <Lesson chapters={chapters}>
        <h1> Imagini </h1>

        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <p>
          Cred ca putem cu totii admite ca aplicatiile Web ar
          fi mult mult mai boring fara imagini. Deci hai sa
          incheiem asteptarea si sa vedem cum adaugam imagini
          in site-urile noastre si care sunt cele mai bune practici legate de acest subiect.
        </p>
        <section>
          <h2> The Basics </h2>
          <h3 className="heading-with-href" id="img-element">
            <a href="#img-element">#</a>
            {'<'}
            img
            {'>'}
            {' '}
            element
          </h3>
          <p>
            Primul si cel mai obisnuit mod de a adauga o imagine este folosind elementul img alaturi de 2 atribute
          </p>
          <ul className="with--bullets">
            <li>
              <strong>src</strong>
              : pentru a specifica URL-ul imaginii
            </li>
            <li>
              <strong>alt</strong>
              : pentru a descrie imaginea in format text - in caz ca aceasta nu poate fi incarcata
            </li>
          </ul>
          <Highlight
            language="html"
            code={`
<img srcset="bike_low.jpg 800w, 
  bike_med.jpg 2000w, 
  bike_high.jpg 4000w" 
  src="bike_med.jpg" alt="red bike">`}
          />
        </section>

      </Lesson>
    </>
  );
}

function CoverSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      viewBox="0 0 922.73 636.56"
      width="922.73"
      height="636.56"
      preserveAspectRatio="xMinYMax slice"
    >
      <defs>
        <linearGradient
          id="a"
          x1="704.04"
          x2="704.04"
          y1="628.14"
          y2="138.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="gray" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="560.05"
          x2="560.05"
          y1="462.46"
          y2="29.48"
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1="600"
          x2="600"
          y1="694.72"
          y2="205.28"
          xlinkHref="#a"
        />
        <linearGradient
          id="e"
          x1="456.01"
          x2="456.01"
          y1="529.04"
          y2="96.07"
          xlinkHref="#a"
        />
        <linearGradient
          id="g"
          x1="495.96"
          x2="495.96"
          y1="761.31"
          y2="271.86"
          xlinkHref="#a"
        />
        <linearGradient
          id="h"
          x1="351.97"
          x2="351.97"
          y1="595.63"
          y2="162.65"
          xlinkHref="#a"
        />
        <clipPath id="c" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="395.46"
            y="178.13"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
        <clipPath id="f" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="291.42"
            y="244.72"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
        <clipPath id="i" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="187.38"
            y="311.3"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
      </defs>
      <path
        fill="url(#a)"
        d="M1055 612.72a15.34 15.34 0 01-15.26 15.42h-671.4a15.34 15.34 0 01-15.26-15.42V154.11a15.34 15.34 0 0115.26-15.42h671.4a15.34 15.34 0 0115.26 15.42"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#f8f8f8"
        d="M902.54 466.52a14.91 14.91 0 01-14.91 14.91H231.8a14.91 14.91 0 01-14.91-14.91V23.19A14.91 14.91 0 01231.8 8.31h655.83a14.91 14.91 0 0114.91 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="243.09"
        y="29.48"
        fill="url(#b)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="250.89"
        y="39.44"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#c)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M216.54 446.49L388.98 248.9a34.33 34.33 0 0148.57-3.17l48.29 42.58a34.33 34.33 0 0044.8.54l147.58-124.03a34.33 34.33 0 0147.49 3.19l181.11 199.3a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.17 37.45h-646a34.33 34.33 0 01-34.31-33.29 34.33 34.33 0 018.42-23.61z"
        />
      </g>
      <circle cx="325.27" cy="105.32" r="38.25" fill="#eb4d4b" />
      <path
        fill="url(#d)"
        d="M951 679.3a15.34 15.34 0 01-15.26 15.42H264.3A15.34 15.34 0 01249 679.3V220.7a15.34 15.34 0 0115.26-15.42H935.7A15.34 15.34 0 01951 220.7"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#f8f8f8"
        d="M798.5 533.11a14.91 14.91 0 01-14.91 14.91H127.76a14.91 14.91 0 01-14.91-14.91V89.77a14.91 14.91 0 0114.91-14.91h655.83a14.91 14.91 0 0114.91 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="139.05"
        y="96.07"
        fill="url(#e)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="146.85"
        y="106.03"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#f)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M112.5 513.08l172.44-197.6a34.33 34.33 0 0148.58-3.17l48.28 42.6a34.33 34.33 0 0044.8.54L574.18 231.4a34.33 34.33 0 0147.49 3.19l181.1 199.34a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.19 37.36h-646a34.33 34.33 0 01-34.31-33.29 34.33 34.33 0 018.45-23.55z"
        />
      </g>
      <circle cx="221.23" cy="171.9" r="38.25" fill="#eb4d4b" />
      <path
        fill="url(#g)"
        d="M846.92 745.89a15.34 15.34 0 01-15.26 15.42h-671.4A15.34 15.34 0 01145 745.89V287.28a15.34 15.34 0 0115.26-15.42h671.4a15.34 15.34 0 0115.26 15.42"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#fff"
        d="M694.43 599.69a14.91 14.91 0 01-14.91 14.91H23.72a14.91 14.91 0 01-14.91-14.91V156.31a14.91 14.91 0 0114.91-14.91h655.83a14.91 14.91 0 0114.88 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="35.01"
        y="162.65"
        fill="url(#h)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="42.81"
        y="172.61"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#i)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M8.43 579.66l172.48-197.59a34.33 34.33 0 0148.52-3.17l48.28 42.6a34.33 34.33 0 0044.8.54l147.63-124.05a34.33 34.33 0 0147.49 3.19l181.1 199.34a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.19 37.36h-646a34.33 34.33 0 01-34.31-33.2 34.33 34.33 0 018.42-23.65z"
        />
      </g>
      <circle cx="117.19" cy="238.49" r="38.25" fill="#eb4d4b" />
    </svg>
  );
}
