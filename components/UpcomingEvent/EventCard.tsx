const EventCard = ({ title, date }: { title: string; date: string }) => (
    <div className="bg-[#86F897] p-3 mb-4 rounded">
      <div className=" text-[25px]">{title}</div>
      <div className="text-[17px]">Details v</div>
      <div className="text-[17px] mt-2 border-t-2 border-white pt-2 ">
        Date: {date}
      </div>
    </div>
  );

  export default EventCard;