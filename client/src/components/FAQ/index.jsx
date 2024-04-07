import React, { useState } from 'react'
import { Text } from 'components';
const index = ({ question, answer }) => {
    const [toggle, settoggle] = useState(false);
    return (
        <div className='transition delay-300 duration-500 ease-in-out'>
 
            <div className="flex justify-end w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                <div className="flex md:flex-col justify-between items-center w-full gap-5">
                    <button className="w-[60%] md:w-full !text-gray-900 leading-[110%] focus:outline-none">
                        {question}
                    </button>
                    <div className="flex flex-col" onClick={() => settoggle(!toggle)} >
                        <Text
                            size="15xl"
                            as="p"
                            className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                        >
                            
                        </Text>
                    </div>
                </div>
            </div>

            {toggle && (
                <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                    <div className="flex md:flex-col justify-between items-center w-full gap-5">
                        <Text
                            size="15xl"
                            as="p"
                            className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                        >
                            {answer}
                        </Text>


                    </div>
                </div>
            )}

        </div>
    )
}

export default index