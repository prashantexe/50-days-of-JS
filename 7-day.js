// TODO: Convert given seconds to space age on all planets of our solar system

const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

    const arr = [0.2408467, 0.61519726, 1.0, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132]
    const sec = 31557600

    Object.entries(yearsInAllPlanets).forEach(([key, value], index) => {
        // console.log(`${index}: ${key} = ${value}`);
        yearsInAllPlanets[key] = parseFloat((seconds/(sec*arr[index])).toFixed(2))
    });
	// Your solution ends here
	return yearsInAllPlanets
}

console.log(spaceAge(436575687))