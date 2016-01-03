describe('Desktop home controller', function () {
    beforeEach(module('home'));

    var createController;
    beforeEach(inject(function (_$controller_) {
        createController = function () {
            return _$controller_('HomeController', {});
        };
    }));

    describe('asdf', function() {
        it('1is1', function() {
            expect('1').to.equal('1');
        });
    });

    // describe('when it loads', function () {
    //     it('should fill the two variables', function () {
    //         var controller = createController();
    //         expect(controller.herp).to.equal('Hello!');
    //         expect(controller.derp).to.equal('World :O');
    //     });
    // });

    // describe('when home loads', function() {
    //     it('should keep overlay-menu hidden', function () {
    //         var controller = createController();
    //         expect(controller.menuVisible).to.equal(false);
    //     });
    //     it('should make overlay-menu visible', function() {
    //         var controller = createController();
    //         controller.toggleMenu();
    //         expect(controller.menuVisible).to.equal(true);
    //     });
    // });
});
