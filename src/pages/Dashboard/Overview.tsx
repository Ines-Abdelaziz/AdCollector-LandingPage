import React from 'react';

import DefaultLayout from '../../layout/DefaultLayout';
import Mockup from '../../images/dashboard.png';
import Popup from '../../images/popup.png';
import cnrs from '../../images//logo/cnrs.png';
import xlogo from '../../images/logo/x-logo.png';
import lix from '../../images/logo/lix-logo.png';
import cedar from '../../images/logo/cedar-logo.png';
const Overview: React.FC = () => {
  return (
    <DefaultLayout>
<section   id={'About'} className="custom-gradient-2 dark:dark-gradient-1 relative z-10 overflow-hidden pt-30 sm:pt-40 xl:pt-45">
  <div className="mx-auto max-w-222.5 px-6 sm:px-8 xl:px-10 mx-90">
    <div className="animate_bottom text-center">
      <h1 className="mx-auto mb-6 w-full max-w-[750px] text-5xl font-bold text-black dark:text-white  xl:w-11/12 xl:text-title-2">
        Youtube{" "}
        <span className="text-primary">Ads Collector</span>
      </h1>
      <p className="mb-8.5 md:text-lg">
      We have designed YouTube Ad Collector to understand the content targeted at users while using YouTube plateform. Our first study was about content targeted at children-friendly content, we wanted to understand to what extent advertiser and Google are respecting the different rules that aim to protect children online.
      YouTube Ad Collector also provides you with statistics about the ads targeted at you while watching content on YouTube.
      
      Help us hold online platforms accountable by installing our browser extension, which sends us information about the ads you receive while watching videos on YouTube. The data transfers are anonymous; we do not collect your name or any other identifiable information.
      </p>
     
     
    </div>
  </div>
  <div className="mx-auto mt-15    justify-center px-100 sm:px-100 xl:px-100">
    <div className="  animate_bottom -mr-50 aspect-[243/146] w-full max-w-[1200px]">
      <img
        alt="Hero"
        loading="lazy"
        
        decoding="async"
        data-nimg={1}
        className="drop-shadow-1"
        src={Mockup}
        style={{ color: "transparent" }}
      />
    </div>
    
  </div>
  <div className="absolute bottom-0 left-0 -z-10">
    <svg
      width={992}
      height={571}
      viewBox="0 0 992 571"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_f_991_6824)">
        <circle cx={403} cy="588.92" r="288.864" fill="#8177F3" />
      </g>
      <defs>
        <filter
          id="filter0_f_991_6824"
          x="-185.864"
          y="0.0562744"
          width="1177.73"
          height="1177.73"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_991_6824"
          />
        </filter>
      </defs>
    </svg>
  </div>
  <div className="absolute bottom-0 right-0 -z-10">
    <svg
      width={772}
      height={549}
      viewBox="0 0 772 549"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_991_6823)">
        <circle cx="435.907" cy="435.929" r="135.281" fill="#77D1F3" />
      </g>
      <defs>
        <filter
          id="filter0_f_991_6823"
          x="0.626465"
          y="0.648193"
          width="870.562"
          height="870.562"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_991_6823"
          />
        </filter>
      </defs>
    </svg>
  </div>
  <div className="absolute bottom-0 left-0 right-0 -z-10">
    <svg
      width={1920}
      height={627}
      viewBox="0 0 1920 627"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-534.004 760.836L-534.004 0.836426L-532.796 0.836426L-532.796 760.836H-534.004Z"
          fill="url(#paint0_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-494.135 760.836L-494.135 0.836426L-492.927 0.836426L-492.927 760.836H-494.135Z"
          fill="url(#paint1_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-454.267 760.836L-454.266 0.836426L-453.058 0.836426L-453.058 760.836H-454.267Z"
          fill="url(#paint2_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-414.398 760.836L-414.398 0.836426L-413.189 0.836426L-413.189 760.836H-414.398Z"
          fill="url(#paint3_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-374.529 760.836L-374.529 0.836426L-373.32 0.836426L-373.32 760.836H-374.529Z"
          fill="url(#paint4_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-334.66 760.836L-334.66 0.836426L-333.451 0.836426L-333.451 760.836H-334.66Z"
          fill="url(#paint5_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-294.791 760.836L-294.791 0.836426L-293.583 0.836426L-293.583 760.836H-294.791Z"
          fill="url(#paint6_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-254.922 760.836L-254.922 0.836426L-253.714 0.836426L-253.714 760.836H-254.922Z"
          fill="url(#paint7_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-215.053 760.836L-215.053 0.836426L-213.845 0.836426L-213.845 760.836H-215.053Z"
          fill="url(#paint8_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-175.184 760.836L-175.184 0.836426L-173.976 0.836426L-173.976 760.836H-175.184Z"
          fill="url(#paint9_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-135.315 760.836L-135.315 0.836426L-134.107 0.836426L-134.107 760.836H-135.315Z"
          fill="url(#paint10_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-95.446 760.836L-95.4459 0.836426L-94.2377 0.836426L-94.2378 760.836H-95.446Z"
          fill="url(#paint11_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-55.577 760.836L-55.577 0.836426L-54.3688 0.836426L-54.3689 760.836H-55.577Z"
          fill="url(#paint12_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-15.7081 760.836V0.836426L-14.4999 0.836426V760.836H-15.7081Z"
          fill="url(#paint13_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.1609 760.836V0.836426L25.3691 0.836426L25.369 760.836H24.1609Z"
          fill="url(#paint14_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.0299 760.836V0.836426L65.238 0.836426V760.836H64.0299Z"
          fill="url(#paint15_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.899 760.836L103.899 0.836426L105.107 0.836426V760.836H103.899Z"
          fill="url(#paint16_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M143.768 760.836L143.768 0.836426L144.976 0.836426L144.976 760.836H143.768Z"
          fill="url(#paint17_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M183.637 760.836L183.637 0.836426L184.845 0.836426L184.845 760.836H183.637Z"
          fill="url(#paint18_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.505 760.836L223.506 0.836426L224.714 0.836426L224.714 760.836H223.505Z"
          fill="url(#paint19_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M263.374 760.836L263.374 0.836426L264.583 0.836426L264.583 760.836H263.374Z"
          fill="url(#paint20_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M303.243 760.836L303.243 0.836426L304.452 0.836426L304.451 760.836H303.243Z"
          fill="url(#paint21_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M343.112 760.836L343.112 0.836426L344.32 0.836426L344.32 760.836H343.112Z"
          fill="url(#paint22_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M382.981 760.836V0.836426L384.189 0.836426V760.836H382.981Z"
          fill="url(#paint23_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M422.85 760.836L422.85 0.836426L424.058 0.836426L424.058 760.836H422.85Z"
          fill="url(#paint24_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M462.719 760.836L462.719 0.836426L463.927 0.836426L463.927 760.836H462.719Z"
          fill="url(#paint25_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M502.588 760.836V0.836426L503.796 0.836426L503.796 760.836H502.588Z"
          fill="url(#paint26_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M542.457 760.836V0.836426L543.665 0.836426V760.836H542.457Z"
          fill="url(#paint27_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582.326 760.836V0.836426L583.534 0.836426V760.836H582.326Z"
          fill="url(#paint28_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M622.195 760.836V0.836426L623.403 0.836426V760.836H622.195Z"
          fill="url(#paint29_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M662.064 760.836V0.836426L663.272 0.836426V760.836H662.064Z"
          fill="url(#paint30_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M701.932 760.836V0.836426L703.141 0.836426V760.836H701.932Z"
          fill="url(#paint31_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M741.802 760.836V0.836426L743.01 0.836426V760.836H741.802Z"
          fill="url(#paint32_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M781.67 760.836V0.836426L782.879 0.836426V760.836H781.67Z"
          fill="url(#paint33_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M821.539 760.836V0.836426L822.747 0.836426V760.836H821.539Z"
          fill="url(#paint34_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M861.408 760.836V0.836426L862.616 0.836426V760.836H861.408Z"
          fill="url(#paint35_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M901.277 760.836V0.836426L902.485 0.836426V760.836H901.277Z"
          fill="url(#paint36_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M941.146 760.836V0.836426L942.354 0.836426V760.836H941.146Z"
          fill="url(#paint37_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M981.015 760.836V0.836426L982.223 0.836426V760.836H981.015Z"
          fill="url(#paint38_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1020.88 760.836V0.836426L1022.09 0.836426V760.836H1020.88Z"
          fill="url(#paint39_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1060.75 760.836V0.836426L1061.96 0.836426V760.836H1060.75Z"
          fill="url(#paint40_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 739.123H-563V737.917H1088.54V739.123Z"
          fill="url(#paint41_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 699.314H-563V698.107H1088.54V699.314Z"
          fill="url(#paint42_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 659.504H-563V658.297H1088.54V659.504Z"
          fill="url(#paint43_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 619.694H-563V618.488H1088.54V619.694Z"
          fill="url(#paint44_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 579.885H-563V578.678H1088.54V579.885Z"
          fill="url(#paint45_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 540.075H-563V538.869H1088.54V540.075Z"
          fill="url(#paint46_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 500.266H-563V499.059H1088.54V500.266Z"
          fill="url(#paint47_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 460.456H-563V459.25H1088.54V460.456Z"
          fill="url(#paint48_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 420.647H-563V419.44H1088.54V420.647Z"
          fill="url(#paint49_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 380.836H-563V379.63H1088.54V380.836Z"
          fill="url(#paint50_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 341.027H-563V339.821H1088.54V341.027Z"
          fill="url(#paint51_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 301.217H-563V300.011H1088.54V301.217Z"
          fill="url(#paint52_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 261.408H-563V260.202H1088.54V261.408Z"
          fill="url(#paint53_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 221.598H-563V220.392H1088.54V221.598Z"
          fill="url(#paint54_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 181.789H-563V180.582H1088.54V181.789Z"
          fill="url(#paint55_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 141.979H-563V140.773H1088.54V141.979Z"
          fill="url(#paint56_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 102.17H-563V100.963H1088.54V102.17Z"
          fill="url(#paint57_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 62.3602H-563V61.1539H1088.54V62.3602Z"
          fill="url(#paint58_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 22.5501H-563V21.3438H1088.54V22.5501Z"
          fill="url(#paint59_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M861.336 760.836V0.836426L862.544 0.836426V760.836H861.336Z"
          fill="url(#paint60_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M901.205 760.836L901.205 0.836426L902.413 0.836426L902.413 760.836H901.205Z"
          fill="url(#paint61_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M941.074 760.836V0.836426L942.282 0.836426V760.836H941.074Z"
          fill="url(#paint62_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M980.943 760.836V0.836426L982.151 0.836426V760.836H980.943Z"
          fill="url(#paint63_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1020.81 760.836V0.836426L1022.02 0.836426L1022.02 760.836H1020.81Z"
          fill="url(#paint64_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1060.68 760.836V0.836426L1061.89 0.836426V760.836H1060.68Z"
          fill="url(#paint65_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1100.55 760.836L1100.55 0.836426L1101.76 0.836426L1101.76 760.836H1100.55Z"
          fill="url(#paint66_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1140.42 760.836L1140.42 0.836426L1141.63 0.836426L1141.63 760.836H1140.42Z"
          fill="url(#paint67_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1180.29 760.836V0.836426L1181.5 0.836426V760.836H1180.29Z"
          fill="url(#paint68_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1220.16 760.836V0.836426L1221.36 0.836426V760.836H1220.16Z"
          fill="url(#paint69_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1260.03 760.836L1260.03 0.836426L1261.23 0.836426L1261.23 760.836H1260.03Z"
          fill="url(#paint70_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1299.89 760.836V0.836426L1301.1 0.836426V760.836H1299.89Z"
          fill="url(#paint71_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1339.76 760.836V0.836426L1340.97 0.836426V760.836H1339.76Z"
          fill="url(#paint72_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1379.63 760.836V0.836426L1380.84 0.836426V760.836H1379.63Z"
          fill="url(#paint73_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1419.5 760.836V0.836426L1420.71 0.836426V760.836H1419.5Z"
          fill="url(#paint74_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1459.37 760.836V0.836426L1460.58 0.836426V760.836H1459.37Z"
          fill="url(#paint75_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1499.24 760.836V0.836426L1500.45 0.836426V760.836H1499.24Z"
          fill="url(#paint76_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1539.11 760.836V0.836426L1540.32 0.836426V760.836H1539.11Z"
          fill="url(#paint77_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1578.98 760.836L1578.98 0.836426L1580.19 0.836426V760.836H1578.98Z"
          fill="url(#paint78_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1618.85 760.836L1618.85 0.836426L1620.05 0.836426L1620.05 760.836H1618.85Z"
          fill="url(#paint79_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1658.71 760.836L1658.71 0.836426L1659.92 0.836426L1659.92 760.836H1658.71Z"
          fill="url(#paint80_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1698.58 760.836V0.836426L1699.79 0.836426V760.836H1698.58Z"
          fill="url(#paint81_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1738.45 760.836V0.836426L1739.66 0.836426V760.836H1738.45Z"
          fill="url(#paint82_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1778.32 760.836V0.836426L1779.53 0.836426V760.836H1778.32Z"
          fill="url(#paint83_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1818.19 760.836V0.836426L1819.4 0.836426V760.836H1818.19Z"
          fill="url(#paint84_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1858.06 760.836V0.836426L1859.27 0.836426V760.836H1858.06Z"
          fill="url(#paint85_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1897.93 760.836L1897.93 0.836426L1899.14 0.836426L1899.14 760.836H1897.93Z"
          fill="url(#paint86_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1937.8 760.836L1937.8 0.836426L1939.01 0.836426L1939.01 760.836H1937.8Z"
          fill="url(#paint87_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1977.67 760.836V0.836426L1978.87 0.836426V760.836H1977.67Z"
          fill="url(#paint88_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2017.54 760.836V0.836426L2018.74 0.836426V760.836H2017.54Z"
          fill="url(#paint89_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2057.4 760.836V0.836426L2058.61 0.836426V760.836H2057.4Z"
          fill="url(#paint90_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2097.27 760.836V0.836426L2098.48 0.836426V760.836H2097.27Z"
          fill="url(#paint91_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2137.14 760.836V0.836426L2138.35 0.836426V760.836H2137.14Z"
          fill="url(#paint92_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2177.01 760.836V0.836426L2178.22 0.836426V760.836H2177.01Z"
          fill="url(#paint93_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2216.88 760.836V0.836426L2218.09 0.836426V760.836H2216.88Z"
          fill="url(#paint94_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2256.75 760.836V0.836426L2257.96 0.836426V760.836H2256.75Z"
          fill="url(#paint95_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2296.62 760.836V0.836426L2297.83 0.836426V760.836H2296.62Z"
          fill="url(#paint96_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2336.49 760.836V0.836426L2337.69 0.836426V760.836H2336.49Z"
          fill="url(#paint97_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2376.36 760.836V0.836426L2377.56 0.836426V760.836H2376.36Z"
          fill="url(#paint98_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2416.22 760.836V0.836426L2417.43 0.836426V760.836H2416.22Z"
          fill="url(#paint99_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2456.09 760.836V0.836426L2457.3 0.836426V760.836H2456.09Z"
          fill="url(#paint100_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 739.123H832.34V737.917H2483.88V739.123Z"
          fill="url(#paint101_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 699.314H832.34V698.107H2483.88V699.314Z"
          fill="url(#paint102_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 659.504H832.34V658.297H2483.88V659.504Z"
          fill="url(#paint103_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 619.694H832.34V618.488H2483.88V619.694Z"
          fill="url(#paint104_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 579.885H832.34V578.678H2483.88V579.885Z"
          fill="url(#paint105_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 540.075H832.34V538.869H2483.88V540.075Z"
          fill="url(#paint106_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 500.266H832.34V499.059H2483.88V500.266Z"
          fill="url(#paint107_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 460.456H832.34V459.25H2483.88V460.456Z"
          fill="url(#paint108_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 420.647H832.34V419.44H2483.88V420.647Z"
          fill="url(#paint109_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 380.836H832.34V379.63H2483.88V380.836Z"
          fill="url(#paint110_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 341.027H832.34V339.821H2483.88V341.027Z"
          fill="url(#paint111_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 301.217H832.34V300.011H2483.88V301.217Z"
          fill="url(#paint112_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 261.408H832.34V260.202H2483.88V261.408Z"
          fill="url(#paint113_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 221.598H832.34V220.392H2483.88V221.598Z"
          fill="url(#paint114_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 181.789H832.34V180.582H2483.88V181.789Z"
          fill="url(#paint115_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 141.979H832.34V140.773H2483.88V141.979Z"
          fill="url(#paint116_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 102.17H832.34V100.963H2483.88V102.17Z"
          fill="url(#paint117_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 62.3602H832.34V61.1539H2483.88V62.3602Z"
          fill="url(#paint118_linear_992_8281)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 22.5501H832.34V21.3438H2483.88V22.5501Z"
          fill="url(#paint119_linear_992_8281)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint32_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint33_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint34_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint35_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint36_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint37_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint38_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint39_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint40_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint41_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint42_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint43_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint44_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint45_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint46_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint47_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint48_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint49_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint50_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint51_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint52_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint53_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint54_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint55_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint56_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint57_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint58_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint59_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint60_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint61_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint62_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint63_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint64_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint65_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint66_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint67_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint68_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint69_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint70_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint71_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint72_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint73_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint74_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint75_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint76_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint77_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint78_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint79_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint80_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint81_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint82_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint83_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint84_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint85_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint86_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint87_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint88_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint89_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint90_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint91_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint92_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint93_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint94_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint95_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint96_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint97_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint98_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint99_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint100_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint101_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint102_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint103_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint104_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint105_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint106_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint107_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint108_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint109_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint110_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint111_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint112_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint113_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint114_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint115_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint116_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint117_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint118_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint119_linear_992_8281"
          x1="960.44"
          y1="466.936"
          x2="960.44"
          y2="626.441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>
<section id={'Installation'} className="relative z-1 overflow-hidden bg-white py-17.5 sm:py-22.5 xl:py-27.5">
  <div  className="animate_bottom mx-auto max-w-120 px-4 text-center sm:px-8 xl:px-0">
  
    <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl xl:text-custom-xl">
      Installation
    </h2>
    <a
  href="#"
  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 my-10">
  <span>
 
    <svg      
 width={25} height={25} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z"/><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M96 124c15.464 0 28-12.536 28-28s-12.536-28-28-28-28 12.536-28 28 12.536 28 28 28Z"/><path stroke="#ffffff" stroke-width="12" d="M96 68h66m-41.751 42-33 57.158M71.751 110l-33-57.158"/></svg>
  </span>
  Add To Chrome
</a>

  </div>
  <div className="mx-auto mt-20 max-w-292.5 px-4 sm:mt-25 sm:px-8 xl:px-0">
    <div className="mb-20 flex items-start gap-15 sm:mb-25 xl:gap-20">
      <div className="animate_left w-full max-w-[570px]">
     
        <div className="mt-9.5">
          <div className="mb-9">
            <h5 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
             Add The Extension To Chrome
            </h5>
            <p className="xl:w-10/12">
            Sign the consent on the page that appears after installing the extension
            </p>
          </div>
          <div>
            <h5 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            Pin The Extension
            </h5>
            <p className="xl:w-10/12">
            Pin the extension to the browser toolbar by clicking on the extensions icon
            </p>
          </div>
          <div className='py-7'>
            <h5 className="mb-1.5 text-2xl font-semibold text-black dark:text-white ">
            Sign in with Google
            </h5>
            <p className="xl:w-10/12">
            Click on the extension icon and sign in with your Google account 
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden w-full lg:block">
        <div className="flex w-full flex-wrap gap-x-6 gap-y-6.5">
          <div className="animate_right w-full max-w-[200px] xl:max-w-[248px]">
            <div className="relative aspect-[62/53] w-full max-w-[200px] xl:max-w-[248px]">
              {/* image */}
            </div>
          </div>
          <div className="animate_right w-full max-w-[200px] xl:max-w-[248px]">
            <div className="relative aspect-[248/245] w-full max-w-[200px] xl:max-w-[248px]">
           {/* image */}
            </div>
          </div>
          <div className="animate_right w-full max-w-[200px] xl:max-w-[248px]">
            <div className="relative -mt-6.5 aspect-[248/240] w-full max-w-[200px] xl:max-w-[248px]">
            {/* image */}
            </div>
          </div>
          <div className="animate_right w-full max-w-[200px] xl:max-w-[248px] ">
            <div className="relative aspect-[248/220] w-full max-w-[200px] xl:max-w-[248px]">
              {/* image */}
            </div>
          </div>
        </div>
     
        <div className="bg-gradient-to-r from-purple-700 to-cyan-400 absolute left-1/2 top-1/2 -z-1 h-[382px] w-full max-w-[382px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 blur-[150px]" />
        <div className="bg-gradient-to-r from-purple-700 to-cyan-400 absolute left-1/2 top-1/2 -z-1 h-[162px] w-full max-w-[162px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 blur-[75px]" />
      </div>
    </div>
    <div className="max-w-[1600px] rounded-lg border border-[#F5C5BB] bg-[#FCEDEA] py-4 pl-4 pr-5.5 shadow-2 dark:border-[#EA4E2C] dark:bg-[#1B1B24]">
  <div className="flex items-center justify-between">
    <div className="flex flex-grow items-center gap-8">
      <div className="flex h-15 w-full max-w-15 items-center justify-center rounded-md bg-[#EA4E2C]">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2021 3.33462C14.7513 3.02546 15.3708 2.86304 16.001 2.86304C16.6312 2.86304 17.2507 3.02546 17.7999 3.33462C18.349 3.64379 18.8092 4.08926 19.136 4.62807L19.1389 4.63282L30.4322 23.4862L30.4403 23.5C30.7605 24.0544 30.9299 24.683 30.9317 25.3233C30.9335 25.9635 30.7676 26.593 30.4505 27.1493C30.1335 27.7055 29.6763 28.169 29.1245 28.4937C28.5727 28.8184 27.9455 28.9929 27.3053 29L27.2943 29.0001L4.69668 29C4.05647 28.993 3.42928 28.8184 2.87748 28.4937C2.32568 28.169 1.86851 27.7055 1.55146 27.1493C1.23441 26.593 1.06853 25.9635 1.07033 25.3233C1.07212 24.683 1.24152 24.0544 1.56168 23.5L1.5698 23.4862L12.8631 4.63282L13.721 5.1467L12.866 4.62807C13.1928 4.08926 13.653 3.64379 14.2021 3.33462ZM14.5773 5.6632C14.5769 5.66391 14.5764 5.66462 14.576 5.66532L3.29013 24.5062C3.14689 24.7567 3.07113 25.0402 3.07032 25.3289C3.0695 25.6199 3.1449 25.906 3.28902 26.1589C3.43313 26.4117 3.64093 26.6224 3.89175 26.77C4.14117 26.9167 4.42447 26.996 4.71376 27H27.2882C27.5775 26.996 27.8608 26.9167 28.1103 26.77C28.3611 26.6224 28.5689 26.4117 28.713 26.1589C28.8571 25.906 28.9325 25.6199 28.9317 25.3289C28.9309 25.0402 28.8551 24.7567 28.7119 24.5062L17.426 5.66532C17.4256 5.66462 17.4251 5.66391 17.4247 5.6632C17.2762 5.41924 17.0676 5.21752 16.8187 5.07739C16.5691 4.93686 16.2875 4.86304 16.001 4.86304C15.7146 4.86304 15.4329 4.93686 15.1833 5.07739C14.9345 5.21752 14.7258 5.41924 14.5773 5.6632Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 11C16.5523 11 17 11.4477 17 12V17.3333C17 17.8856 16.5523 18.3333 16 18.3333C15.4477 18.3333 15 17.8856 15 17.3333V12C15 11.4477 15.4477 11 16 11Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 22.6666C15 22.1143 15.4477 21.6666 16 21.6666H16.0133C16.5656 21.6666 17.0133 22.1143 17.0133 22.6666C17.0133 23.2189 16.5656 23.6666 16.0133 23.6666H16C15.4477 23.6666 15 23.2189 15 22.6666Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
       
        < p className="text-sm font-medium"> If you are using some ad blocker like AdBlock Plus, you need to disable it on YouTube in order to get the most out of YouTube Ad Collector. Also, YouTube Ad Collector is not compatible with tracking protection settings, and third-party cookies should be allowed in your browser. Finally, you need to set your language in YouTube to Portuguese (Brazil), English (US) or French (France). Currently, we do not support other languages.Sorry! There was a problem with your request
        </p>
      </div>
    </div>
   
  </div>
</div>


      </div>
   
   
  
</section>






<section id={'How'} className="relative z-10 py-17.5 sm:py-22.5 xl:py-27.5">
  <span className="custom-gradient-3 dark:dark-gradient-2 absolute bottom-0 left-0 -z-10 block h-104.5 w-full bg-[linear-gradient(180deg,rgba(249,250,251,0.00)_0%,#F9FAFB_100%)]" />
  <div className="animate_bottom mx-auto max-w-220 px-4 text-center sm:px-8 xl:px-0">
   
    <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl xl:text-custom-xl">
    How does it work?
    </h2>
    <span className="font-heading mb-5 inline-block text-title-6 font-medium  dark:text-black-5 mx-90 my-10">
    YouTube Ad Collector works silently in the background while you are browsing YouTube without any overhead to your browsing experience. It analyzes the content you receive in YouTube to show you aggregate statistics about the ads you receive from advertisers.
    </span>
    <h4 className="text-xl font-semibold text-black dark:text-white text-primary sm:text-2xl xl:text-custom-xl">
    What data we collect from you ?

    </h4>

  </div>
  <div className="mx-auto mt-15 max-w-292.5 px-4 sm:px-8 xl:px-0">
    <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
      <div className="animate_bottom dark:hover:custom-dark-shadow rounded-xl border border-stroke bg-white p-7 hover:shadow-9 dark:border-stroke-dark dark:bg-box-dark">
       
        <h3 className="mb-3.5 text-xl font-semibold text-black dark:text-white xl:text-title-6">
         Youtube Ads
        </h3>
        <p>
        Data about ads you receive while you browse YouTube

        </p>
      </div>
      <div className="animate_bottom dark:hover:custom-dark-shadow rounded-xl border border-stroke bg-white p-7 hover:shadow-9 dark:border-stroke-dark dark:bg-box-dark">
       
        <h3 className="mb-3.5 text-xl font-semibold text-black dark:text-white xl:text-title-6">
          Ad Explanations
        </h3>
        <p>
        The accompanied explanations that YouTube provides

        </p>
      </div>
      <div className="animate_bottom dark:hover:custom-dark-shadow rounded-xl border border-stroke bg-white p-7 hover:shadow-9 dark:border-stroke-dark dark:bg-box-dark">
     
        <h3 className="mb-3.5 text-xl font-semibold text-black dark:text-white xl:text-title-6">
          Videos
        </h3>
        <p>
        Data about videos you watch

        </p>
      </div>
      <div className="animate_bottom dark:hover:custom-dark-shadow rounded-xl border border-stroke bg-white p-7 hover:shadow-9 dark:border-stroke-dark dark:bg-box-dark">
       
        <h3 className="mb-3.5 text-xl font-semibold text-black dark:text-white xl:text-title-6">
          Channels
        </h3>
        <p>
        Data about channels where the videos are from

        </p>
      </div>
      <div className="animate_bottom dark:hover:custom-dark-shadow rounded-xl border border-stroke bg-white p-7 hover:shadow-9 dark:border-stroke-dark dark:bg-box-dark">
       
        <h3 className="mb-3.5 text-xl font-semibold text-black dark:text-white xl:text-title-6">
          Anonymous Profile
        </h3>
        <p>
        Hashed versions of your user id, your age ,sex, and country

        </p>
      </div>
      
    </div>
    <div className="animate_bottom mx-auto max-w-220 px-4 text-center sm:px-8 xl:px-0 py-10">
   

   <h4 className="text-xl font-semibold text-black dark:text-white text-primary sm:text-2xl xl:text-custom-xl">
   How is my data going to be used ?

   </h4>
   <span className="font-heading mb-5 inline-block text-title-6 font-medium  dark:text-black-5 mx-10 my-10">
   Your data is going to be used in our research, but only in an aggregated way. All traces of data are pseudonymized before they arrive on our servers.

</span>

 </div>
 <div className="animate_bottom mx-auto max-w-220 px-4 text-center sm:px-8 xl:px-0 pb-10">
   

   <h4 className="text-xl font-semibold text-black dark:text-white text-primary sm:text-2xl xl:text-custom-xl">
   Is my data going to be safe?

   </h4>
   <span className="font-heading mb-5 inline-block text-title-6 font-medium  dark:text-black-5 mx-10 mt-10">
   We will store your data in the servers of <a className='text-primary underline'href="https://www.liglab.fr/en" target="_blank">the Grenoble Computer Science Laboratory (LIGLAB) </a> , protected by the LIGLAB firewall.

</span>

 </div>
   
  </div>
</section>
<section  className="relative z-1 overflow-hidden bg-white py-17.5 sm:py-22.5 xl:py-27.5">
  <div  className="animate_bottom mx-auto max-w-120 px-4 text-center sm:px-8 xl:px-0">
  
    <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl xl:text-custom-xl">
      Statistics
    </h2>
   

  </div>
  <div className="mx-auto mt-20 max-w-292.5 px-4 sm:mt-25 sm:px-8 xl:px-0">
    <div className="mb-20 flex justify-between gap-15 sm:mb-25 xl:gap-20">
      <div className="animate_left w-full max-w-[570px]">
     
        <div className="mt-9.5 ">
          <div className="mb-9 items-start">
            <h5 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
             Open The Extensions
            </h5>
            <p className="xl:w-10/12">
            Click on the popup menu of the extension to access the services we provide.
            </p>
          </div>
          <div className='items-end mt-60'>
            <h5 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            General statistics
            </h5>
            <p className="xl:w-10/12">
            See how many ads you are targeted with on YouTube and what are the information gathered about you to reach you by the advertisers and the platfrom.</p>
          </div>
        
        </div>
      </div>
      <div className="relative hidden w-full lg:block">
      <div className="mt-4.5 w-full max-w-[600px] space-y-4.5">
 
        <div className="animate_left  ">
            <img
            alt="features"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="shadow-10 w-full max-w-[250px]"
            
            src={Popup}
            />
        </div>
        <div className="animate_left  ">
            <img
            alt="features"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="shadow-10 "
           
            src={Mockup}
            />
        </div>
        </div>


     
         </div>
    </div>
   

      </div>
   
   
  
</section>
<section id={'Research'} className="relative z-1 overflow-hidden bg-gray-1 py-17.5 dark:bg-meta-2 sm:py-22.5 xl:py-27.5">
  <div className="animate_bottom mx-auto max-w-215 px-4 text-center sm:px-8 xl:px-0">
   
    <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl xl:text-custom-xl">
    Research
    </h2>
    <span className="font-heading mb-5 inline-block text-title-6 font-medium  dark:text-black-5 mx-90 my-10">
    Here is the research we managed to produce thanks to data donations from users:
</span>
  </div>
  <div className="p-4 sm:p-6 xl:p-9 flex justify-center">
  <div className="min-w-[370px] max-w-[1200px] rounded-md border border-stroke py-1 dark:border-strokedark">
    <ul className="flex flex-col">
      <li className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark">
       
        <span><a href="#">
    {" "}
    S. Chouaki, I. Bouzenia, O. Goga, B. Roussillon.{" "}
    <b className='text-primary'>
      Exploring the Online Micro-targeting Practices of Small, Medium, and Large
      Businesses,{" "}
    </b>{" "}
    <i>
      <b className='text-primary' >CSCW 2022 </b> (ACM Conference on Computer-Supported Cooperative Work
      and Social Computing)
    </i>
  </a>{" "}</span>
      </li>
      <li className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark">
        
                <span><a
            href="https://lig-membres.imag.fr/gogao/papers/pol_ads_WWW2020.pdf"
            target="_blank"
        >
            {" "}
            M. Silva, L. Santos de Oliveira, A. Andreou, P. Olmo Vaz de Melo, O. Goga,
            F. Benevenuto.{" "}
            <b className='text-primary'>
            Facebook Ads Monitor: An Independent Auditing System for Political Ads on
            Facebook,{" "}
            </b>{" "}
            <i>
            <b className='text-primary'>WWW '20 </b> (The Web Conference 2020)
            </i>
        </a>{" "} </span>
      </li>
      <li className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark">

        <span>
                <a
            href="https://lig-membres.imag.fr/gogao/papers/YouTube-NDSS.pdf"
            target="_blank"
        >
            {" "}
            A. Andreou, M. Silva, F. Benevenuto, O. Goga, P. Loiseau, A. Mislove.{" "}
            <b className='text-primary'>Measuring the Facebook Advertising Ecosystem, </b>{" "}
            <i>
            <b className='text-primary'>NDSS 2019</b> (The Network and Distributed System Security Symposium)
            </i>
        </a>{" "}

        </span>
      </li>
      <li className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark">
  
        <span> 
            
                    <a
                href="https://lig-membres.imag.fr/gogao/papers/fb_ad_transparency_NDSS2018.pdf"
                target="_blank"
            >
                {" "}
                A. Andreou, G. Venkatadri, O. Goga, K. Gummadi, P. Loiseau, A. Mislove.{" "}
                <b className='text-primary'>
                Investigating Ad Transparency Mechanisms in Social Media: A Case Study of
                Facebook’s Explanations,{" "}
                </b>{" "}
                <i>
                <b className='text-primary'>NDSS 2018</b> (The Network and Distributed System Security Symposium)
                </i>
            </a>{" "}
             </span>
      </li>
      
    </ul>
  </div>
</div>

  <div className="absolute bottom-0 left-0 right-0 -z-10">
    <svg
      width={1920}
      height={497}
      viewBox="0 0 1920 497"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-534.004 760L-534.004 0L-532.796 5.27318e-08L-532.796 760H-534.004Z"
          fill="url(#paint0_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-494.135 760L-494.135 0L-492.927 5.27318e-08L-492.927 760H-494.135Z"
          fill="url(#paint1_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-454.267 760L-454.266 0L-453.058 5.27318e-08L-453.058 760H-454.267Z"
          fill="url(#paint2_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-414.398 760L-414.398 0L-413.189 5.27318e-08L-413.189 760H-414.398Z"
          fill="url(#paint3_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-374.529 760L-374.529 0L-373.32 5.27318e-08L-373.32 760H-374.529Z"
          fill="url(#paint4_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-334.66 760L-334.66 0L-333.451 5.27318e-08L-333.451 760H-334.66Z"
          fill="url(#paint5_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-294.791 760L-294.791 0L-293.583 5.27318e-08L-293.583 760H-294.791Z"
          fill="url(#paint6_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-254.922 760L-254.922 0L-253.714 5.27318e-08L-253.714 760H-254.922Z"
          fill="url(#paint7_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-215.053 760L-215.053 0L-213.845 5.27318e-08L-213.845 760H-215.053Z"
          fill="url(#paint8_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-175.184 760L-175.184 0L-173.976 5.27318e-08L-173.976 760H-175.184Z"
          fill="url(#paint9_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-135.315 760L-135.315 0L-134.107 5.27318e-08L-134.107 760H-135.315Z"
          fill="url(#paint10_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-95.446 760L-95.4459 0L-94.2377 5.27318e-08L-94.2378 760H-95.446Z"
          fill="url(#paint11_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-55.577 760L-55.577 0L-54.3688 5.27318e-08L-54.3689 760H-55.577Z"
          fill="url(#paint12_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-15.7081 760V0L-14.4999 5.27318e-08V760H-15.7081Z"
          fill="url(#paint13_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.1609 760V0L25.3691 5.27318e-08L25.369 760H24.1609Z"
          fill="url(#paint14_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.0299 760V0L65.238 5.27318e-08V760H64.0299Z"
          fill="url(#paint15_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.899 760L103.899 0L105.107 5.27318e-08V760H103.899Z"
          fill="url(#paint16_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M143.768 760L143.768 0L144.976 5.27318e-08L144.976 760H143.768Z"
          fill="url(#paint17_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M183.637 760L183.637 0L184.845 5.27318e-08L184.845 760H183.637Z"
          fill="url(#paint18_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.505 760L223.506 0L224.714 5.27318e-08L224.714 760H223.505Z"
          fill="url(#paint19_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M263.374 760L263.374 0L264.583 5.27318e-08L264.583 760H263.374Z"
          fill="url(#paint20_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M303.243 760L303.243 0L304.452 5.27318e-08L304.451 760H303.243Z"
          fill="url(#paint21_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M343.112 760L343.112 0L344.32 5.27318e-08L344.32 760H343.112Z"
          fill="url(#paint22_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M382.981 760V0L384.189 5.27318e-08V760H382.981Z"
          fill="url(#paint23_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M422.85 760L422.85 0L424.058 5.27318e-08L424.058 760H422.85Z"
          fill="url(#paint24_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M462.719 760L462.719 0L463.927 5.27318e-08L463.927 760H462.719Z"
          fill="url(#paint25_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M502.588 760V0L503.796 5.27318e-08L503.796 760H502.588Z"
          fill="url(#paint26_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M542.457 760V0L543.665 5.27318e-08V760H542.457Z"
          fill="url(#paint27_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582.326 760V0L583.534 5.27318e-08V760H582.326Z"
          fill="url(#paint28_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M622.195 760V0L623.403 5.27318e-08V760H622.195Z"
          fill="url(#paint29_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M662.064 760V0L663.272 5.27318e-08V760H662.064Z"
          fill="url(#paint30_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M701.932 760V0L703.141 5.27318e-08V760H701.932Z"
          fill="url(#paint31_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M741.802 760V0L743.01 5.27318e-08V760H741.802Z"
          fill="url(#paint32_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M781.67 760V0L782.879 5.27318e-08V760H781.67Z"
          fill="url(#paint33_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M821.539 760V0L822.747 5.27318e-08V760H821.539Z"
          fill="url(#paint34_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M861.408 760V0L862.616 5.27318e-08V760H861.408Z"
          fill="url(#paint35_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M901.277 760V0L902.485 5.27318e-08V760H901.277Z"
          fill="url(#paint36_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M941.146 760V0L942.354 5.27318e-08V760H941.146Z"
          fill="url(#paint37_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M981.015 760V0L982.223 5.27318e-08V760H981.015Z"
          fill="url(#paint38_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1020.88 760V0L1022.09 5.27318e-08V760H1020.88Z"
          fill="url(#paint39_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1060.75 760V0L1061.96 5.27318e-08V760H1060.75Z"
          fill="url(#paint40_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 738.287H-563V737.081H1088.54V738.287Z"
          fill="url(#paint41_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 698.477H-563V697.271H1088.54V698.477Z"
          fill="url(#paint42_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 658.667H-563V657.461H1088.54V658.667Z"
          fill="url(#paint43_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 618.858H-563V617.651H1088.54V618.858Z"
          fill="url(#paint44_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 579.048H-563V577.842H1088.54V579.048Z"
          fill="url(#paint45_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 539.239H-563V538.032H1088.54V539.239Z"
          fill="url(#paint46_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 499.429H-563V498.223H1088.54V499.429Z"
          fill="url(#paint47_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 459.62H-563V458.413H1088.54V459.62Z"
          fill="url(#paint48_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 419.81H-563V418.604H1088.54V419.81Z"
          fill="url(#paint49_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 380H-563V378.794H1088.54V380Z"
          fill="url(#paint50_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 340.19H-563V338.984H1088.54V340.19Z"
          fill="url(#paint51_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 300.381H-563V299.175H1088.54V300.381Z"
          fill="url(#paint52_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 260.571H-563V259.365H1088.54V260.571Z"
          fill="url(#paint53_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 220.762H-563V219.556H1088.54V220.762Z"
          fill="url(#paint54_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 180.952H-563V179.746H1088.54V180.952Z"
          fill="url(#paint55_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 141.143H-563V139.937H1088.54V141.143Z"
          fill="url(#paint56_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 101.333H-563V100.127H1088.54V101.333Z"
          fill="url(#paint57_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 61.5238H-563V60.3175H1088.54V61.5238Z"
          fill="url(#paint58_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.54 21.7137H-563V20.5073H1088.54V21.7137Z"
          fill="url(#paint59_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M861.336 760V0L862.544 5.27318e-08V760H861.336Z"
          fill="url(#paint60_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M901.205 760L901.205 0L902.413 5.27318e-08L902.413 760H901.205Z"
          fill="url(#paint61_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M941.074 760V0L942.282 5.27318e-08V760H941.074Z"
          fill="url(#paint62_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M980.943 760V0L982.151 5.27318e-08V760H980.943Z"
          fill="url(#paint63_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1020.81 760V0L1022.02 5.27318e-08L1022.02 760H1020.81Z"
          fill="url(#paint64_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1060.68 760V0L1061.89 5.27318e-08V760H1060.68Z"
          fill="url(#paint65_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1100.55 760L1100.55 0L1101.76 5.27318e-08L1101.76 760H1100.55Z"
          fill="url(#paint66_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1140.42 760L1140.42 0L1141.63 5.27318e-08L1141.63 760H1140.42Z"
          fill="url(#paint67_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1180.29 760V0L1181.5 5.27318e-08V760H1180.29Z"
          fill="url(#paint68_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1220.16 760V0L1221.36 5.27318e-08V760H1220.16Z"
          fill="url(#paint69_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1260.03 760L1260.03 0L1261.23 5.27318e-08L1261.23 760H1260.03Z"
          fill="url(#paint70_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1299.89 760V0L1301.1 5.27318e-08V760H1299.89Z"
          fill="url(#paint71_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1339.76 760V0L1340.97 5.27318e-08V760H1339.76Z"
          fill="url(#paint72_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1379.63 760V0L1380.84 5.27318e-08V760H1379.63Z"
          fill="url(#paint73_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1419.5 760V0L1420.71 5.27318e-08V760H1419.5Z"
          fill="url(#paint74_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1459.37 760V0L1460.58 5.27318e-08V760H1459.37Z"
          fill="url(#paint75_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1499.24 760V0L1500.45 5.27318e-08V760H1499.24Z"
          fill="url(#paint76_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1539.11 760V0L1540.32 5.27318e-08V760H1539.11Z"
          fill="url(#paint77_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1578.98 760L1578.98 0L1580.19 5.27318e-08V760H1578.98Z"
          fill="url(#paint78_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1618.85 760L1618.85 0L1620.05 5.27318e-08L1620.05 760H1618.85Z"
          fill="url(#paint79_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1658.71 760L1658.71 0L1659.92 5.27318e-08L1659.92 760H1658.71Z"
          fill="url(#paint80_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1698.58 760V0L1699.79 5.27318e-08V760H1698.58Z"
          fill="url(#paint81_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1738.45 760V0L1739.66 5.27318e-08V760H1738.45Z"
          fill="url(#paint82_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1778.32 760V0L1779.53 5.27318e-08V760H1778.32Z"
          fill="url(#paint83_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1818.19 760V0L1819.4 5.27318e-08V760H1818.19Z"
          fill="url(#paint84_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1858.06 760V0L1859.27 5.27318e-08V760H1858.06Z"
          fill="url(#paint85_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1897.93 760L1897.93 0L1899.14 5.27318e-08L1899.14 760H1897.93Z"
          fill="url(#paint86_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1937.8 760L1937.8 0L1939.01 5.27318e-08L1939.01 760H1937.8Z"
          fill="url(#paint87_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1977.67 760V0L1978.87 5.27318e-08V760H1977.67Z"
          fill="url(#paint88_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2017.54 760V0L2018.74 5.27318e-08V760H2017.54Z"
          fill="url(#paint89_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2057.4 760V0L2058.61 5.27318e-08V760H2057.4Z"
          fill="url(#paint90_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2097.27 760V0L2098.48 5.27318e-08V760H2097.27Z"
          fill="url(#paint91_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2137.14 760V0L2138.35 5.27318e-08V760H2137.14Z"
          fill="url(#paint92_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2177.01 760V0L2178.22 5.27318e-08V760H2177.01Z"
          fill="url(#paint93_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2216.88 760V0L2218.09 5.27318e-08V760H2216.88Z"
          fill="url(#paint94_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2256.75 760V0L2257.96 5.27318e-08V760H2256.75Z"
          fill="url(#paint95_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2296.62 760V0L2297.83 5.27318e-08V760H2296.62Z"
          fill="url(#paint96_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2336.49 760V0L2337.69 5.27318e-08V760H2336.49Z"
          fill="url(#paint97_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2376.36 760V0L2377.56 5.27318e-08V760H2376.36Z"
          fill="url(#paint98_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2416.22 760V0L2417.43 5.27318e-08V760H2416.22Z"
          fill="url(#paint99_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2456.09 760V0L2457.3 5.27318e-08V760H2456.09Z"
          fill="url(#paint100_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 738.287H832.34V737.081H2483.88V738.287Z"
          fill="url(#paint101_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 698.477H832.34V697.271H2483.88V698.477Z"
          fill="url(#paint102_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 658.667H832.34V657.461H2483.88V658.667Z"
          fill="url(#paint103_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 618.858H832.34V617.651H2483.88V618.858Z"
          fill="url(#paint104_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 579.048H832.34V577.842H2483.88V579.048Z"
          fill="url(#paint105_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 539.239H832.34V538.032H2483.88V539.239Z"
          fill="url(#paint106_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 499.429H832.34V498.223H2483.88V499.429Z"
          fill="url(#paint107_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 459.62H832.34V458.413H2483.88V459.62Z"
          fill="url(#paint108_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 419.81H832.34V418.604H2483.88V419.81Z"
          fill="url(#paint109_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 380H832.34V378.794H2483.88V380Z"
          fill="url(#paint110_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 340.19H832.34V338.984H2483.88V340.19Z"
          fill="url(#paint111_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 300.381H832.34V299.175H2483.88V300.381Z"
          fill="url(#paint112_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 260.571H832.34V259.365H2483.88V260.571Z"
          fill="url(#paint113_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 220.762H832.34V219.556H2483.88V220.762Z"
          fill="url(#paint114_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 180.952H832.34V179.746H2483.88V180.952Z"
          fill="url(#paint115_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 141.143H832.34V139.937H2483.88V141.143Z"
          fill="url(#paint116_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 101.333H832.34V100.127H2483.88V101.333Z"
          fill="url(#paint117_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 61.5238H832.34V60.3175H2483.88V61.5238Z"
          fill="url(#paint118_linear_974_6352)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2483.88 21.7137H832.34V20.5073H2483.88V21.7137Z"
          fill="url(#paint119_linear_974_6352)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint32_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint33_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint34_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint35_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint36_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint37_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint38_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint39_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint40_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint41_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint42_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint43_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint44_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint45_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint46_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint47_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint48_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint49_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint50_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint51_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint52_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint53_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint54_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint55_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint56_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint57_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint58_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint59_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint60_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint61_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint62_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint63_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint64_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint65_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint66_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint67_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint68_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint69_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint70_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint71_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint72_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint73_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint74_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint75_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint76_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint77_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint78_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint79_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint80_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint81_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint82_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint83_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint84_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint85_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint86_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint87_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint88_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint89_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint90_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint91_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint92_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint93_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint94_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint95_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint96_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint97_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint98_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint99_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint100_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint101_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint102_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint103_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint104_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint105_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint106_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint107_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint108_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint109_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint110_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint111_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint112_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint113_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint114_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint115_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint116_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint117_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint118_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
        <linearGradient
          id="paint119_linear_974_6352"
          x1="960.44"
          y1="365.968"
          x2="960.44"
          y2="501.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#949494" stopOpacity={0} />
          <stop offset={1} stopColor="#8F8F8F" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
    <svg
      width={1758}
      height={449}
      viewBox="0 0 1758 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.55">
        <g filter="url(#filter0_f_974_6353)">
          <circle cx="1046.7" cy={711} r={311} fill="#3935FB" />
        </g>
        <g filter="url(#filter1_f_974_6353)">
          <circle cx={711} cy={711} r={311} fill="#48DCFF" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_974_6353"
          x="335.704"
          y={0}
          width={1422}
          height={1422}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={200}
            result="effect1_foregroundBlur_974_6353"
          />
        </filter>
        <filter
          id="filter1_f_974_6353"
          x={0}
          y={0}
          width={1422}
          height={1422}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={200}
            result="effect1_foregroundBlur_974_6353"
          />
        </filter>
      </defs>
    </svg>
  </div>
</section>




<section id={'Who'} className="relative bg-white px-4 py-17.5 sm:px-8 sm:py-22.5 xl:px-0 xl:py-27.5">
  <h2 className="animate_bottom text-center text-3xl font-semibold text-black dark:text-white sm:text-4xl">
   Who Are We
    <span className="mx-auto mt-7.5 block h-[3px] w-full max-w-[70px] bg-gray-3" />
  </h2>
  <div className="p-4 sm:p-6 xl:p-9 flex justify-center">
  <div className="w-full max-w-[1000px] rounded-md border border-stroke py-2.5 dark:border-strokedark">
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4.5 hover:bg-[#F9FAFB] dark:hover:bg-meta-4">
        <div className="flex items-center">
          <div>
            <h4 className="text-base font-medium text-black dark:text-white">
              <a className='text-primary'>Ines Abdelaziz</a> -   Research  Intern at{" "}
              <a  className='text-primary' href="http://www.cnrs.fr/" target="_blank">
                CNRS
            </a>
            </h4>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between p-4.5 hover:bg-[#F9FAFB] dark:hover:bg-meta-4">
        <div className="flex items-center">
          <div>
            <h4 className="font-medium text-black dark:text-white">
            <a className='text-primary'>Hiba Louzzani</a> -   Research  Intern at{" "}
              <a  className='text-primary' href="http://www.cnrs.fr/" target="_blank">
                CNRS
            </a>
            </h4>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between p-4.5 hover:bg-[#F9FAFB] dark:hover:bg-meta-4">
        <div className="flex items-center">
          <div>
            <h4 className="font-medium text-black dark:text-white ">
              <a href='https://www.lix.polytechnique.fr/~goga/' className='text-primary'>Oana Goga</a> -   Research
            Scientist at{" "}
            <a  className='text-primary' href="http://www.cnrs.fr/" target="_blank">
                CNRS
            </a>
            , France
            </h4>
           
          </div>
        </div>
        <div></div>
      </div>

    </div>
  </div>
</div>

  <div className="mt-15 xl:mt-20">
    <div className="animate_bottom flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 xl:gap-14">
      <a className="w-1/3 hover:opacity-90 sm:w-auto" href="https://www.cnrs.fr/" target="_blank">
        <img
          alt="Clients"
          loading="lazy"
          width={173}
          height={23}
          decoding="async"
          data-nimg={1}
          className="dark:hidden"
          style={{ color: "transparent" }}
          src={cnrs}
        />
       
      </a>
      <a className="w-1/3 hover:opacity-90 sm:w-auto" href="https://www.polytechnique.edu/en" target="_blank">
        <img
          alt="Clients"
          loading="lazy"
          width={173}
          height={23}
          decoding="async"
          data-nimg={1}
          className="dark:hidden"
          style={{ color: "transparent" }}
          src={xlogo}
        />
       
      </a>
      <a className="w-1/3 hover:opacity-90 sm:w-auto" href="https://www.lix.polytechnique.fr/" target="_blank">
        <img
          alt="Clients"
          loading="lazy"
          width={173}
          height={23}
          decoding="async"
          data-nimg={1}
          className="dark:hidden"
          style={{ color: "transparent" }}
          src={lix}
        />
       
      </a>
      <a className="w-1/3 hover:opacity-90 sm:w-auto" href="https://team.inria.fr/cedar/" target="_blank">
        <img
          alt="Clients"
          loading="lazy"
          width={173}
          height={32}
          decoding="async"
          data-nimg={1}
          className="dark:hidden"
          style={{ color: "transparent" }}
          src={cedar}
        />
    
      </a>
     
    </div>
  </div>
  <span className="custom-gradient-6 dark:dark-gradient-6 absolute bottom-0 left-1/2 block h-0.5 w-full max-w-300 -translate-x-1/2" />
</section>



    </DefaultLayout>
  );
};

export default Overview;
