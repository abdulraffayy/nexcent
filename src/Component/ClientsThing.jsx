

import React, { useState, useEffect } from 'react';
import iconsone from '../../public/assets/Vector.png';
import iconssecond from '../../public/assets/Icon (1).png';
import iconsthird from '../../public/assets/Vector (1).png';
import iconfourth from '../../public/assets/Icon.png';

const ClientsThing = () => {
    const [members, setMembers] = useState(0);
    const [clubs, setClubs] = useState(0);
    const [eventBookings, setEventBookings] = useState(0);
    const [payments, setPayments] = useState(0);

    const countUp = (start, end, duration, setter) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setter(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        countUp(0, 2245341, 2000, setMembers); 
        countUp(0, 46328, 2000, setClubs); 
        countUp(0, 828867, 2000, setEventBookings); 
        countUp(0, 1926436, 2000, setPayments); 
    }, []);

    return (
        <div className=" bg-gray-100 py-16 flex justify-between flex-col md:flex-row px-8 md:px-24">
            <div className="md:w-1/2 text-left flex flex-col items-start md:items-center">
                <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                    <span className="block xl:inline xl:whitespace-nowrap">Helping a local <br /></span>
                    <span className="block xl:inline xl:whitespace-nowrap">
                        <span className="text-green-500">business reinvent itself</span>
                    </span>
                </h1>
                <p className="mt-4 text-gray-600">
                    We reached here with our hard work and dedication.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:w-1/2">
                <div className="flex items-start space-x-4">
                    <img src={iconsone} alt="Members icon" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{members.toLocaleString()}</h3>
                        <p className="text-gray-600">Members</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <img src={iconssecond} alt="Clubs icon" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{clubs.toLocaleString()}</h3>
                        <p className="text-gray-600">Clubs</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <img src={iconsthird} alt="Event bookings icon" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{eventBookings.toLocaleString()}</h3>
                        <p className="text-gray-600">Event Bookings</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <img src={iconfourth} alt="Payments icon" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{payments.toLocaleString()}</h3>
                        <p className="text-gray-600">Payments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsThing;
