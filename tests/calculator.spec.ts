import sinon from 'sinon';
import {calculator, convertor, splitter, summarize, validator} from '../src/calculator';


describe('String Calculator', () => {
    describe('Split String', () => {
        it("should split string to numbers", () => {
            splitter("1,2").should.be.deep.equal(['1', '2']);
        });

        it('should work with empty string', () => {
            splitter("").should.be.deep.equal([]);
        })

        it('should work one number in a string', () => {
            splitter("1").should.be.deep.equal(['1']);
        })

        it('should split with newline', () => {
            splitter("1\n2").should.be.deep.equal(['1', '2'])
        })
    });

    describe('Convertor', () => {
        it('should convert strings to numbers', () => {
            convertor(['1', '2']).should.be.deep.equal([1, 2]);
        })
    });

    describe('Summarize', () => {
        it('should summarize all numbers', () => {
            summarize([1, 2]).should.be.equal(3);
        })
    })

    describe('Calculator', () => {
        let str: string;
        let result: any;
        let arr: string[]
        let Splitter: sinon.SinonStub;
        let Convertor: sinon.SinonStub;
        let Validator: sinon.SinonStub;
        let Summarize: sinon.SinonStub;

        beforeEach(() => {
            str = "1,2";
            result = {};
            arr = []
            Splitter = sinon.stub().returns([]);
            Convertor = sinon.stub().returns([]);
            Validator = sinon.stub().returns([]);
            Summarize = sinon.stub().returns(result);
        })

        it('should summarize string to number', () => {
            calculator("1,2").should.be.equal(3)
        })

        it('should split', () => {
            calculator(str, Splitter);
            Splitter.should.have.been.calledWith(str);
        });

        it('should split -> convert', () => {
            Splitter.returns(arr);
            calculator(str, Splitter, Convertor);
            Convertor.should.have.been.calledWith(arr);
        });

        it('should split -> convert -> validate', () => {
            Convertor.returns(arr);
            calculator(str, Splitter, Convertor, Validator);
            Validator.should.have.been.calledWith(arr);
        });

        it('should split -> convert -> validate -> summarize', () => {
            Validator.returns(arr);
            calculator(str, Splitter, Convertor, Validator, Summarize);
            Summarize.should.have.been.calledWith(arr);
        });

        it('should calculate with summarize', () => {
            calculator(str, Splitter, Convertor, Validator, Summarize).should.be.equal(result);
        });

    })
    describe('Validator', () => {
        // it('should not process with not numbers', () => {
        //
        // })
        // it('should be less than 3 numbers', () => {
        //     validator([1, 2]).should.be.deep.equal([1,2])
        // })
        // it('should throw error if more than 2 numbers', () => {
        //     (() => {
        //         validator([1,2,3]);
        //     }).should.throw();
        // })
    })

});
