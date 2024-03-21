import ContainerDiv from "../components/ContainerDiv";
import FrameComponent9 from "../components/FrameComponent9";
import ContactInfo from "../components/ContactInfo";
import FrameComponent8 from "../components/FrameComponent8";

const ContactUs = () => {
  return (
    <div className="w-full relative rounded-xl bg-ghostwhite-200 overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border gap-[8.956rem] tracking-[normal] text-left text-[1.688rem] text-indigo font-inter mq450:gap-[2.25rem_8.956rem] mq800:gap-[4.5rem_8.956rem]">
      <div className="h-[1.019rem] relative leading-[1.625rem] capitalize hidden shrink-0 z-[0] mq450:text-[1.375rem] mq450:leading-[1.313rem]">
        Contextify
      </div>
      <ContainerDiv />
      <FrameComponent9 />
      <ContactInfo />
      <section className="w-full h-[153.188rem] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem]">
        <div className="absolute top-[0rem] left-[-34.562rem] w-[69.338rem] h-[81.775rem]">
          <div className="absolute top-[4.876rem] left-[60.261rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[0.001rem] left-[43.199rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0] z-[1]" />
          <div className="absolute top-[29.501rem] left-[57.824rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0] z-[2]" />
        </div>
        <img
          className="absolute top-[129.438rem] left-[6rem] w-[7.5rem] h-[2.438rem] overflow-hidden"
          loading="lazy"
          alt=""
          src="/frame-8.svg"
        />
        <img
          className="absolute top-[133.438rem] left-[6rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
          loading="lazy"
          alt=""
          src="/frame-9.svg"
        />
        <img
          className="absolute top-[136.563rem] left-[6rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
          loading="lazy"
          alt=""
          src="/frame-10.svg"
        />
        <img
          className="absolute top-[46rem] left-[-8.062rem] w-[112.231rem] h-[80.619rem] z-[3]"
          alt=""
          src="/background.svg"
        />
        <img
          className="absolute top-[84.25rem] left-[67.875rem] w-[69.338rem] h-[81.775rem] object-contain z-[5]"
          loading="lazy"
          alt=""
          src="/group-1000003855@2x.png"
        />
      </section>
      <FrameComponent8 />
    </div>
  );
};

export default ContactUs;
