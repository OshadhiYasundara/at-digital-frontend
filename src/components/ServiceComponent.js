import Button from "./Button"

function ServiceComponent({align,title,description,image}) {
    return (
        <div className=" h-[414px] grid  md:grid-cols-10  my-4  ">
            {align=="left"&& <div className=" lg:col-span-5 md:col-span-4  grid justify-center  ">
                <img src={image} className="md:w-[275px] lg:w-[414px] "/>
            </div>}
            <div className="  lg:col-span-5 md:col-span-7 grid content-center md:-mt-20 lg:mt-0 ">
                <div className=" font-bold  text-primary  font-poppins text-[27px]">{title}</div>
                <div className=" font-normal text-base mt-4 lg:w-[542px] md:w-[393px] font-inter text-black">{description}</div>
                <div>
                <Button text={"LEARN MORE"}/>
                </div>
            </div>

            {align=="right"&& <div className=" lg:col-span-5  md:col-span-5 h-full grid justify-center">
                <img src={image} className=" md:w-[275px] lg:w-[414px] "/>
            </div>}

            
        </div>
    )
}

export default ServiceComponent
