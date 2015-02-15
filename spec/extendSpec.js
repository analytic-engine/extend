describe('util', function(){
    it('should be defined', function(){
        expect(util).toBeDefined();
    });

    describe('extend', function(){
        it('should be defined', function(){
            expect(util.extend).toBeDefined();
        });

        it('should extend objects', function(){
            var result = util.extend({}, {a: 1});

            expect(result.a).toBe(1);
        });

        it('should extend objects with multiple extensions', function(){
            var result = util.extend({}, {a: 1}, {b: 2});

            expect(result.a).toBe(1);
            expect(result.b).toBe(2);
        });

        it('should only extend if key not present', function(){
            var result = util.extend({a : 2}, {a: 1});

            expect(result.a).toBe(2);
        });

        it('should use earlier extension', function(){
            var result = util.extend({}, {a: 1}, {a: 2});

            expect(result.a).toBe(1);
        });
    });
});
