export const FormFeedback = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          className="grow rounded border border-gray-200 px-4 py-[14px] focus:outline-primary"
          type="text"
          placeholder="Template Cookie"
        />
        <input
          className="grow rounded border border-gray-200 px-4 py-[14px] focus:outline-primary"
          type="text"
          placeholder="zakirsoft@gmail.com"
        />
      </div>
      <input
        className="mb-4 rounded border border-gray-200 px-4 py-[14px] focus:outline-primary"
        type="text"
        placeholder="Message"
      />
      <textarea
        className="mb-6 h-[98px] resize-none rounded border border-gray-200 px-4 py-[14px] focus:outline-primary"
        name=""
        placeholder="Subjects"
      ></textarea>
      <button className="px-8 py-4 lg:w-fit rounded-full bg-primary text-white">
        Send Message
      </button>
    </form>
  );
};
