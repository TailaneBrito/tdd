function primeNumbers(number){
	let factor = number;
	let primeFactors = [];
	
	for (let divisor = 2; factor > 1; divisor++){
		for (; factor % divisor === 0; factor /= divisor) primeFactors.push(divisor);
	}
	return primeFactors;
}

describe('prime numbers canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true);
	});
	
	describe('a prime numbers should be', () => {
		it('for 1 return []', () => {
			expect(primeNumbers(1)).toStrictEqual([]);
				
		});
		it('for 2 return [2]', () => {
			expect(primeNumbers(2)).toStrictEqual([2]);
				
		});
		it('for 3 return [3]', () => {
			expect(primeNumbers(3)).toStrictEqual([3]);
				
		});
		it('for 4 return [2,2]', () => {
			expect(primeNumbers(4)).toStrictEqual([2,2]);
				
		});
		it('for 5 return [5]', () => {
			expect(primeNumbers(5)).toStrictEqual([5]);
				
		});
		it('for 6 return [2,3]', () => {
			expect(primeNumbers(6)).toStrictEqual([2,3]);
				
		});
		it('for 7 return [7]', () => {
			expect(primeNumbers(7)).toStrictEqual([7]);
				
		});
		it('for 8 return [2,2,2]', () => {
			expect(primeNumbers(8)).toStrictEqual([2,2,2]);
				
		});
		it('for 9 return [3,3]', () => {
			expect(primeNumbers(9)).toStrictEqual([3,3]);
				
		});
		it('for 10 return [2,5]', () => {
			expect(primeNumbers(10)).toStrictEqual([2,5]);
				
		});
		it('for 864 return [2,2,2,2,2,3,3,3]', () => {
			expect(primeNumbers(864)).toStrictEqual([2,2,2,2,2,3,3,3]);
				
		});
		it('for 997 return [997]', () => {
			expect(primeNumbers(997)).toStrictEqual([997]);
				
		});
	});



});
