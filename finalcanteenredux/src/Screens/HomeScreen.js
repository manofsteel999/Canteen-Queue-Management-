import React from 'react';
import NavbarComp from '../components/NavbarComponent';
import CarauselComp from '../components/CarauselComponent';
import FooterComp from '../components/FooterComponent';
import MiddleComp from '../components/MiddleComponent';

function HomeScreen(props) {
	return(
		<>
		<NavbarComp />
		<CarauselComp />
		<MiddleComp />
		<FooterComp />
		</>
	);
}


export default HomeScreen;