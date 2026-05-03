import bg1 from '../../assets/desk/bg1.png';
import bg2 from '../../assets/desk/bg2.png';
import mobBg1 from '../../assets/desk/mob_card1.png';
import mobBg2 from '../../assets/desk/mob_card2.png';

const card = 'flex flex-col justify-center md:justify-start md:pt-[78px] gap-[8px] md:gap-[24px] items-center bg-contain bg-no-repeat w-[318px] h-[214px] md:w-[610px] md:h-[369px]';
const cardTitle = 'font-OneZero-Apparat-Book text-center text-[24px] leading-[115%] md:text-[42px] md:leading-[50px]';
const cardText = 'font-OneZero-Apparat-Book text-center text-[16px] leading-[130%] md:text-[24px] md:leading-[130%]';
const cardBold = 'font-OneZero-Apparat-Bold';

export default function V2ImpactCards() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const card1Bg = isMobile ? mobBg1 : bg1;
  const card2Bg = isMobile ? mobBg2 : bg2;

  return (
    <section dir="ltr" className="bg-white w-full py-[64px] md:py-[110px] px-5 md:px-0">
      <div className="w-full md:w-[90%] max-w-[1280px] mx-auto">
        <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-blue tracking-[0.14em] uppercase mb-[14px] md:mb-[18px]">
          03 · Financial impact
        </p>
        <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[12px] md:mb-[16px] max-w-[900px] text-darkGrey">
          Clear ROI. Lower costs, higher revenue.
        </h2>
        <p className="font-OneZero-Apparat-Book text-[15px] md:text-[20px] leading-[150%] text-darkGrey/70 mb-[48px] md:mb-[72px]">
          Proven results from a bank running on Ella for 2+ years.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-[28px] md:gap-[54px]">
          <div className={card} style={{ backgroundImage: `url(${card1Bg})` }}>
            <p className={cardTitle}>Cut cost to serve by 60%</p>
            <p className={cardText}>
              Achieved <span className={cardBold}>2× customer growth</span> with{' '}
              <span className={cardBold}>20% fewer bankers</span>, alongside
              rising satisfaction and trust
            </p>
          </div>

          <div className={card} style={{ backgroundImage: `url(${card2Bg})` }}>
            <p className={cardTitle}>Increase revenue by 15%</p>
            <p className={cardText}>
              Timely product recommendations expanded wallet share, achieving{' '}
              <span className={cardBold}>20% conversion</span> and{' '}
              <span className={cardBold}>10% AUM growth</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
