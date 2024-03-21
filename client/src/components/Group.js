import Group2 from "./Group2";
import Group1 from "./Group1";

const Group = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem_1.125rem] min-h-[20rem] max-w-full z-[1] text-left text-[1.5rem] text-black1 font-junge">
      <Group2 group="/group-39.svg" educationSystem="education system" />
      <Group2
        group="/group-40@2x.png"
        educationSystem={`sports & fitness`}
        propRight="-7.812rem"
      />
      <Group2
        group="/group-41.svg"
        educationSystem={`beauty & wellness`}
        propRight="-6.312rem"
      />
      <Group1
        group="/group-42@2x.png"
        officialsFinancial={`officials & financial`}
      />
      <Group1 group="/group-43@2x.png" officialsFinancial="medical services" />
      <Group1
        group="/group-44.svg"
        officialsFinancial={`events & entertainment`}
      />
    </div>
  );
};

export default Group;
