const chai=require('chai')
const expect=chai.expect

describe.only('find the number of elements of a list',()=>{
    it('when the list is empty',()=>{
        let result=findNoofElements([])
        expect(result).to.be.eql(0)
    })

    it('when the list contains atleast one element',()=>{
        let result=findNoofElements([1,2,3,4,5])
        expect(result).to.be.eql(5)
    })


})

let findNoofElements=(list)=>{
    return list.length
}