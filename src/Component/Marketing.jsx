import React from 'react';
import marketimg from '../../public/assets/image 18.png';
import marketingsecondimg from '../../public/assets/image 19.png';
import marketingthirdimg from '../../public/assets/image 20 (1).png';

const Marketing = () => {
    return (
        <>
<div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-8 space-y-4 sm:space-y-0">
    {/* Card 1 */}
    <div className="relative image-card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-[300px]">
        <img
            src={marketimg}
            alt="Creating Streamlined Safeguarding Processes with OneRen"
            className="w-full h-[200px] object-cover rounded-lg"
        />
        <div className="absolute bottom-[-50px] bg-white/90 w-[214px] p-4  text-center rounded-md">
            <p className="text-black
             font-light">
                Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a href="#" className="text-green-500 mt-2 block">
                Readmore →
            </a>
        </div>
    </div>

    {/* Card 2 */}
    <div className="relative image-card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-[300px]">
        <img
            src={marketingsecondimg}
            alt="Creating Streamlined Safeguarding Processes with OneRen"
            className="w-full h-[200px] object-cover rounded-lg"
        />
        <div className="absolute bottom-[-50px] bg-white/90 w-[220px] p-4  text-center rounded-md">
            <p className="text-black
             font-light">
                What are your safegaurding responsibilities and how can you manage then
            </p>
            <a href="#" className="text-green-500 mt-2 block">
                Readmore →
            </a>
         

            
        </div>
    </div>

    {/* Card 3 */}
    <div className="relative image-card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-[300px]">
        <img
            src={marketingthirdimg}
            alt="Creating Streamlined Safeguarding Processes with OneRen"
            className="w-full h-[200px] object-cover rounded-lg"
        />
        <div className="absolute bottom-[-50px] bg-white/90 w-[214px] p-4  text-center rounded-md">
            <p className="text-black
             font-light">
                Revamping in Membership Model with Traition Austrialia
            </p>
            <a href="#" className="text-green-500 mt-2 block">
                Readmore →
            </a>
        </div>
    </div>
</div>

        </>
    );
};

export default Marketing;



































