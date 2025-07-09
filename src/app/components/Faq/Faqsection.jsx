import React from 'react';
import Faqs from './Faqs';
import { Homedata } from './Homedata';
function Faqsection() {
	return (
		<div className="flex justify-center bg-[#2A82AD]">
			<Faqs data={Homedata}></Faqs>
		</div>
	);
}

export default Faqsection;
