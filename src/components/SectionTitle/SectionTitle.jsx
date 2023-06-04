function SectionTitle({ heading, subHeading }) {
    return (
        <div className=" text-center space-y-5 md:w-4/12 mx-auto py-4">
            <p className=" text-[#D99904]">---{subHeading}---</p>
            <h1 className="border-y-4 border-stone-300 uppercase text-4xl py-4">{heading}</h1>
        </div>
    )
}

export default SectionTitle;