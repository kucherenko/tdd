import sinon from 'sinon';
import {sum} from '../src/calculator';

describe("test", () => {
    let env: sinon.SinonSandbox;
    beforeEach(() => {
        env = sinon.createSandbox();
    })

    afterEach(() => {
        env.restore();
    })

    it('should be ololo', () => {
        sum(1, 2).should.be.equal(3);
    })

    it('should have stub', () => {
        const spy = env.spy();
        spy();
        spy.should.have.been.called;
    });
})
