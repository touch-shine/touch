import React from 'react';
import Faqs from './Faqs';
import { Homedata } from './Homedata';
function Faqsection() {
	return (
		<div className="flex justify-center bg-white">
			<Faqs data={Homedata}></Faqs>
		</div>
	);
}

export default Faqsection;
