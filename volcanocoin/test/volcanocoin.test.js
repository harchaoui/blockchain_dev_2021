const Vlc = artifacts.require('Volcanocoin');
let BN = require('bn.js');

contract('vlc', (accounts) => {
    let _vlc = null;
    let totalSupply = null;
    let owner = null;
    // let 
    before( async ()=>{
    _vlc = await Vlc.deployed();
    totalSupply = await _vlc.getTotalSupply.call()
    // owner = await _vlc.getOwner.call();
    
    console.log(`initial values: { add:${_vlc.address}, total supply:${totalSupply}, owner:${owner} }`);

    });

        it('Volcanocoin Should be deployed properly',async ()=>{
            
        assert(_vlc.address !== '' );
        console.log(`volcanocoin lives @:${_vlc.address}`); 
        }
        );

        it('Volcanocoin should has 1000 in supply', async ()=>{

        assert.equal(totalSupply, 1000 , "Minting failled")
        });

        it('Increase function should be executed by the OWNER only', async()=>{
            const owner = accounts[0]
            const oldBalance =  web3.utils.BN(await _vlc.getTotalSupply.call({from:owner}));
            await _vlc.increaseSupply({from:owner})
            const newBalance =  web3.utils.BN(await _vlc.getTotalSupply.call({from:owner}));
            console.log(`old balance =${oldBalance} , new balance=${newBalance}`)
            assert.equal(newBalance.toString(),'2000', 'OWNER successfuly executed the increaseTotal ')
            // expect(newBalance).to.eq(new BN('1000'))
            // expect(newBalance.eq(BN('2000'))).to.be.true;


        });

        // it('Increase function should not be executed by a HACKER', async() => {
            
        //     const hacker = accounts[2]
        //      const oldBalance = await _vlc.getBalance.call(owner)
        //     await _vlc.increaseSupply(owner)
        //     const newBalance = await _vlc.getBalance.call(owner)
        //     assert.equal(newBalance.toString(), oldBalance.toString(), 'OWNER successfuly executed the increaseTotal ')
        // }
        // );

        // it('should get the balance of 1000 from the owner address', async ()=>{
        //     const owner = accounts[0];
        //     const owner_balance = await _vlc.getBalance.call(owner)

        //     console.log(`get balance of the address owner=${owner} which is balance=${owner_balance}`)

        //     // assert.equal(owner_balance, web3.utils.toBN(1000), 'balance is diff from 1000')
        // });


});