function primeNumbers(number){
	if (number > 1) return [number];
	return [];
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
		it.todo('for 4 return [2,2]');
		it.todo('for 5 return [5]');
		it.todo('for 6 return [2,3]');
		it.todo('for 7 return [7]');
		it.todo('for 8 return [2,2,2]');
		it.todo('for 9 return [3,3]');
		it.todo('for 10 return [2,5]');
	});



});
